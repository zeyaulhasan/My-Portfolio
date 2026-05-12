"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2, Shield, Cloud, Palette, Terminal,
  MapPin, GraduationCap, Briefcase, Zap,
  CheckCircle2, Linkedin
} from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants"

/* ─── animation variants ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})
const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})

/* ─── data ─── */
const highlights = [
  "B.Tech CSE Graduate — Lovely Professional University",
  "Ethical Hacking & Penetration Testing",
  "Full-Stack Web Development (React / Next.js)",
  "Cloud Certified — OCI & AWS",
  "500+ DSA problems solved",
  "Open to full-time roles & collaborations",
]

const services = [
  { title: "Web Development",         description: "Responsive, performant apps with React & Next.js.",                  icon: Code2,    from: "from-blue-500/20",   to: "to-cyan-500/20",    border: "border-blue-500/30 hover:border-blue-400/70",   icon_c: "text-blue-400"   },
  { title: "Cybersecurity",           description: "Ethical hacking, pen-testing & secure-by-design systems.",           icon: Shield,   from: "from-red-500/20",    to: "to-pink-500/20",    border: "border-red-500/30 hover:border-red-400/70",     icon_c: "text-red-400"    },
  { title: "UI / UX Design",          description: "Clean, accessible interfaces with sharp attention to detail.",        icon: Palette,  from: "from-purple-500/20", to: "to-violet-500/20",  border: "border-purple-500/30 hover:border-purple-400/70",icon_c: "text-purple-400" },
  { title: "Cloud & DevOps",          description: "AWS & OCI deployments, CI/CD pipelines and automation.",             icon: Cloud,    from: "from-cyan-500/20",   to: "to-teal-500/20",    border: "border-cyan-500/30 hover:border-cyan-400/70",   icon_c: "text-cyan-400"   },
  { title: "Competitive Programming", description: "500+ problems on LeetCode & Codeforces. DSA is my playground.",      icon: Terminal, from: "from-green-500/20",  to: "to-emerald-500/20", border: "border-green-500/30 hover:border-green-400/70", icon_c: "text-green-400"  },
  { title: "Problem Solving",         description: "Breaking complex challenges into elegant, maintainable solutions.",   icon: Zap,      from: "from-yellow-500/20", to: "to-amber-500/20",   border: "border-yellow-500/30 hover:border-yellow-400/70",icon_c: "text-yellow-400" },
]

export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="about" ref={ref} className="scroll-mt-24 relative overflow-hidden py-12 px-4">

      {/* ── ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-700/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16">

        {/* ════════════════════════════════════
            SECTION HEADER
        ════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0)}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Me
            </span>
          </h2>
        </motion.div>

        {/* ════════════════════════════════════
            PROFILE BLOCK
        ════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT: photo column (2 cols) ── */}
          <motion.div
            {...fadeLeft(0.1)}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            {/* Photo card */}
            <div className="relative w-full max-w-xs mx-auto">
              {/* card bg */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/60 shadow-2xl backdrop-blur-sm p-6 flex flex-col items-center gap-5">
                {/* top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                {/* spinning ring + photo */}
                <div className="relative group">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-[2px]"
                  />
                  <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-slate-900 z-10">
                    <img src="/images/photo.png" alt="Zeyaul Hasan" className="w-full h-full object-cover object-center" />
                  </div>

                  {/* floating badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-purple-600/40 border border-white/10"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to Work 🚀
                  </motion.div>
                </div>

                {/* name + role */}
                <div className="text-center mt-3">
                  <h3 className="text-xl font-bold text-white">Zeyaul Hasan</h3>
                  <p className="text-sm text-blue-400 font-medium mt-0.5">Software Engineer · Cyber Enthusiast</p>
                </div>

                {/* info pills */}
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  {[
                    { icon: MapPin,        text: "Punjab, India"      },
                    { icon: GraduationCap, text: "B.Tech CSE — LPU '26"   },
                    { icon: Briefcase,     text: "Open to Full-Time Roles" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-800/70 border border-slate-700/50 rounded-full px-3 py-1">
                      <Icon className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      {text}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 w-full">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-slate-700/80 border border-slate-600/50 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>


          </motion.div>

          {/* ── RIGHT: bio column (3 cols) ── */}
          <motion.div
            {...fadeRight(0.2)}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio card */}
            <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-slate-900/90 to-slate-800/60 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Who I am</p>

              <div className="space-y-4 text-slate-300 text-sm sm:text-[15px] leading-[1.85]">
                <p>
                  I&apos;m a <span className="text-white font-semibold">Computer Science Engineering</span> graduate from{" "}
                  <span className="text-blue-400 font-semibold">Lovely Professional University</span>, passionate about building secure, scalable digital products that solve real-world problems.
                </p>
                <p>
                  I thrive at the intersection of{" "}
                  <span className="text-blue-400 font-medium">full-stack development</span> and{" "}
                  <span className="text-red-400 font-medium">ethical hacking</span> — from crafting polished UIs to hardening backend systems against real threats.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m grinding competitive programming, chasing cloud certifications, or exploring the latest in AI and cybersecurity to stay ahead in a fast-moving industry.
                </p>
              </div>

              {/* highlights checklist */}
              <div className="mt-7 pt-6 border-t border-slate-700/50">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">Highlights</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* currently learning */}
              <div className="mt-6 pt-5 border-t border-slate-700/50">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-3">Currently Learning</p>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.currentlyLearning.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/25 text-blue-300 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* ════════════════════════════════════
            EXPERTISE GRID
        ════════════════════════════════════ */}
        <div>
          <motion.div
            {...fadeUp(0.1)}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center mb-10"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Expertise
              </span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ title, description, icon: Icon, from, to, border, icon_c }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${from} ${to} border ${border} backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden cursor-default`}
              >
                {/* corner orb */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/[0.04] rounded-full group-hover:scale-[2.5] transition-transform duration-700" />

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/70 border border-slate-700/50 mb-5 ${icon_c}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="text-[15px] font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{description}</p>

                {/* bottom sweep line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${from.replace('/20','')} ${to.replace('/20','')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
