import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Register | Puzzle to Paddock",
  description:
    "Register with Puzzle to Paddock as a family seeking care, a nanny or au pair looking for roles with rural families, or an allied health professional.",
}

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return children
}
