import { NextResponse } from "next/server"
import { submitToAirtable } from "../../../lib/airtable"

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  try {
    await submitToAirtable("AIRTABLE_NEWSLETTER_TABLE", "Newsletter Subscribers", {
      Email: email,
      "Subscribed At": new Date().toISOString(),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter subscription failed:", error)
    return NextResponse.json(
      { error: "We couldn't subscribe you right now. Please try again later." },
      { status: 502 },
    )
  }
}
