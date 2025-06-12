"use client"

import { Gamepad2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect} from "react"


export default function DolphinDashSection() {
   const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

   useEffect(() => {
       const updateDims = () =>
         setDimensions({ width: window.innerWidth, height: window.innerHeight })
       updateDims()
       window.addEventListener("resize", updateDims)
       return () => window.removeEventListener("resize", updateDims)
     }, [])

  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gray-900 text-white">
       {/* Animated background using floating dots */}
             <div className="fixed inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
               {dimensions.width > 0 && [...Array(50)].map((_, i) => (
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

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wide">
          <Gamepad2 className="w-5 h-5" />
          Dolphin Dash (Mini-App)
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Play. Win. Earn <span className="text-blue-400">TON</span>.
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Dolphin Dash is an interactive staking and betting mini-bot where users can choose a character from 1 to 36 and bet with TON (0.1 to 10 TON per bet). Multiple entries allowed.
        </p>

        <p className="text-gray-300 text-lg">
          Winners earn big and all bets help fuel the ecosystem. Whether you are here for fun or profit, this game delivers both.
        </p>

        <div className="mt-8">
          <Link
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Start Playing
            </Button>
          </Link>
        </div>

        {/* <div className="mt-12">
          <Image
            src="/dolphin-dash-preview.png"
            alt="Dolphin Dash Game Preview"
            width={800}
            height={400}
            className="rounded-xl shadow-xl mx-auto"
          />
        </div> */}
      </div>
    </section>
  )
}
