'use client'
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import React from 'react'

const projects = [
  {
    title: 'Simple Flash Card',
    description: 'This was a group project for my introduction to web development class. We used HTML, CSS, and JavaScript to create a simple flash card system. It was a fun project to work on with my friends.',
    githubUrl: 'https://github.com/PeemSx/flash_card.git',
    liveUrl: '',
    images: [
      '/images/flashcard1.png',
      '/images/flashcard2.png',

    ],
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-500 mb-8 text-center"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
} 