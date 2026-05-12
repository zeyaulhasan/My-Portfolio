"use client"

import { motion } from 'framer-motion'
import { MapPin, Mail, ArrowUp, Code2, Github, Linkedin } from 'lucide-react'
import { PERSONAL_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/utils'

const socialLinks = [
  {
    name: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: Github,
    color: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]',
  },
  {
    name: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
    color: 'hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.6)]',
  },
  {
    name: 'Email',
    href: SOCIAL_LINKS.email,
    icon: Mail,
    color: 'hover:text-[#4FC3F7] hover:shadow-[0_0_15px_rgba(79,195,247,0.6)]',
  },
  {
    name: 'LeetCode',
    href: SOCIAL_LINKS.leetcode,
    icon: Code2,
    color: 'hover:text-[#FFA116] hover:shadow-[0_0_15px_rgba(255,161,22,0.6)]',
  },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border overflow-hidden mt-auto">
      {/* Animated wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#waveGradient)"
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FC3F7" />
              <stop offset="100%" stopColor="#B388FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated gradient top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #4FC3F7, #B388FF, #4FC3F7, transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Background ambient glow - static, no animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8"
        >
          {/* Brand & Info */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="text-2xl font-bold">
              <span className="text-primary">{PERSONAL_INFO.name.split(' ')[0]} </span>
              <span className="text-accent">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm hover:text-primary transition-colors truncate"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Quick Links - Right Side */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-1"
                >
                  <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300 inline-block" />
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - Centered Copyright */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative border-t border-border py-5 flex items-center justify-center"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #4FC3F7, #B388FF, transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          <motion.p
            className="text-muted-foreground text-sm text-center"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear}{' '}
            <span className="text-primary font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
          </motion.p>

          {/* Back to top - Positioned absolutely on the right */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="absolute right-0 w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,195,247,0.4)] group"
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            {/* Animated arrow */}
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowUp className="w-4 h-4 relative z-10" />
            </motion.div>
            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle, rgba(79,195,247,0.3) 0%, transparent 70%)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
