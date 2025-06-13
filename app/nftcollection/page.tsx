"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { nftItems } from "@/app/nftcollection/data"
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

      <div className="relative z-10">
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper NFT Collection
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-16"
            >
              Dive into the Ocean of Utility.{" "}
              <strong className="text-blue-400">Dope Dolphins</strong> is Zyper’s
              genesis NFT collection, featuring 300 unique dolphins with real value.
              Holders can stake their NFTs for monthly TON rewards, gain access to
              exclusive airdrops, early access to the Zyper Crypto Card, and
              guaranteed cashback perks. Listed on Getgems, this collection is your
              ticket to the deeper side of Web3.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {nftItems.map((nft, idx) => {
                return nft.url ? (
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
                  <Link
                    key={idx}
                    href={`/nft/${nft.number}`}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <Link
                href="https://getgems.io/zyper?contentView=list#items"
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
