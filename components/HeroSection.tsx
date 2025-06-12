"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-12"
        >
          <Image
            src="/zyper-logo.png"
            alt="Zyper Logo"
            width={200}
            height={200}
            className="mx-auto mb-4 rounded-full"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-8 md:bg-gradient-to-r bg-gradient-to-l from-white to-blue-400 bg-clip-text text-transparent"
        >
          Welcome to Zyper
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          ZYPER is a community-driven platform that merges DeFi, NFTs, PAYMENTS, and GAMING into a seamless
          ecosystem built on TON.
        </motion.p>
      </div>
    </section>
  )
}
