"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { fadeInUp } from '@/lib/utils'

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000) // 8s timeout

    try {
      const res = await fetch('https://formspree.io/f/xpqbnwpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (res.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setHasError(true)
      }
    } catch {
      clearTimeout(timeout)
      setHasError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      variants={fadeInUp}
      onSubmit={handleSubmit}
      className="space-y-2 max-w-lg mx-auto"
    >
      {/* Name Field */}
      <div className="relative group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-primary/30 transition-all duration-300">
        <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center pointer-events-none z-10 bg-primary/10 rounded-l-lg group-hover:bg-primary/20 transition-colors">
          <User className="h-5 w-5 text-primary" />
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full pl-12 pr-4 py-3 bg-transparent border-0 rounded-none focus:border-0 focus:ring-0 outline-none transition-all duration-300 text-foreground placeholder-muted-foreground"
        />
      </div>

      {/* Email Field */}
      <div className="relative group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-primary/30 transition-all duration-300">
        <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center pointer-events-none z-10 bg-primary/10 rounded-l-lg group-hover:bg-primary/20 transition-colors">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full pl-12 pr-4 py-3 bg-transparent border-0 rounded-none focus:border-0 focus:ring-0 outline-none transition-all duration-300 text-foreground placeholder-muted-foreground"
        />
      </div>

      {/* Message Field */}
      <div className="relative group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-primary/30 transition-all duration-300">
        <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center pointer-events-none z-10 bg-primary/10 rounded-l-lg group-hover:bg-primary/20 transition-colors">
          <MessageSquare className="h-5 w-5 text-primary" />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Your message..."
          className="w-full pl-12 pr-4 py-3 bg-transparent border-0 rounded-none focus:border-0 focus:ring-0 outline-none transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full py-3 px-8 bg-primary/90 backdrop-blur-sm hover:bg-primary disabled:bg-primary/50 text-primary-foreground rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 glow border border-primary/20 hover:border-primary/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Message Sent!</span>
            </motion.div>
          ) : (
            <motion.div key="submit" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Feedback Messages */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-center text-green-400 font-medium flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Thank you! I&apos;ll get back to you soon.
          </motion.div>
        )}
        {hasError && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-center text-red-400 font-medium flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  )
}
