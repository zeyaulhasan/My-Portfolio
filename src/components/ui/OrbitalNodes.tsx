"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

interface OrbitalNode {
  id: string
  name: string
  icon: string
  type: 'skill' | 'interest'
}

const orbitalNodes: OrbitalNode[] = [
  // Skills (Primary Orbit)
  { id: 'fullstack', name: 'Full-Stack', icon: '💻', type: 'skill' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', type: 'skill' },
  { id: 'devops', name: 'DevOps', icon: '☁️', type: 'skill' },
  // Interests (Secondary Orbit)
  { id: 'cloud', name: 'Cloud', icon: '🌐', type: 'interest' },
  { id: 'ai-security', name: 'AI in Security', icon: '🤖', type: 'interest' },
  { id: 'ethical-hacking', name: 'Ethical Hacking', icon: '🛡️', type: 'interest' },
];

export const OrbitalNodes = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const primaryOrbitRadius = 120 // pixels
  const secondaryOrbitRadius = 80 // pixels

  return (
    <div className="absolute inset-0 pointer-events-none">
      {orbitalNodes.map((node, index) => {
        const isSkill = node.type === 'skill'
        const orbitRadius = isSkill ? primaryOrbitRadius : secondaryOrbitRadius
        const orbitDuration = isSkill ? 20 : 15 // seconds for one full orbit
        const delay = index * 2 // stagger start times

        return (
          <motion.div
            key={node.id}
            className="absolute top-1/2 left-1/2 pointer-events-auto"
            style={{
              width: 40,
              height: 40,
              marginLeft: -20,
              marginTop: -20,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: orbitDuration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                width: orbitRadius * 2,
                height: orbitRadius * 2,
                top: -orbitRadius,
                left: -orbitRadius,
              }}
            >
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isSkill
                    ? 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/50'
                    : 'bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-purple-400/50'
                } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
              >
                <span className="text-lg">{node.icon}</span>
              </motion.div>

              {/* Tooltip */}
              {hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-medium border border-white/20 shadow-lg z-50"
                >
                  {node.name}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
