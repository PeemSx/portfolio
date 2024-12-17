'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

interface ContactForm {
  name: string
  email: string
  message: string
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/YourGitHubUsername',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YourLinkedInUsername',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: FaEnvelope,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      console.error('Email error:', error)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-500 mb-12 text-center"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/10">
            <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/10">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="text-gray-300">
              Bangkok, Thailand
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 