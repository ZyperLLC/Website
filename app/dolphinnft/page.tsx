'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const benefits = [
  '1.5x Game Credits in Dolphin Dash',
  'Stake for 10% APY',
  'Tier 2 Airdrop Eligibility',
  'Exclusive Merch & Skins Access',
  '7.7x Draw Payout Boost',
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function DolphinDashNFT() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const updateDims = () =>
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      updateDims()
      window.addEventListener("resize", updateDims)
      return () => window.removeEventListener("resize", updateDims)
    }, [])
  return (
    <section className="relative overflow-x-hidden text-white py-20 px-6 md:px-16">
       {/* Animated background using floating dots */}
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

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight "
        >
          Dolphin Dash NFT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c7b] to-[#9e46e8]">
            is Making Waves!
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Unlock a new upcoming key to the Zyper ecosystem with real rewards and exclusive benefits
        </motion.p>
        <Link href="/nftcollection">
        <motion.button
          variants={item}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-[#ff3c7b] to-[#9e46e8] rounded-md font-medium hover:opacity-90 transition cursor-pointer"
        >
          Explore Collections
        </motion.button>
        </Link>

        {/* Benefit Cards */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4  max-w-5xl mx-auto"
        >
          {benefits.map((text, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/5 border border-white/10 p-5 rounded-xl text-sm flex flex-col items-center justify-center text-center backdrop-blur-md shadow-sm overflow-hidden animate-shimmer hover:shadow-[0_0_20px_5px_rgba(158,70,232,0.6)] transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-10 animate-pulse pointer-events-none" />
              <CheckCircle2 className="text-green-400 w-6 h-6 mb-2 z-10" />
              <span className="text-white leading-snug z-10">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* NFT Icons with Glow */}
      <GlowImage src="/dolphin-4.webp" className="top-10 left-6 md:left-16 w-12 h-12 md:w-18 md:h-18 " />
      <GlowImage src="/dolphin-3.png" className="top-10 right-6 md:right-16 w-16 h-16 md:w-24 md:h-24 " />
      <GlowImage src="/dolphin_1.jpg" className="bottom-10 left-6 md:left-16 w-16 h-16 md:w-24 md:h-24 " />
      <GlowImage src="/dolphin-4.png" className="bottom-10 right-6 md:right-16 w-12 h-12 md:w-18 md:h-18 " />
    </section>
  )
}

// Reusable image with glow wrapper
function GlowImage({ src, className }: { src: string; className: string }) {
  return (
    <div
      className={`hidden md:block absolute rounded-xl overflow-hidden shadow-[0_0_30px_5px_rgba(129,71,255,0.4)] ${className}`}
    >
      <Image src={src} alt="NFT" fill className="object-contain" />
    </div>
  )
}
