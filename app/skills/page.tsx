'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Web Development',
    skills: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
      { name: 'TypeScript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
      { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ],
  },
  {
    name: 'Data Science & ML',
    skills: [
      { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    ],
  },
  {
    name: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
      { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg' },
    ],
  },
]

function SkillCard({ name, icon }: Skill) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center gap-4 border border-pink-500/10"
    >
      <div className="relative w-16 h-16">
        <Image
          src={icon}
          alt={name}
          fill
          className={`object-contain ${name === 'Express' ? 'invert brightness-200' : ''}`}
        />
      </div>
      <h3 className="text-lg font-semibold text-pink-500">{name}</h3>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-500 mb-12 text-center"
      >
        My Skills
      </motion.h1>
      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white/90">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 