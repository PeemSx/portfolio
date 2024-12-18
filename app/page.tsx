'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi! I am <span className="text-pink-500">Supanat</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Welcome to my <span className="text-pink-500">Portfolio</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Computer Engineering Student passionate about Web Development,
          Data Science, and Machine Learning
        </p>
      </motion.div>
    </div>
  )
}
