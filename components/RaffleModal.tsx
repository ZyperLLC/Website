"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type RaffleModalProps = {
  onClose: () => void
}

export default function RaffleModal({ onClose }: RaffleModalProps) {
  return (
    <AnimatePresence>
      <>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-gray-900 rounded-2xl p-6 border border-blue-500/20 z-50"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6 relative z-50" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="relative w-full h-48 mb-6">
              <Image
                src="/dolphin-dash-nft-1.jpg"
                alt="Dolphin Dash NFT"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Dolphin Dash NFT!!</h3>
              <p className="text-gray-300">
              Unlock a new upcoming key to the Zyper ecosystem with real rewards and exclusive benefits<br/>
              🔥 Collect. Stake. Win. Repeat.
              <br/>
              Don&apos;t miss the next wave; stay updated!
              </p>
                <Button
                  className="text-xl font-extrabold mb-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Coming Soon
                </Button>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  )
}
