"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export const AnimatedCounter = React.memo(({ 
  value, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  className = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationId: number

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [value, duration])

  return (
    <motion.span
      className={`tabular-nums ${className}`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  )
})

AnimatedCounter.displayName = 'AnimatedCounter'
