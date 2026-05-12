"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Achievement {
  id: string
  name: string
  description: string
}

const achievements: Achievement[] = [
  { id: 'hackathons', name: 'Hackathons', description: 'Participated in multiple cybersecurity and development hackathons' },
  { id: 'certifications', name: 'Certifications', description: 'Earned certifications in cybersecurity, cloud computing, and DevOps' },
  { id: 'projects', name: 'Major Projects', description: 'Developed full-stack applications and cloud-integrated platforms' },
]

export const AchievementParticles = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(null)

  // Random positions for particles (scattered around the orbital area)
  const particlePositions = [
    { x: 200, y: 50 },
    { x: 300, y: 100 },
    { x: 150, y: 150 },
    { x: 350, y: 200 },
    { x: 100, y: 250 },
    { x: 400, y: 300 },
    { x: 250, y: 350 },
    { x: 50, y: 400 },
    { x: 450, y: 450 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {achievements.map((achievement, index) => {
        const position = particlePositions[index] || { x: Math.random() * 400 + 50, y: Math.random() * 400 + 50 }

        return (
          <motion.div
            key={achievement.id}
            className="absolute pointer-events-auto"
            style={{
              left: position.x,
              top: position.y,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <motion.div
              className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(0, 229, 255, 0.8)' }}
              onHoverStart={() => setHoveredAchievement(achievement.id)}
              onHoverEnd={() => setHoveredAchievement(null)}
            />

            {/* Tooltip */}
            {hoveredAchievement === achievement.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-md text-white px-4 py-3 rounded-lg text-sm font-medium border border-white/20 shadow-xl z-50 max-w-xs"
              >
                <div className="font-semibold text-cyan-400 mb-1">{achievement.name}</div>
                <div className="text-gray-300">{achievement.description}</div>
              </motion.div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
