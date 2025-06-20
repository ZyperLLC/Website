'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Carousel from '@/components/carousel'
// import Button from '@/components/Button'

const DolphinNFT = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDims()
    window.addEventListener('resize', updateDims)
    return () => window.removeEventListener('resize', updateDims)
  }, [])

  return (
    <section id="about" className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
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
                repeatType: 'reverse',
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Carousel Section */}
        <div className="w-full md:w-[50%] flex items-center justify-center">
          <Carousel />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col items-start justify-center text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dolphin Dash NFT is Making Waves!
          </h2>

          <p className="text-lg text-white mb-4">
            Unlock a new upcoming key to the Zyper ecosystem with real rewards and exclusive benefits
          </p>

          <p className="text-base text-white/60 mb-2 whitespace-pre-line">
            ✅ 1.5x Game Credits in Dolphin Dash
            {'\n'}✅ Stake for 10% APY
            {'\n'}✅ Tier 2 Airdrop Eligibility
            {'\n'}✅ Exclusive Merch & Skins Access
            {'\n'}✅ Tradeable & Market-Ready
            {'\n'}✅ 7.7x Draw Payout Boost
          </p>

          <p className="text-base text-white/70 mb-6">
            🔥 Collect. Stake. Win. Repeat. <br />
            Don&apos;t miss the next wave; stay updated!
          </p>

          {/* Optional Button */}
          {/* <div>
            <Button text="JOIN " link="#" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default DolphinNFT
