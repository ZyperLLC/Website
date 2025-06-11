"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const cardImages = [
  { src: "token1.jpg" },
  { src: "token2.jpg" },
  { src: "token3.jpg" },
  { src: "token5.jpg" },
]

export default function ZyperTokenizedAssets() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDims()
    window.addEventListener("resize", updateDims)
    return () => window.removeEventListener("resize", updateDims)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Heading and Text */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Zyper Tokenized Assets
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 text-lg md:text-xl text-gray-300 space-y-6 text-left max-w-3xl mx-auto"
            >
              <p>
                <strong className="text-white text-xl">Real-World Value, On-Chain Utility</strong><br />
                Zyper is bringing real-world industries into the blockchain space through tokenized digital assets that offer transparency, liquidity, and tangible value. From NFTs to real-sector-backed tokens, our ecosystem is built to empower users with financial freedom and real utility.
              </p>

              <p>
                🌾 <strong>Agri Crypto — Farming Meets DeFi</strong><br />
                We’re bridging agriculture and blockchain by tokenizing agricultural assets. Through Agri Crypto, users can invest in real-world farming operations, support local producers, and receive token-based yields.
              </p>

              <ul className="list-none space-y-2">
                <li>🌱 <strong>Backed by real agricultural output</strong></li>
                <li>💰 <strong>Yield returns based on seasonal harvests</strong></li>
                <li>🌍 <strong>Support sustainable food systems with Web3</strong></li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Image Cards Row */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex flex-row flex-nowrap gap-8 justify-center">
            {cardImages.map(({ src }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-lg overflow-hidden cursor-pointer bg-gray-800 border border-gray-700 aspect-square flex items-center justify-center"
                style={{ width: "200px", height: "200px" }}
              >
                <img
                  src={src}
                  alt={`Token image ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
