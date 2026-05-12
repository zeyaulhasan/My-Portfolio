"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'
import { CERTIFICATES } from '@/lib/constants'
import { CertificateCard } from '@/components/ui/CertificateCard'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

export const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="certificates" className="scroll-mt-16 py-12 certificates-section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 content">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-10"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Certifications</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Certifications & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Credentials</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Professional certifications and credentials that validate my expertise in cutting-edge technologies and industry best practices
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {CERTIFICATES.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
              />
            ))}
          </motion.div>

          {/* Learning Journey */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Lifelong Learning Journey
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Continuously expanding my knowledge and staying at the forefront of technology.
                Currently pursuing advanced certifications in AI/ML, Web Development, and Cybersecurity.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {['Oracle University', 'NPTEL IIT Kharagpur', 'Board & Infinity', 'Deloitte', 'CYBRARY', 'LinkedIn'].map((platform, index) => (
                <motion.div
                  key={platform}
                  className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 text-primary font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
