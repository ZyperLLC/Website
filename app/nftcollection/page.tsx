"use client"

// Import necessary libraries and components
import { motion } from "framer-motion" // For animations
import { Menu, X } from "lucide-react" // Menu icons for mobile nav
import { useState, useEffect } from "react" // React hooks
import Image from "next/image" // Optimized image rendering
import Link from "next/link" // For internal and external navigation
import { Button } from "@/components/ui/button" // UI button component
import { nftItems } from "@/lib/data" // Array of NFT items

export default function ZyperNFTCollection() {
  // Track viewport dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Toggle mobile nav
  const [selectedNavItem, setSelectedNavItem] = useState(2) // Default active nav item

  // Set window dimensions and update on resize
  useEffect(() => {
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDims()
    window.addEventListener("resize", updateDims)
    return () => window.removeEventListener("resize", updateDims)
  }, [])

  // Navigation menu items
  const navItems = [
    { name: "Zyper Card", href: "#" },
    { name: "Tokenized Assets", href: "#" },
    { name: "NFT Collection", href: "#" },
    { name: "Social hub", href: "#" },
    { name: "About Us", href: "#" },
  ]

  // Manually mapped custom links for specific NFT IDs
  const customLinks: Record<string, string> = {
    // (Shortened comment for brevity, full keys provided above)
    "164": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAL5wVZFxzx0QiWp3eaumaYPvUxvcnz6atyNsOY0iInYYWZ",
    "009": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAS-zdI4gBP8QnLSXRUIQ1nX_Qk4JfsZ29QroE-WUOFvazi",
    "042": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQCzGKEuIkK9iK8gemkdhm0IgQrBzrAVfZV9wWjuQbA9-CsX",
    "044": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAxFv8IF337jLsXzpxe1vPZEvlR714oIw_VT_ISn_ySrWe5",
    "050": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQBI4afeLBQhhbILPGy_bVLYo9DZxU9a1CjHClblOQFR1qMf",
    "077": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQCLhVi3OS_xnwqAMcdQIgqvt60RuCoYvX9MCQzdNXsHvXkZ",
    "078": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQDt0GxOMm60B-gBXdaeWIVAm2H3uKSxRr1HKY_CZkVRr_W1",
    "089": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQB0SjTpO1JHIuwZSlqr7fKlGi61QQvJH4oDemCRTW4i_9gt",
    "150": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQACf73rsecFtIj2x_JAx3dKF1NDRaEHZcEL6Jf8O8EemSUq",
    "151": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQBwYftMydblIxE253PD7bsAVZN-zLeAfgG8GqOL4EGI0bjQ",
    "155": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQCtCHI9qaptsk5DxqwlkV50AKG_RbDvQ04gzVQPem6wpbcd",
    "158": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAuSzXfy3pVaYN_zETfsAPXdLqxtoSgH523F_x9rj6NoUFx",
    "181": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQDAyHUdP5kUezyJtyMs5YrB0IWo46iaOb8LSeoWY4Tt9437",
    "252": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQBHROIuac8ALRXos9n15uEpCm1PhUi09zE6qz1yKeNVG9ts",
    "253": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQCBV0228a9wYjeL0xz0pfYJz4biYYCb1-IJPoLw9biMSH-s",
    "257": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQC6kFVD1tUmg8_1lIYS6QH7xoHqJZw8ilIg6AYzwHrOrPWQ",
    "272": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQDkZFs-XNTCscXIpTko65wqG1CwzbrTnORv6jJqVsz5Qrm8",
    "274": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAzCcm1qWhQW-gAk-JI-KmG7yGY8yX7VPAhxlyXSEDYoGqq",
    "276": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQAnbgxG_rJb9CJg5owriVqUFqvTUxjcApSYvAKlmYKDWqaF",
    "277": "https://getgems.io/collection/EQDY93c0ImQd2QV3iIa5BRZVAUJe9_-RxCcWAz3vbzRqb_8D/EQDUF9ZaSv934EZNvfvWLGsFZjJfGSSSHWWwDRIl2x1jpk1l",
    // Add more links as needed
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated background using floating dots */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        {dimensions.width > 0 && [...Array(50)].map((_, i) => (
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

      {/* Page content wrapper */}
      <div className="relative z-10">
        {/* Top navigation bar with animation */}
        <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Desktop nav items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    selectedNavItem === idx ? "text-red-500" : "text-gray-300"
                  }`}
                  onClick={() => setSelectedNavItem(idx)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile nav toggle button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-blue-400 transition-colors">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile nav dropdown */}
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50">
              <div className="py-6 px-6 h-screen space-y-4 flex flex-col items-center">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`block text-lg font-medium transition-colors hover:text-blue-400 ${
                      selectedNavItem === idx ? "text-red-500" : "text-gray-300"
                    }`}
                    onClick={() => {
                      setSelectedNavItem(idx)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Main NFT showcase section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Page heading */}
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zyper NFT Collection
            </motion.h2>

            {/* Subtitle paragraph */}
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-16">
              Dive into the Ocean of Utility. <strong className="text-blue-400">Dope Dolphins</strong> is Zyper’s genesis NFT collection, featuring 300 unique dolphins with real value. Holders can stake their NFTs for monthly TON rewards, gain access to exclusive airdrops, early access to the Zyper Crypto Card, and guaranteed cashback perks. Listed on Getgems, this collection is your ticket to the deeper side of Web3.
            </motion.p>

            {/* NFT grid cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {nftItems.map((nft, idx) => {
                const idMatch = nft.name.match(/#(\d+)/) // Extract ID from NFT name
                const id = idMatch ? idMatch[1] : "000"
                const customUrl = customLinks[id] // Check if custom link exists

                return customUrl ? (
                  // If custom external URL exists, use anchor tag
                  <a key={idx} href={customUrl} target="_blank" rel="noopener noreferrer" className="relative group rounded-2xl">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="relative group"
                    >
                      {/* Animated gradient glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-blue-400">{nft.name}</h3>
                          <p className="text-gray-400 text-sm">Exclusive collection item</p>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  // If no custom link, navigate to dynamic route page
                  <Link key={idx} href={`/nft/${id}`} className="relative group rounded-2xl">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-blue-400">{nft.name}</h3>
                          <p className="text-gray-400 text-sm">Exclusive collection item</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* CTA button to view full collection */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-center mt-16">
              <Link href="https://getgems.io/zyper?contentView=list#items" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                  Explore Full Collection
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
