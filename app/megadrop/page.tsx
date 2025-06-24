'use client';
import { motion } from "framer-motion"
import { FC } from 'react';
import { useState, useEffect } from "react"

interface Tier {
  level: string;
  title: string;
  emoji: string;
  benefits: string[];
  role: string;
}

const tiers: Tier[] = [
  {
    level: 'Tier 1',
    title: 'Dope Dolphins NFTs',
    emoji: '🐬',
    benefits: [
      'The original icons of Zyper — owning a Dope Dolphin means you\'re elite.',
      'Grants priority access to exclusive events, early product drops, and top-tier staking opportunities.',
      'Highest multiplier in the airdrop campaign — holding just one is a power move.',
      'Genesis holders will always be recognized across future Zyper products.',
    ],
    role: '',
  },
  {
    level: 'Tier 2',
    title: 'Dolphin Dash NFTs',
    emoji: '🌊',
    benefits: [
      'Holders receive 1.5x game credits inside Dolphin Dash.',
      'Stakeable NFTs with a guaranteed 10% APY based on floor price.',
      'Eligible for Tier 2 airdrops, and collecting one per wave unlocks Elite status.',
      'Bonus: Hold the winning dolphin = 7.7x draw payout!',
    ],
    role: '',
  },
  {
    level: 'Tier 3',
    title: 'Event SBTs',
    emoji: '🎉',
    benefits: [
      'Non-transferable Soulbound Tokens earned by attending or participating in Zyper events both IRL and online.',
      'Proof of contribution, passion, and engagement.',
      'Each Event SBT adds weight to your airdrop share — the more you attend, the higher your rank.',
      'Includes everything from tournaments to IRL meetups and special contests.',
    ],
    role: '',
  },
  {
    level: 'Tier 4',
    title: 'Community SBTs',
    emoji: '🌐',
    benefits: [
      'Awarded for being part of the movement — active members, creators, fans and first-time contributors.',
      'From meme creation and spaces hosting to helping onboard new users your support matters.',
      'Base-tier airdrop eligibility, perfect for new community members looking to get started.',
      'Stack them and move up — every SBT helps.',
    ],
    role: '',
  },
];

const Megadrop: FC = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
      useEffect(() => {
        const updateDims = () =>
          setDimensions({ width: window.innerWidth, height: window.innerHeight })
        updateDims()
        window.addEventListener("resize", updateDims)
        return () => window.removeEventListener("resize", updateDims)
      }, [])
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
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
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Zyper Mega Airdrop <br/>Your Access to Real Rewards
        </h2>
        <p className="text-gray-300 mb-2">
          Welcome to the Zyper Mega Airdrop, a unique rewards structure built for our true believers and early supporters.
          Whether you&apos;re a gamer, NFT collector, event attendee, or a community builder there&apos;s something for everyone.
        </p>
        <p className="text-gray-300">
          Our 4-tier reward system ensures that every contribution to the Zyper ecosystem counts. 🎁 The more you collect, the more you earn. Ready to climb the ranks?
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-[#0a0a0a] p-6 shadow-md cursor-pointer"
          >
            {/* Tier Label */}
            <div className="mb-2">
              <span className="text-sm font-medium px-3 py-1 bg-gray-800 rounded-md">
                {tier.level}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>

            {/* Emoji & Benefits Side by Side */}
            <div className="flex items-start gap-4">
              {/* Emoji */}
              <div className="text-5xl">{tier.emoji}</div>

              {/* Benefit List */}
              <ul className="text-sm text-gray-300 space-y-2">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="list-disc ml-4">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-gray-300 mb-2 text-base flex items-center justify-center gap-2">
          🔗 How to Participate? Start collecting NFTs & SBTs, join our community, and stay tuned for snapshot dates.
        </p>
        <p className="text-gray-300 text-base flex items-center justify-center gap-2">
          💥 This isn&apos;t just an airdrop — it’s your pass to Zyper&apos;s future.
        </p>
      </div>
    </div>
  );
};

export default Megadrop;
