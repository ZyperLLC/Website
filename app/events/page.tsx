"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ZyperNFTCollection() {
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

      <div className="relative z-10">
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper Events
            </motion.h2>

            <div className="grid grid-cols-1 gap-8">
              <div className="relative group rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                    <Image
                      src="/karaoke.jpg"
                      alt="Karaoke Event"
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 flex flex-col items-center gap-3 text-left">
                      <div className="text-gray-400 text-sm space-y-3">
                        <h3 className="text-lg font-semibold text-blue-400">
                          KARAOKE + GIVEAWAY NIGHT UPDATE!
                        </h3>

                        <p>
                          We heard your voices (some of them questionably beautiful) and now it&apos;s getting even bigger.
                        </p>

                        <p>
                          🔊 <strong>New Venue, Same Chaos</strong><br />
                          We&apos;re moving the party to <strong>X Space</strong> – more room for bangers, high notes, and big vibes.
                        </p>

                        <p>
                          📅 <strong>Date:</strong> June 15, 2025<br />
                          ⏰ <strong>Time:</strong> 5PM UTC<br />
                          📍 <strong>Location:</strong> X Space – bring your voice, leave your shame.
                        </p>

                        <p>
                          🎟️ <strong>RAFFLE DRAW still LIVE!</strong><br />
                          1 TON = a shot at winning a DopeDolphins NFT<br />
                          🐬 Didn&apos;t win? You&apos;ll still bag a VIP SBT, equal in value and vibes.
                        </p>

                        <p>
                          ✨ <strong>BONUS:</strong> Everyone who attends gets a FREE Genesis SBT – just for showing up and vibing with us. No singing skills required.
                        </p>

                        <p>
                          So what are you waiting for?<br />
                          🎶 Sing. Win. Laugh. Collect. Repeat.
                        </p>
                      </div>

                      <Link href="https://lu.ma/bs906rwo" target="_blank">
                        <Button
                          size="sm"
                          className="cursor-pointer mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
                        >
                          Register
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
