import type { Metadata } from "next"
import { Frame } from "../src/screens/Frame/Frame"
import { FloatingCTA } from "../components/layout/FloatingCTA"

export const metadata: Metadata = {
  title: "Puzzle to Paddock | Nannies, Au Pairs & NDIS Support in Australia",
  description:
    "Puzzle to Paddock connects Australian families with trusted nannies, au pairs, and NDIS-registered allied health and support professionals.",
}

export default function HomePage() {
  return (
    <>
      <Frame />
      <FloatingCTA />
    </>
  )
}
