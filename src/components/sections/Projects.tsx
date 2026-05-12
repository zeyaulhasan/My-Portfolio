"use client"

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FolderOpen, X } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Modal } from '@/components/ui/Modal'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  github?: string
  live?: string | null
  featured: boolean
  category: string
  problem?: string
  solution?: string
  impact?: string
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleProjectClick = (project: typeof PROJECTS[number]) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className="py-12 scroll-mt-16 bg-background">
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
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work, featuring full-stack applications, security tools, and innovative solutions
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                />
              ))}
            </motion.div>

            {/* View More Projects CTA */}
            <motion.div variants={fadeInUp} className="text-center">
              <motion.a
                href="https://github.com/zeyaulhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-medium transition-all duration-300 glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderOpen className="w-5 h-5" />
                <span>View More on GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                {selectedProject.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Project Image */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl opacity-50">
                    {selectedProject.category === 'Security' ? '🔒' :
                      selectedProject.category === 'Full Stack' ? '⚡' : '💻'}
                  </div>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies?.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                )) || null}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {selectedProject.github && (
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg font-medium transition-all duration-300 text-center glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Source Code
                </motion.a>
              )}

              {selectedProject.live && selectedProject.live !== null && (
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 text-center glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Preview
                </motion.a>
              )}
            </div>

            {/* Problem-Solution-Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 bg-card/50 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Problem</h5>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.problem || 'No problem description available'}
                </p>
              </div>

              <div className="text-center p-4 bg-card/50 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Solution</h5>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.solution || 'No solution description available'}
                </p>
              </div>

              <div className="text-center p-4 bg-card/50 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Impact</h5>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.impact || 'No impact description available'}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
