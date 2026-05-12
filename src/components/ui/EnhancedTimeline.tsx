"use client"

import { motion } from 'framer-motion'

interface TimelineItem {
  icon: string
  label: string
}

const timelineItems: TimelineItem[] = [
  { icon: '🎓', label: 'B.Tech @ LPU' },
  { icon: '🔒', label: 'Cybersecurity Explorer' },
  { icon: '🌐', label: 'Full-Stack Projects' },
  { icon: '☁️', label: 'DevOps Journey' },
]

export const EnhancedTimeline = () => {
  return (
    <motion.div
      className="mt-12 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      {/* Timeline Line with Data Stream Animation */}
      <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 rounded-full overflow-hidden">
        {/* Animated Data Stream */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: '50%' }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
          style={{ width: '30%' }}
        />
      </div>

      <div className="flex justify-between items-center relative">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center group cursor-pointer"
            whileHover={{
              scale: 1.1,
              textShadow: '0 0 10px rgba(0, 229, 255, 0.8)',
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glowing Dot */}
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
            <div className="text-2xl mt-4 mb-2 group-hover:animate-bounce">{item.icon}</div>
            <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors text-center font-medium">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
