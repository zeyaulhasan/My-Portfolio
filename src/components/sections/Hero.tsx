"use client"

import { motion } from 'framer-motion'
import { Download, Github, ArrowDown, Eye } from 'lucide-react'
import { SiPython, SiKalilinux, SiGithub, SiMysql, SiVscodium, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si'
import { ParticleBackground, GradientBackground } from '@/components/ui/ParticleBackground'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { ResumeModal } from '@/components/ui/ResumeModal'

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  const phrases: string[] = [
    "Turning Ideas into Scalable & Secure Solutions",
    "Innovator at the Intersection of Software & Security"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, 2000) // 2 seconds cycle: 1s display + 1s transition

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="scroll-mt-16 relative min-h-screen flex justify-center overflow-hidden pt-28 md:pt-32">
      {/* Animated Background */}
      <GradientBackground />
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Profile Image and Name Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Profile Image */}
            <motion.div
              variants={fadeInLeft}
              className="flex-shrink-0"
            >
              <div className="relative group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-md group-hover:opacity-100 transition duration-500"
                ></motion.div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-black flex items-center justify-center border-4 border-transparent z-10">
                  <img
                    src="/images/photo.png"
                    alt="Zeyaul Hasan"
                    className="w-60 h-60 md:w-76 md:h-76 lg:w-92 lg:h-92 rounded-full object-cover object-center border-4 border-gray-900 shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              variants={fadeInRight}
              className="text-center lg:text-left space-y-4"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Hey folks, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Zeyaul Hasan
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 font-medium"
              >
                Software Engineer & <span className="text-blue-400">Cybersecurity Enthusiast</span>
              </motion.p>

              {/* Animated Tagline - Smooth Fade Cycle */}
              <motion.div
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto lg:mx-0 h-16"
              >
                <div className="relative h-full">
                  {phrases.map((phrase, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        y: currentIndex === index ? 0 : 10
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      {phrase}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View Projects
                <Eye className="w-4 h-4" />
              </span>
            </motion.button>

            <motion.button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setResumeModalOpen(true)
              }}
              className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Get My Resume
                <Download className="w-4 h-4" />
              </span>
            </motion.button>

            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Visit GitHub
                <Github className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 pt-8"
          >
            <h3 className="text-2xl font-bold text-center text-white">Tech Stack</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 max-w-4xl mx-auto">
              {[
                { Icon: SiPython, name: "Python", color: "text-[#3776AB]" }, // Fixed color
                { Icon: SiKalilinux, name: "Kali Linux", color: "text-blue-400" },
                { Icon: SiGithub, name: "GitHub", color: "text-purple-400" },
                { Icon: SiMysql, name: "MySQL", color: "text-blue-500" },
                { Icon: SiVscodium, name: "VS Code", color: "text-blue-300" },
                { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-300" },
                { Icon: SiReact, name: "React", color: "text-cyan-400" },
                { Icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <tech.Icon className={`w-8 h-8 ${tech.color}`} />
                  <span className="text-xs font-medium text-gray-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Motto */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <blockquote className="text-xl md:text-2xl italic font-light text-gray-500 max-w-2xl mx-auto">
              &ldquo;Code. Secure. Innovate.&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-gray-500 hover:text-white transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </section>
  )
}
