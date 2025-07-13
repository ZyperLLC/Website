"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="px-6 pt-12 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 md:bg-gradient-to-r bg-gradient-to-l from-white to-blue-400 bg-clip-text text-transparent"
        >
          Own the Ocean.<br /> Win the Game.<br /> Earn the Drop.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          The Dolphin Dash NFT Collection is your key to Zyper&apos;s<br />
          Gaming Ecosystem – 36 meme-powered characters.<br />
          Daily draws. Real rewards.
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="https://getgems.io/collection/EQD1iuL091BmS8yUdqtnN2sg4gKPrPfrR-p_7yvVRppebWrX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-xl text-xl transition-all duration-300">
              Explore Now
            </button>
          </a>
        </motion.div>

        {/* Centered Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Image
            src="/zyperlandingdolphins.jpg"
            alt="Zyper Hero"
            width={1200}
            height={1200}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-12 text-left text-white max-w-5xl mx-auto"
        >
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <Image src="/gamepad.jpg" alt="Game Credits" width={60} height={60} />
            <div>
              <h3 className="text-2xl font-semibold">1.5x Game Credits</h3>
              <p className="text-gray-400 text-lg">Play to win with NFT credit multipliers</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <Image src="/dollar.jpg" alt="Daily Rewards" width={60} height={60} />
            <div>
              <h3 className="text-2xl font-semibold">Daily Rewards</h3>
              <p className="text-gray-400 text-lg">Hold the dolphin that&apos;s drawn - get a 7.7x payout</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-5">
            <Image src="/staking.jpg" alt="Staking APY" width={60} height={60} />
            <div>
              <h3 className="text-2xl font-semibold">Staking APY</h3>
              <p className="text-gray-400 text-lg">Earn passive returns from your NFT (10% APY)</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-5">
            <Image src="/tree.jpg" alt="Club Access" width={60} height={60} />
            <div>
              <h3 className="text-2xl font-semibold">Club Access</h3>
              <p className="text-gray-400 text-lg">Join exclusive communities like Fintosh Club &amp; Ocean Eleven</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
