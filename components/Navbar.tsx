"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Dolphin Dash Game", href: "/dolphindash" },
  { name: "Zyper Card", href: "/zypercard" },
  { name: "Tokenized Assets", href: "/tokenizedassets" },
  { name: "Dolphin NFT", href: "/dolphinnft" },
  { name: "NFT Collection", href: "/nftcollection" },
  { name: "Social Hub", href: "/socialhub" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about" },
]

export default function Navbar() {
  const patth = usePathname();
  const isActivePath = navItems.findIndex(item => item.href === patth);
  const [selectedNavItem, setSelectedNavItem] = useState(isActivePath)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 z-20 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                selectedNavItem === index ? "text-red-500" : "text-gray-300"
              }`}
              onClick={() => setSelectedNavItem(index)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
          >
            <div className="py-6 px-6 h-screen space-y-4 flex flex-col items-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block text-lg font-medium transition-colors hover:text-blue-400 ${
                    selectedNavItem === index ? "text-red-500" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedNavItem(index)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
