"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

const ticker = [
  "⚠️ Warning: May cause uncontrollable urge to hire immediately",
  "🧠 IQ: Over 9000 (unverified, but feels right)",
  "🐛 Bug whisperer. Code poet. Occasional genius.",
  "☕ Runs on coffee, curiosity & Stack Overflow",
  "🚀 Ships features faster than your coffee brews",
  "💡 Turns caffeine into working software since 2022",
  "🎯 Hits deadlines like a heat-seeking missile",
]

const roasts = [
  "Your codebase called. It's lonely. 📞",
  "Your competitors already hired someone like me. 👀",
  "Every day you wait, a semicolon cries. 😢",
  "I don't always write bugs, but when I do, I fix them too. 🐛",
  "My rubber duck has a PhD. Yours doesn't. 🦆",
]

const funFacts = [
  { emoji: "🏆", label: "Bugs Fixed",         value: "∞"   },
  { emoji: "☕", label: "Coffees",             value: "404" },
  { emoji: "🌙", label: "Late Commits",        value: "69+" },
  { emoji: "🦆", label: "Rubber Ducks",        value: "3"   },
]

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [roastIdx, setRoastIdx] = useState(0)
  const [clicked, setClicked]   = useState(false)

  useEffect(() => {
    if (!isOpen) { setClicked(false); return }
    const t = setInterval(() => setRoastIdx(i => (i + 1) % roasts.length), 3000)
    return () => clearInterval(t)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative w-full max-w-[520px] pointer-events-auto mt-16 mb-8"
            >
              {/* Close btn */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-[#1a1a2e] border border-[#4FC3F7]/30 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#4FC3F7] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Card */}
              <div className="rounded-2xl overflow-hidden border border-[#4FC3F7]/20 shadow-2xl shadow-[#4FC3F7]/10 max-h-[90vh] overflow-y-auto">

                {/* ── BANNER ── */}
                <div className="relative bg-[#0a0a1a] px-8 pt-6 pb-4 text-center overflow-hidden">
                  {/* neon grid bg */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(#4FC3F7 1px, transparent 1px), linear-gradient(90deg, #4FC3F7 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }}
                  />
                  {/* top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent" />
                  {/* ambient glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#4FC3F7]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* bouncing emoji */}
                  <motion.div
                    animate={{ y: [0, -10, 0], scale: [1, 1.12, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-5xl mb-3 relative z-10 select-none"
                  >
                    🎯
                  </motion.div>

                  <h2 className="relative z-10 text-4xl font-black tracking-tight"
                    style={{ color: '#4FC3F7', textShadow: '0 0 20px rgba(79,195,247,0.6), 0 0 40px rgba(79,195,247,0.3)' }}
                  >
                    HIRE ME
                  </h2>
                  <p className="relative z-10 text-slate-300 text-sm font-semibold mt-1">
                    to unlock my{' '}
                    <span style={{ color: '#B388FF', textShadow: '0 0 12px rgba(179,136,255,0.7)' }}>
                      FULL POTENTIAL
                    </span>{' '}✨
                  </p>

                  {/* rotating roast */}
                  <div className="relative z-10 mt-3 min-h-[1.4rem]">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roastIdx}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs text-slate-400 italic"
                      >
                        {roasts[roastIdx]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* ticker */}
                  <div className="relative z-10 mt-4 overflow-hidden rounded-lg bg-[#4FC3F7]/5 border border-[#4FC3F7]/15 py-1.5">
                    <motion.div
                      className="flex gap-10 whitespace-nowrap text-[11px] font-medium"
                      style={{ color: '#4FC3F7' }}
                      animate={{ x: ['0%', '-50%'] }}
                      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    >
                      {[...ticker, ...ticker].map((t, i) => (
                        <span key={i} className="flex-shrink-0 opacity-70">{t}</span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* ── BODY ── */}
                <div className="bg-[#0d0d1f] px-8 py-4 space-y-4">

                  {/* fun stats */}
                  <div className="grid grid-cols-4 gap-3">
                    {funFacts.map(({ emoji, label, value }) => (
                      <div key={label}
                        className="flex flex-col items-center gap-1.5 rounded-xl p-3 border text-center"
                        style={{ background: 'rgba(79,195,247,0.05)', borderColor: 'rgba(79,195,247,0.15)' }}
                      >
                        <span className="text-2xl">{emoji}</span>
                        <span className="text-base font-black" style={{ color: '#4FC3F7' }}>{value}</span>
                        <span className="text-[10px] text-slate-400 leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* T&C */}
                  <div className="rounded-xl p-4 space-y-2 border"
                    style={{ background: 'rgba(179,136,255,0.05)', borderColor: 'rgba(179,136,255,0.15)' }}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#B388FF' }}>
                      Terms &amp; Conditions 📜
                    </p>
                    {[
                      "✅ Must provide unlimited coffee",
                      "✅ Rubber duck meetings = pair programming",
                      "✅ 'Works on my machine' is valid deployment",
                      "❌ No touching my dark mode settings",
                      "❌ No meetings that could've been a Slack msg",
                    ].map(t => (
                      <p key={t} className="text-xs text-slate-300">{t}</p>
                    ))}
                  </div>

                  {/* fine print */}
                  <p className="text-[10px] text-slate-500 text-center italic">
                    * By clicking below you agree that I am, in fact, awesome. Side effects: shipping faster, fewer bugs &amp; occasional unsolicited refactors.
                  </p>

                  {/* CTA */}
                  <motion.button
                    onClick={() => { setClicked(true); setTimeout(onClose, 1300) }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-xl font-black text-sm relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #4FC3F7, #B388FF)',
                      color: '#0a0a1a',
                      boxShadow: '0 0 24px rgba(79,195,247,0.35), 0 0 48px rgba(179,136,255,0.2)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    />
                    <span className="relative">
                      {clicked ? "Great choice! 🎉 You won't regret it!" : "I Accept These Terms 🤝 Let's Build!"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
