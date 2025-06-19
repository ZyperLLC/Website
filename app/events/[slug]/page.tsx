"use client"
import { notFound } from "next/navigation"
import { events } from "../data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function EventSlugPage({ params }: { params: { slug: string } }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    const updateDims = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDims()
    window.addEventListener("resize", updateDims)
    return () => window.removeEventListener("resize", updateDims)
  }, [])

  const event = events.find(e => e.slug === params.slug)
  if (!event) return notFound()

  const isEventEnded = (date: string) => {
    const eventDate = new Date(date)
    return eventDate.getTime() < Date.now()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-12 relative overflow-hidden">
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
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="bg-gray-800 rounded-2xl shadow-xl border border-blue-500/20 p-8 max-w-[60vw] w-full flex flex-col items-center">
          <Image
            src={event.image}
            alt={event.title}
            width={400}
            height={240}
            className="w-full h-60 object-cover rounded-xl mb-6"
          />
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-2">{event.title}</h1>
          <div className="text-gray-400 text-base mb-4 text-center">
            {isNaN(new Date(event.date).getTime())
              ? 'Invalid Date'
              : new Date(event.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
          </div>
          <div className="text-white text-base mb-6 " dangerouslySetInnerHTML={{ __html: event.fullDescription.replace(/\n/g, "<br/>") }} />
          <div className="flex justify-center w-full mt-2">
            {isNaN(new Date(event.date).getTime()) || isEventEnded(event.date) ? (
              <span className="bg-gray-600 text-white font-semibold px-6 py-2 rounded-full text-base">Ended</span>
            ) : (
              <Link href={event.registerLink} target="_blank" className="w-full flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-40">
                  Register
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}