"use client"

import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Education } from '@/components/sections/Education'
import { TechStack } from '@/components/sections/TechStack'
import { Projects } from '@/components/sections/Projects'
import { Achievements } from '@/components/sections/Achievements'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'
import { SectionDivider } from '@/components/ui/SectionDivider'

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {}
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <Layout>
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Hero />
        </motion.section>

        <SectionDivider variant="wave" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <About />
        </motion.section>

        <SectionDivider variant="pulse" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Education />
        </motion.section>

        <SectionDivider variant="zigzag" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <TechStack />
        </motion.section>

        <SectionDivider variant="curve" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Projects />
        </motion.section>

        <SectionDivider variant="tilt" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Achievements />
        </motion.section>

        <SectionDivider variant="wave" flip />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Certificates />
        </motion.section>

        <SectionDivider variant="pulse" />

        <motion.section variants={fadeInUp} className="scroll-mt-24">
          <Contact />
        </motion.section>
      </motion.main>
    </Layout>
  )
}
