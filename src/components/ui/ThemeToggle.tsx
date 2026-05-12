"use client"

import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors glass glow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-2"
      >
        <Moon className="w-4 h-4 text-foreground" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-2"
      >
        <Sun className="w-4 h-4 text-foreground" />
      </motion.div>
      
      {/* Invisible element to maintain button size */}
      <div className="w-4 h-4 invisible">
        <Sun className="w-4 h-4" />
      </div>
    </motion.button>
  )
}