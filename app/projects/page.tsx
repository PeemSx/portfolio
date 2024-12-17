'use client'
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import React from 'react'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com',
    image: '/project1.jpg',
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