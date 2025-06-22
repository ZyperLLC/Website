"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { events, EventData } from "./data"

export default function ZyperEvents() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  //Sort events from latest to oldest
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  useEffect(() => {
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDims()
    window.addEventListener("resize", updateDims)
    return () => window.removeEventListener("resize", updateDims)
  }, [])

  // Helper to check if event is ended
  const isEventEnded = (date: string) => {
    const eventDate = new Date(date)
    return eventDate.getTime() < Date.now()
  }

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
        <section className="px-6 py-10">
          <div className="max-w-screen mx-30">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper Events
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-start items-center mt-20">
              {sortedEvents.map((event: EventData) => (
                <Link href={`/events/${event.slug}`} key={event.title}>
                <div key={event.id} className="relative group rounded-2xl flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300 p-4 flex flex-col items-center w-[320px] max-w-full mx-auto">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={300}
                        height={180}
                        className="w-full h-40 object-cover rounded-xl mb-3"
                      />
                      <h3 className="text-lg font-semibold text-blue-400 text-center">{event.title}</h3>
                      <div className="text-gray-400 text-sm mb-2 text-center">
                        {isNaN(new Date(event.date).getTime())
                          ? 'Invalid Date'
                          : new Date(event.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                      </div>
                      <div className="text-white text-sm text-center">
                        {event.shortDescription}
                        <Link href={`/events/${event.slug}`} passHref legacyBehavior>
                          <a className="text-blue-400 ml-2 underline font-semibold animate-pulse" style={{ textShadow: '0 0 8px #7f9cf5, 0 0 16px #a78bfa' }}>
                            Read more
                          </a>
                        </Link>
                      </div>
                      <div className="flex justify-center w-full mt-4">
                        {isNaN(new Date(event.date).getTime()) || isEventEnded(event.date) ? (
                          <span className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-full text-sm">Ended</span>
                        ) : (
                          <Link href={event.registerLink} target="_blank" className="w-full flex justify-center">
                            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-32">
                              Register
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
