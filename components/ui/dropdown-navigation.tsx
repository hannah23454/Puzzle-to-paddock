"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, type LucideIcon } from "lucide-react"

export type NavSubItem = {
  label: string
  description: string
  icon: LucideIcon
  href: string
}

export type NavItem = {
  id: number
  label: string
  href: string
  subMenus?: {
    title: string
    items: NavSubItem[]
  }[]
}

type Props = {
  navItems: NavItem[]
}

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [isHover, setIsHover] = React.useState<number | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  return (
    <ul className="relative flex items-center gap-1 xl:gap-2">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          <Link
            href={navItem.href}
            className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full px-3 py-1.5 font-normal text-[#252641] text-xs xl:text-sm tracking-wide transition-colors duration-300 hover:text-[#064232] font-['Poppins']"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
          >
            <span className="relative z-10">{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`relative z-10 h-3 w-3 transition-transform duration-300 ${
                  openMenu === navItem.label ? "rotate-180" : ""
                }`}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="nav-hover-bg"
                className="absolute inset-0 size-full bg-[#568f87]/10"
                style={{ borderRadius: 999 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              />
            )}
          </Link>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="absolute left-0 top-full z-50 w-auto pt-2">
                <motion.div
                  layoutId="nav-menu"
                  className="w-max rounded-2xl border border-gray-200 bg-white/95 p-5 shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex w-fit shrink-0 gap-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <div className="w-full min-w-[220px]" key={sub.title}>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-700 font-['Poppins']">
                          {sub.title}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item) => {
                            const Icon = item.icon
                            return (
                              <li key={item.label}>
                                <Link href={item.href} className="group flex items-start gap-3">
                                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-[#064232] transition-colors duration-300 group-hover:bg-[#064232] group-hover:text-white">
                                    <Icon className="h-4 w-4 flex-none" />
                                  </div>
                                  <div className="w-max leading-5">
                                    <p className="shrink-0 text-sm font-medium text-[#064232] font-['Poppins']">
                                      {item.label}
                                    </p>
                                    <p className="shrink-0 text-xs text-[#696983] transition-colors duration-300 group-hover:text-[#464646] font-['Poppins']">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  )
}
