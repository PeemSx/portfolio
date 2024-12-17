'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-pink-500 font-bold text-2xl"
          >
            <Link href="/" className="hover:text-pink-400 transition-colors">
              Supanat
            </Link>
          </motion.div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative ${
                  pathname === item.path
                    ? 'text-pink-500'
                    : 'text-white hover:text-pink-400'
                } transition-colors duration-200`}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-pink-500"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 