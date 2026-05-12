"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Tooltip } from './Tooltip'
import { fadeInUp, scaleIn } from '@/lib/utils'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    github?: string
    live?: string
    featured: boolean
    category: string
  }
  onClick: () => void
  index: number
}

export const ProjectCard = React.memo(({ project, onClick, index }: ProjectCardProps) => {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer glow"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-6xl opacity-50">
              {project.category === 'Security' ? '🔒' :
               project.category === 'Full Stack' ? '⚡' : '💻'}
            </div>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2.5 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 min-h-[32px]">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-lg text-xs font-medium hover:bg-secondary/80 transition-colors border border-border/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-lg text-xs font-medium border border-border/30">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30" />

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-all duration-200 border border-border/30 hover:border-primary/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                title="View Source Code"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Code</span>
              </motion.a>
            )}

            {project.live && project.live !== null && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-all duration-200 border border-border/30 hover:border-accent/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground">Live</span>
              </motion.a>
            )}
          </div>

          <motion.button
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 border border-primary/20 hover:border-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="View Details"
          >
            <Eye className="w-4 h-4" />
            <span className="text-xs font-medium">Details</span>
          </motion.button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
})

ProjectCard.displayName = 'ProjectCard'
