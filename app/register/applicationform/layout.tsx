import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Carer Registration Form | Puzzle to Paddock",
  description: "Apply to join Puzzle to Paddock's network of nannies, au pairs and allied health professionals.",
}

export default function ApplicationFormLayout({ children }: { children: ReactNode }) {
  return children
}
