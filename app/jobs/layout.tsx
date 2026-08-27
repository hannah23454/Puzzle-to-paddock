import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Job Opportunities | Puzzle to Paddock",
  description:
    "Browse nanny, au pair and NDIS support worker opportunities with Australian families — search by location, role type and pay.",
}

export default function JobsLayout({ children }: { children: ReactNode }) {
  return children
}
