"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Award, Calendar, ExternalLink, Star, Users, Trophy } from 'lucide-react'
import { EDUCATION, PERSONAL_INFO } from '@/lib/constants'

import { fadeInUp, staggerContainer, scaleIn, fadeInLeft, fadeInRight } from '@/lib/utils'

export const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="education" className="scroll-mt-16 py-12 bg-gradient-to-br from-background via-primary/5 to-accent/5">
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
              Educational <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background, ongoing learning pursuits, and commitment to continuous professional development
            </p>
          </motion.div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Education - Timeline */}
            <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Academic Background</h3>

              {/* Vertical Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                {/* Removed the vertical timeline line as per user request */}
                {/* <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" /> */}

                <div className="space-y-12">
                  {EDUCATION.map((edu, index) => {
                    return (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        className="relative bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group glow hover:glow-lg"
                      >
                        {/* Card layout: logo on left, content on right */}
                        <div className="flex gap-5 items-start">
                          {/* Institution logo circle */}
                          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-border/40 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                            <img
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.currentTarget.style.display = 'none' }}
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                  {edu.href ? (
                                    <a
                                      href={edu.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xl font-bold text-foreground hover:text-primary transition-colors group-hover:text-primary"
                                    >
                                      {edu.institution}
                                    </a>
                                  ) : (
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                      {edu.institution}
                                    </h4>
                                  )}
                                </div>
                                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                  {edu.status}
                                </span>
                              </div>

                              <div className="flex items-center space-x-4 text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <BookOpen className="w-4 h-4" />
                                  <span className="text-sm">{edu.degree}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span className="text-sm">{edu.period}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                              {edu.description}
                            </p>

                            {/* Key Highlights */}
                            {edu.highlights && (
                              <div className="space-y-2">
                                <h5 className="font-semibold text-foreground">Key Highlights:</h5>
                                <ul className="space-y-1">
                                  {edu.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                      <Star className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* CGPA/Percentage removed */}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Additional Info */}
            <motion.div variants={fadeInRight} className="space-y-8 lg:pt-[3.75rem]">
              {/* Learning Focus */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 glow hover:glow-lg hover:border-primary/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-foreground mb-4">Learning Focus</h4>
                <div className="space-y-3">
                  {[
                    'Data Structures & Algorithms',
                    'Ui/Ux Design',
                    'Cybersecurity',
                    'Artificial Intelligence',
                    'Cloud Computing',
                    'Full-Stack Development'
                  ].map((focus, index) => (
                    <motion.div
                      key={focus}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-foreground">{focus}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications Preview */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 glow hover:glow-lg hover:border-accent/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-foreground mb-4">Recent Certifications</h4>
                <div className="space-y-3">
                  {[
                    'AWS Cloud Practitioner',
                    'Google Cybersecurity',
                    'Meta Frontend Developer',
                    'IBM Data Science'
                  ].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-primary/10 rounded-lg"
                    >
                      <span className="text-sm font-medium text-foreground">{cert}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 glow hover:glow-lg hover:border-purple/30 transition-all duration-300">
                <h4 className="text-lg font-bold text-foreground mb-4">Extracurricular</h4>
                <div className="space-y-3">
                  {[
                    'Coding Club Member',
                    'Hackathon Participant',
                    'Open Source Contributor',
                    'Research Project Collaborator'
                  ].map((activity, index) => (
                    <motion.div
                      key={activity}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Future Learning Goals */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Future Learning Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Advanced AI/ML',
                  description: 'Deep learning, neural networks, and practical AI applications',
                  icon: '🤖',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                  border: 'border-blue-500/30 hover:border-blue-400/70',
                  iconBg: 'bg-blue-500/10'
                },
                {
                  title: 'Cloud Architecture',
                  description: 'AWS/Azure solutions architecture and DevOps practices',
                  icon: '☁️',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                  border: 'border-purple-500/30 hover:border-purple-400/70',
                  iconBg: 'bg-purple-500/10'
                },
                {
                  title: 'Cybersecurity Expert',
                  description: 'Malware Analysis, Advanced Penetration Testing and Security frameworks',
                  icon: '🔒',
                  gradient: 'from-red-500/20 to-orange-500/20',
                  border: 'border-red-500/30 hover:border-red-400/70',
                  iconBg: 'bg-red-500/10'
                }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`relative p-6 bg-gradient-to-br ${goal.gradient} backdrop-blur-sm rounded-2xl border ${goal.border} transition-all duration-300 group glow hover:glow-lg overflow-hidden`}
                >
                  {/* Background orb effect */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${goal.iconBg} rounded-2xl mb-4 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                      {goal.icon}
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {goal.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
