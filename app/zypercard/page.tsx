"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { images } from "./data" // <-- your images array import

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
        {/* Heading and Text */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper Card
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto text-gray-300 text-lg"
            >
              Spend Crypto in Real Life
              <br />
              The Zyper Card brings your Crypto to the real world. Book an Airbnb, rent a car, or shop online — all using your Crypto. NFT holders get guaranteed cashback and early access. It’s crypto with convenience, designed to make your digital assets instantly usable.
            </motion.p>

            {/* Images Row */}
            <motion.div
              className="mt-12 flex justify-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {images.map(({ src }, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`Zyper Card image ${idx + 1}`}
                  className="w-48 h-32 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </motion.div>

            {/* Additional Text */}
            <motion.p
              className="mt-12 text-center text-gray-400 text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Available soon in selected regions. Apply now — form in English & Spanish.
            </motion.p>

            {/* Apply Now Button with Link */}
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://forms.gle/svmhDtfLt7ty7bpg6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                  text-white
                  hover:brightness-110
                  transition
                  ring-pink-500
                  ring-offset-gray-900
                  inline-block
                  text-center
                "
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
