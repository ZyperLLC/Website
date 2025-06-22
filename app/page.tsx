"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import ZyperCardsSection from "@/components/ZyperCardsSection"
import ContactSection from "@/components/ContactSection"


export default function ZyperLanding() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        {dimensions.width > 0 &&
          [...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              animate={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ZyperCardsSection />
        <ContactSection />
      </div>
    </div>
  )
}
