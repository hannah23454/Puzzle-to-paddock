import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Family Registration Form | Puzzle to Paddock",
  description: "Register your family with Puzzle to Paddock to get matched with a nanny, au pair or NDIS support professional.",
}

export default function FamilyFormLayout({ children }: { children: ReactNode }) {
  return children
}
