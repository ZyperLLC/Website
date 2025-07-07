"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import ZyperCardsSection from "@/components/ZyperCardsSection"
import ContactSection from "@/components/ContactSection"

export default function ZyperLanding() {
  const [showRaffle] = useState(true)

  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">
      <div className="relative z-10">
        <HeroSection />
        <ZyperCardsSection />
        <ContactSection />

        <AnimatePresence>
          {showRaffle && (
            <motion.div
              key="raffle-modal"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Add your content here when needed */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
