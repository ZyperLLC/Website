"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { nftItems, dolphinDashItems } from "@/app/nftcollection/data"
import { useState, useEffect } from "react"

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
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper NFT Collection
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-16"
            ></motion.p>

            {/* 🐬 Dolphin Dash Section First (Swapped) */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Dolphin Dash
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {dolphinDashItems.map((nft, idx) => (
                <a
                  key={idx}
                  href={nft.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-2xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-blue-400">{nft.name}</h3>
                        <p className="text-gray-400 text-sm">Exciting dolphin race!</p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>

            {/* 🔘 Button after Dolphin Dash */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <Link
                href="https://getgems.io/collection/EQD1iuL091BmS8yUdqtnN2sg4gKPrPfrR-p_7yvVRppebWrX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Full Collection
                </Button>
              </Link>
            </motion.div>

            {/* 🐬 Dope Dolphins Section After (Swapped) */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Dope Dolphins
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {nftItems.map((nft, idx) => {
                const Card = (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-blue-400">{nft.name}</h3>
                        <p className="text-gray-400 text-sm">Exclusive collection item</p>
                      </div>
                    </div>
                  </motion.div>
                )

                return nft.url ? (
                  <a
                    key={idx}
                    href={nft.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group rounded-2xl"
                  >
                    {Card}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    href={`/nft/${nft.number}`}
                    className="relative group rounded-2xl"
                  >
                    {Card}
                  </Link>
                )
              })}
            </div>

            {/* 🔘 Button after Dope Dolphins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <Link
                href="https://getgems.io/zyper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
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