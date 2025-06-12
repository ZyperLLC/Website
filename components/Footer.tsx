"use client"

import { motion } from "framer-motion"

export default function Footer() {
const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-12 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear}. Built on TON blockchain. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
