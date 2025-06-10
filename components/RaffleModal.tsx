"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
                src="/zyper-nft-ticket.png"
                alt="Dolphin Dash Raffle"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Limited Time Offer!</h3>
              <p className="text-gray-300">
                Don't miss out on the exclusive Dolphin Dash Raffle. Limited tickets available!
              </p>

              <div className="bg-blue-500/10 rounded-lg p-4 mt-4">
                <p className="text-blue-400 font-semibold">Only 25 tickets!!</p>
              </div>

              <Link
                href="ton://transfer/UQBHDWjKC84Pg4mjB-49s29nKaVJwJUCZqILttVSQ5uUJdV7?amount=1000000000"
                className="block mt-6"
              >
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02]">
                  Buy Tickets Now
                  <Ticket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  )
}
