"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import { Phone, MessageCircle, Calendar, X, MessagesSquare } from "lucide-react"
import Link from "next/link"

export const FloatingCTA = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="flex flex-col items-end gap-2">
          <Button
            className="bg-[#568f87] hover:bg-[#568f87]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
            asChild
          >
            <a
              href="https://wa.me/61300979054"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center"
            >
              <MessageCircle size={20} />
              <span className="ml-2 font-['Poppins']">WhatsApp Chat</span>
            </a>
          </Button>

          <Button
            className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
            asChild
          >
            <Link
              href="https://calendly.com/clo-puzzletopaddock"
              target="_blank"
              aria-label="Book a call"
              className="flex items-center justify-center"
            >
              <Calendar size={20} />
              <span className="ml-2 font-['Poppins']">Book Call</span>
            </Link>
          </Button>

          <Button
            className="bg-[#F5BABB] hover:bg-[#F5BABB]/90 text-white rounded-full p-3 sm:px-4 sm:py-3 shadow-lg hover:shadow-xl transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
            asChild
          >
            <a href="tel:+61234567890" aria-label="Call us" className="flex items-center justify-center">
              <Phone size={20} />
              <span className="ml-2 font-['Poppins']">Call</span>
            </a>
          </Button>
        </div>
      )}

      <Button
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all flex items-center justify-center p-0"
      >
        {isOpen ? <X size={22} /> : <MessagesSquare size={22} />}
      </Button>
    </div>
  )
}
