'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
  image: string
}

export default function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-pink-500 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          <Link
            href={githubUrl}
            target="_blank"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            GitHub
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
} 