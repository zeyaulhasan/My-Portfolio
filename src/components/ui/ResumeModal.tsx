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
]

const roasts = [
  "Your codebase called. It's lonely. 📞",
  "Your competitors already hired someone like me. 👀",
  "Every day you wait, a semicolon cries. 😢",
  "I don't always write bugs, but when I do, I fix them too. 🐛",
]

const funFacts = [
  { emoji: "🏆", label: "Bugs Fixed", value: "∞" },
  { emoji: "☕", label: "Coffees",    value: "404" },
  { emoji: "🌙", label: "Late Commits", value: "69+" },
  { emoji: "🦆", label: "Rubber Ducks", value: "3" },
]

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [roastIdx, setRoastIdx] = useState(0)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (!isOpen) { setClicked(false); return }
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    const t = setInterval(() => setRoastIdx(i => (i + 1) % roasts.length), 3000)
    return () => {
      clearInterval(t)
      // Restore body scroll when modal closes
      document.body.style.overflow = ''
    }
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
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md"
          />

          {/* Centered modal — always in center of viewport, no scroll needed */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-[480px] mx-4 pointer-events-auto"
            >
              {/* Close btn */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onClose()
                }}
                className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-[#1a1a2e] border border-[#4FC3F7]/30 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#4FC3F7] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Card — fixed max height with internal scroll */}
              <div className="rounded-2xl border border-[#4FC3F7]/20 shadow-2xl shadow-[#4FC3F7]/10 overflow-hidden"
                style={{ maxHeight: 'calc(100vh - 80px)' }}
              >
                {/* Inner scroll container */}
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>

                  {/* ── BANNER ── */}
                  <div className="relative bg-[#0a0a1a] px-6 pt-5 pb-3 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(#4FC3F7 1px, transparent 1px), linear-gradient(90deg, #4FC3F7 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#4FC3F7]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* emoji + title inline to save space */}
                    <div className="relative z-10 flex items-center justify-center gap-3 mb-1">
                      <motion.span
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-3xl select-none"
                      >
                        🎯
                      </motion.span>
                      <h2 className="text-3xl font-black tracking-tight"
                        style={{ color: '#4FC3F7', textShadow: '0 0 20px rgba(79,195,247,0.6)' }}
                      >
                        HIRE ME
                      </h2>
                    </div>

                    <p className="relative z-10 text-slate-300 text-xs font-semibold">
                      to unlock my{' '}
                      <span style={{ color: '#B388FF', textShadow: '0 0 12px rgba(179,136,255,0.7)' }}>
                        FULL POTENTIAL
                      </span>{' '}✨
                    </p>

                    {/* rotating roast */}
                    <div className="relative z-10 mt-2 min-h-[1.2rem]">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={roastIdx}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="text-[11px] text-slate-400 italic"
                        >
                          {roasts[roastIdx]}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    {/* ticker */}
                    <div className="relative z-10 mt-3 overflow-hidden rounded-lg bg-[#4FC3F7]/5 border border-[#4FC3F7]/15 py-1">
                      <motion.div
                        className="flex gap-10 whitespace-nowrap text-[10px] font-medium"
                        style={{ color: '#4FC3F7' }}
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        {[...ticker, ...ticker].map((t, i) => (
                          <span key={i} className="flex-shrink-0 opacity-70">{t}</span>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* ── BODY ── */}
                  <div className="bg-[#0d0d1f] px-6 py-4 space-y-3">

                    {/* fun stats */}
                    <div className="grid grid-cols-4 gap-2">
                      {funFacts.map(({ emoji, label, value }) => (
                        <div key={label}
                          className="flex flex-col items-center gap-1 rounded-xl p-2 border text-center"
                          style={{ background: 'rgba(79,195,247,0.05)', borderColor: 'rgba(79,195,247,0.15)' }}
                        >
                          <span className="text-xl">{emoji}</span>
                          <span className="text-sm font-black" style={{ color: '#4FC3F7' }}>{value}</span>
                          <span className="text-[9px] text-slate-400 leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* T&C */}
                    <div className="rounded-xl p-3 space-y-1.5 border"
                      style={{ background: 'rgba(179,136,255,0.05)', borderColor: 'rgba(179,136,255,0.15)' }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#B388FF' }}>
                        Terms &amp; Conditions 📜
                      </p>
                      {[
                        "✅ Must provide unlimited coffee",
                        "✅ Rubber duck meetings = pair programming",
                        "✅ 'Works on my machine' is valid deployment",
                        "❌ No touching my dark mode settings",
                        "❌ No meetings that could've been a Slack msg",
                      ].map(t => (
                        <p key={t} className="text-[11px] text-slate-300">{t}</p>
                      ))}
                    </div>

                    {/* fine print */}
                    <p className="text-[9px] text-slate-500 text-center italic">
                      * By clicking below you agree that I am, in fact, awesome. Side effects: shipping faster, fewer bugs &amp; occasional unsolicited refactors.
                    </p>

                    {/* CTA */}
                    <motion.button
                      onClick={() => { setClicked(true); setTimeout(onClose, 1300) }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-xl font-black text-sm relative overflow-hidden"
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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
