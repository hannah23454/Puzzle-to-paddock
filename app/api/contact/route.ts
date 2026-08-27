import { NextResponse } from "next/server"
import { submitToAirtable } from "../../../lib/airtable"

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  try {
    await submitToAirtable("AIRTABLE_CONTACT_TABLE", "Contact Submissions", {
      Name: name,
      Email: email,
      Phone: phone || "",
      Subject: subject,
      Message: message,
      "Submitted At": new Date().toISOString(),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact submission failed:", error)
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or contact us directly." },
      { status: 502 },
    )
  }
}
