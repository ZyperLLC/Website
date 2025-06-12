"use client"

import { motion } from "framer-motion"
import {
  CreditCard,
  Gamepad2,
  LockKeyhole,
  Globe,
  Users,
} from "lucide-react"
import { GiDolphin } from "react-icons/gi"

const zyperCards = [
  {
    icon: GiDolphin,
    title: "Dope Dolphins NFT",
    description: "Own exclusive digital dolphin collectibles in our unique NFT collection.",
  },
  {
    icon: CreditCard,
    title: "Zyper Crypto Card",
    description: "Experience seamless crypto payments with our next-gen digital payment card.",
  },
  {
    icon: Gamepad2,
    title: "Dolphin Dash Game",
    description: "Dive into an exciting P2E gaming experience with Dolphin Dash.",
  },
  {
    icon: LockKeyhole,
    title: "NFT Staking",
    description: "Stake your NFTs to earn rewards in the Zyper ecosystem. Live Now!",
    status: "Live",
  },
  {
    icon: Globe,
    title: "Internet Access",
    description: "Connect to high-speed internet through our Starlink partnership.",
    comingSoon: true,
  },
  {
    icon: Users,
    title: "Zyper Social Hub",
    description: "Connect, share, and engage with the Zyper community.",
  },
]

export default function ZyperCardsSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Zyper Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zyperCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-300 relative"
            >
              {card.status === "Live" && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                  Live
                </span>
              )}
              {card.comingSoon && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
