'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Experience {
  title: string
  organization: string
  period: string
  description: string
  images: string[]
  link?: string
}

const experiences: Experience[] = [
  {
    title: 'Computer Engineering Student',
    organization: 'Your University',
    period: '2020 - Present',
    description: 'Studying Computer Engineering with a focus on Web Development, Data Science, and Machine Learning.',
    images: ['/experiences/university1.jpg', '/experiences/university2.jpg'],
    link: 'https://university-website.com'
  },
  // Add more experiences here
]

function ExperienceCard({ title, organization, period, description, images, link }: Experience) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/10"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
          <p className="text-lg text-white/90">{organization}</p>
          <p className="text-sm text-gray-400">{period}</p>
        </div>
        
        <p className="text-gray-300">{description}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-48 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image}
                alt={`${title} image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {link && (
          <Link 
            href={link}
            target="_blank"
            className="inline-block mt-4 text-pink-500 hover:text-pink-400 transition-colors"
          >
            Learn more →
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-500 mb-12 text-center"
      >
        My Experience
      </motion.h1>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 