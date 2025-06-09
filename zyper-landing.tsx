"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Coins, Gamepad2, CreditCard, TrendingUp, ExternalLink, Menu, X, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ZyperLanding() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRaffleModal, setShowRaffleModal] = useState(true);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: "Zyper Card", href: "#"},
    { name: "Tokenized Assets", href: "#" },
    { name: "NFT Collection", href: "/nftcollection" },
    { name: "Social Hub", href: "/socialhub" },
    { name: "About Us", href: "#" },
  ]

  const zyperCards = [
    {
      icon: TrendingUp,
      title: "Earn",
      description: "Generate passive income through DeFi protocols and yield farming opportunities.",
    },
    {
      icon: Coins,
      title: "Stake",
      description: "Stake your NFTs to secure the network and earn rewards in the Zyper ecosystem.",
    },
    {
      icon: Gamepad2,
      title: "Play",
      description: "Engage in blockchain gaming experiences with play-to-earn mechanics.",
    },
    {
      icon: CreditCard,
      title: "Spend",
      description: "Use your crypto for real-world payments and seamless transactions.",
    },
  ]

  const nftImages = [
    "/zyper-nft-1.jpg",
    "/zyper-nft-2.jpg",
    "/zyper-nft-3.jpg",
    "/zyper-nft-4.jpg",
    "/zyper-nft-5.jpg",
    "/zyper-nft-6.jpg",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        {/* Animated particles */}
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
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    selectedNavItem === index ? "text-red-500" : "text-gray-300"
                  }`}
                  onClick={() => setSelectedNavItem(index)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
              >
                <div className="py-6 px-6 h-screen space-y-4 flex flex-col items-center">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block text-lg font-medium transition-colors hover:text-blue-400 ${
                        selectedNavItem === index ? "text-red-500" : "text-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedNavItem(index);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="mb-12"
            >
              {/* <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Z
                  </span>
                </div>
              </div> */}
              <Image src="/zyper-logo.png" alt="Zyper Logo" width={200} height={200} className="mx-auto mb-4 rounded-full" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 md:bg-gradient-to-r bg-gradient-to-l from-white to-blue-400 bg-clip-text text-transparent"
            >
              Welcome to Zyper
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              ZYPER is a community-driven platform that merges DeFi, NFTs, PAYMENTS, and GAMING into a seamless
              ecosystem built on TON.
            </motion.p>
          </div>
        </section>

        {/* Zyper Cards Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper Ecosystem
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {zyperCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zyper NFTs Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Zyper NFT Collection
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {nftImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                    <Image
                      src={`/zyper-nft-${index + 1}.jpg`}
                      alt={`Zyper NFT ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-blue-400">Zyper NFT #{index + 1}</h3>
                      <p className="text-gray-400 text-sm">Exclusive collection item</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="https://getgems.io/zyper?contentView=list#items" target="_blank">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center "
            >
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Collection
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-12 border-t border-gray-800"
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">© 2025 Zyper. Built on TON blockchain. All rights reserved.</p>
          </div>
        </motion.footer>

        {/* Raffle Popup Modal */}
        <AnimatePresence>
          {showRaffleModal && (
            <>
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowRaffleModal(false)}
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
                  onClick={() => setShowRaffleModal(false)}
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
                    <p className="text-gray-300">Don't miss out on the exclusive Dolphin Dash Raffle. Limited tickets available!</p>
                    
                    <div className="bg-blue-500/10 rounded-lg p-4 mt-4">
                      <p className="text-blue-400 font-semibold">Only 25 tickets!!</p>
                    </div>

                    <Link href="ton://transfer/UQBHDWjKC84Pg4mjB-49s29nKaVJwJUCZqILttVSQ5uUJdV7?amount=1000000000" className="block mt-6">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        Buy Tickets Now
                        <Ticket className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
