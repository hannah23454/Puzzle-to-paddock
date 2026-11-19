import { NextResponse } from "next/server"
import { submitToAirtable } from "../../../lib/airtable"
import {
  type CleanValues,
  type RegistrationType,
  CONSENT_KEY,
  buildSummaryText,
  getAllFields,
  isRegistrationType,
  validateRegistration,
} from "../../../lib/registration-fields"

const WEBHOOK_TIMEOUT_MS = 10_000
const DELIVERY_ERROR = "We couldn't submit your registration. Please try again or contact us directly."

interface Submission {
  source: "Website form"
  message_id: string
  form_type: RegistrationType
  email: string
  phone: string
  fields: CleanValues
  text: string
}

const str = (value: CleanValues[string] | undefined): string => (typeof value === "string" ? value : "")

function buildSubmission(type: RegistrationType, fields: CleanValues): Submission {
  return {
    source: "Website form",
    message_id: `web-${type}-${crypto.randomUUID()}`,
    form_type: type,
    email: str(fields.email),
    phone: str(fields.phone),
    fields,
    text: buildSummaryText(type, fields),
  }
}

async function sendToWebhook(url: string, submission: Submission) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  })
  if (!response.ok) {
    throw new Error(`Intake webhook responded with ${response.status}`)
  }
}

/** Fallback until the webhook is configured: keep the existing Airtable "Registrations" columns. */
async function sendToAirtable(submission: Submission) {
  const { form_type: type, fields } = submission

  const firstName = type === "family" ? str(fields.contactFirstName) : str(fields.firstName)
  const lastName = type === "family" ? str(fields.familyName) : str(fields.lastName)
  const location =
    type === "family"
      ? [str(fields.townProperty), str(fields.state), str(fields.postcode)].filter(Boolean).join(", ")
      : type === "nanny"
        ? str(fields.currentLocation)
        : str(fields.location)
  const experience =
    type === "professional"
      ? str(fields.specialty)
      : type === "nanny" && typeof fields.yearsExperience === "number"
        ? `${fields.yearsExperience} years`
        : ""

  await submitToAirtable("AIRTABLE_REGISTER_TABLE", "Registrations", {
    "Registration Type": type,
    "First Name": firstName,
    "Last Name": lastName,
    Email: submission.email,
    Phone: submission.phone,
    Location: location,
    "Experience / Specialty": experience,
    Message: submission.text,
    "Submitted At": new Date().toISOString(),
  })
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }
  const input = body as Record<string, unknown>

  if (!isRegistrationType(input.type)) {
    return NextResponse.json({ error: "Please choose a registration type." }, { status: 400 })
  }
  const type = input.type

  // Validates required fields, email, phone, consent and exact option values;
  // drops unknown keys; trims and caps strings.
  const { values, errors } = validateRegistration(type, input)
  const errorKeys = Object.keys(errors)
  if (errorKeys.length > 0) {
    const labels = getAllFields(type)
      .filter((f) => errorKeys.indexOf(f.key) !== -1)
      .map((f) => (f.key === CONSENT_KEY ? "Consent" : f.label))
    return NextResponse.json(
      {
        error: `Please check these fields: ${labels.join("; ")}.`,
        fieldErrors: errors,
      },
      { status: 400 },
    )
  }

  const submission = buildSubmission(type, values)

  try {
    const webhookUrl = process.env.MAKE_INTAKE_WEBHOOK_URL
    if (webhookUrl) {
      await sendToWebhook(webhookUrl, submission)
    } else {
      await sendToAirtable(submission)
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Register submission failed:", error instanceof Error ? error.message : error)
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 502 })
  }
}
