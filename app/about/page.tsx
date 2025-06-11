"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Zyper
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Zyper is a visionary Web3 ecosystem built by the community, designed to bridge DeFi, NFTs, crypto payments, real-world utility, and community empowerment. From our unique <span className="text-blue-400 font-semibold">Dope Dolphins NFT</span> collection to our upcoming <span className="text-purple-400 font-semibold">Zyper Crypto Card</span>, we are on a mission to make crypto accessible, engaging, and rewarding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 space-y-6 text-left text-gray-300 text-base md:text-lg"
        >
          <ul className="list-disc list-inside space-y-2">
            <li><span className="text-white font-medium">Stake NFTs</span> and earn TON rewards.</li>
            <li><span className="text-white font-medium">Bet and play</span> through fun, rewarding mini-games like <span className="text-blue-400 font-semibold">Dolphin Dash</span>.</li>
            <li><span className="text-white font-medium">Use crypto in real life</span> — rent cars, book stays, shop, and more with the <span className="text-purple-400 font-semibold">Zyper Card</span>.</li>
            <li>Connect and grow careers through our upcoming <span className="text-blue-400 font-semibold">Zyper Social Hub</span>, a free platform connecting Web3 job seekers and projects.</li>
          </ul>

          <p>
            With a roadmap extending to <span className="text-white font-medium">2030</span>, the launch of our native token <span className="text-green-400 font-semibold">$ZYP</span>, and community-focused initiatives like <span className="text-white font-medium">internet access programs</span> and <span className="text-white font-medium">ambassador opportunities</span> — Zyper is not just a project, it's a <span className="text-pink-400 font-semibold">movement</span>.
          </p>

          <p className="text-center font-semibold text-white mt-6 text-xl">
            We are global. We are inclusive. <br />
            We are Zyper. 🌍💸
          </p>
        </motion.div>
      </div>
    </section>
  )
}
