"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  className?: string
}

export const TypingEffect = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = ""
}: TypingEffectProps) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex]

      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Move to next text
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={`inline-flex items-center ${className}`}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 w-0.5 h-6"
        style={{ backgroundColor: '#00FF00' }}
      />
    </span>
  )
}