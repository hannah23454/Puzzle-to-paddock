import { NextResponse } from "next/server"
import { submitToAirtable } from "../../../lib/airtable"

export async function POST(request: Request) {
  const body = await request.json()
  const { type, firstName, lastName, email, phone, location, experience, message } = body

  if (!type || !firstName || !lastName || !email || !phone || !location) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  try {
    await submitToAirtable("AIRTABLE_REGISTER_TABLE", "Registrations", {
      "Registration Type": type,
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Phone: phone,
      Location: location,
      "Experience / Specialty": experience || "",
      Message: message || "",
      "Submitted At": new Date().toISOString(),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Register submission failed:", error)
    return NextResponse.json(
      { error: "We couldn't submit your registration. Please try again or contact us directly." },
      { status: 502 },
    )
  }
}
