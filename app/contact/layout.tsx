import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact Us | Puzzle to Paddock",
  description:
    "Get in touch with Puzzle to Paddock — call, WhatsApp, email or book a call to talk about family, nanny, au pair or NDIS support services.",
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
