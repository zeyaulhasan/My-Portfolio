"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let lastTime = 0
    const FPS = 30
    const interval = 1000 / FPS

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      hue: number
      canvas: HTMLCanvasElement

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.4 + 0.2
        const neonHues = [180, 200, 270]
        this.hue = neonHues[Math.floor(Math.random() * neonHues.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0) this.x = this.canvas.width
        if (this.x > this.canvas.width) this.x = 0
        if (this.y < 0) this.y = this.canvas.height
        if (this.y > this.canvas.height) this.y = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = `hsl(${this.hue}, 80%, 60%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Reduced particle count significantly
    const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 20000))
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas))
    }

    const connectionDistance = 100

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsed = timestamp - lastTime
      if (elapsed < interval) return
      lastTime = timestamp - (elapsed % interval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections — no shadowBlur for performance
      ctx.lineWidth = 0.4
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          if (distSq < connectionDistance * connectionDistance) {
            const dist = Math.sqrt(distSq)
            ctx.globalAlpha = (connectionDistance - dist) / connectionDistance * 0.25
            ctx.strokeStyle = `hsl(${particles[i].hue}, 70%, 50%)`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles — no shadowBlur
      ctx.shadowBlur = 0
      particles.forEach(p => {
        p.update()
        p.draw(ctx)
      })
      ctx.globalAlpha = 1
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}

export const GradientBackground = () => {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        zIndex: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(79, 195, 247, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(179, 136, 255, 0.25) 0%, transparent 50%)',
      }}
    />
  )
}
