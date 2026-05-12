"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = NAVIGATION_ITEMS.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-foreground cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            {PERSONAL_INFO.name.split(' ').map((word, index) => (
              <span key={index} className={index === 0 ? 'text-primary' : 'text-accent'}>
                {word}{index === 0 ? ' ' : ''}
              </span>
            ))}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-neon-purple",
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  <AnimatePresence>
                    {(activeSection === item.href.substring(1) || true) && (
                      <motion.div
                        layoutId="activeSection"
                        className={cn(
                          "absolute inset-x-0 -bottom-1 h-0.5 rounded-full transition-all duration-300",
                          activeSection === item.href.substring(1)
                            ? "bg-primary neon-electric-blue"
                            : "bg-transparent neon-purple hover:neon-purple"
                        )}
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:text-neon-purple",
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.name}
                  <AnimatePresence>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeSectionMobile"
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary neon-electric-blue rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}