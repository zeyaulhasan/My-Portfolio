"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Code, Target, Github, ExternalLink } from 'lucide-react'
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si'
import { CODING_STATS, SOCIAL_LINKS } from '@/lib/constants'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

export const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const platformIcons = {
    GeeksforGeeks: SiGeeksforgeeks,
    LeetCode: SiLeetcode,
    CodeForces: SiCodeforces
  }

  const platformColors = {
    GeeksforGeeks: 'text-green-500',
    LeetCode: 'text-yellow-500',
    CodeForces: 'text-blue-500'
  }

  return (
    <section id="achievements" className="py-12 scroll-mt-16 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-10"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Achievements & <span className="text-accent">Stats</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in competitive programming and technical achievements across various platforms
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 glow group hover:glow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  <AnimatedCounter value={CODING_STATS.problemsSolved} suffix="+" />
                </div>
                <div className="text-muted-foreground font-medium">Problems Solved</div>
              </div>
            </div>

            <div className="text-center space-y-4 p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 glow group hover:glow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter value={20} suffix="+" />
                </div>
                <div className="text-muted-foreground font-medium">Major Projects</div>
              </div>
            </div>

            <div className="text-center space-y-4 p-8 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 glow group hover:glow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-purple-500" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-500">
                  <AnimatedCounter value={5} suffix="+" />
                </div>
                <div className="text-muted-foreground font-medium">Tech Stacks Mastered</div>
              </div>
            </div>
          </motion.div>

          {/* Platform Stats */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CODING_STATS.platforms.map((platform: { name: string; solved: number; profile: string }, index: number) => {
                const IconComponent = platformIcons[platform.name as keyof typeof platformIcons]
                const colorClass = platformColors[platform.name as keyof typeof platformColors]

                return (
                  <motion.div
                    key={platform.name}
                    variants={scaleIn}
                    className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 ${colorClass}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">Problems Solved</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-primary">
                        <AnimatedCounter value={platform.solved} />
                      </div>
                      <motion.a
                        href={platform.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* GitHub Contribution CTA */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">GitHub Contributions</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check out my GitHub profile to see my latest projects, contributions, and development activity
              </p>
            </div>

            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-all duration-300 glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
