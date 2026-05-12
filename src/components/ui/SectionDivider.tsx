"use client"

import { motion } from 'framer-motion'

type DividerVariant = 'wave' | 'zigzag' | 'curve' | 'tilt' | 'pulse'

interface SectionDividerProps {
  variant?: DividerVariant
  flip?: boolean
}

// Static SVG wave — animated only via CSS translate, no path morphing
const Wave = ({ flip }: { flip?: boolean }) => (
  <div className={`relative w-full overflow-hidden leading-none h-12 ${flip ? 'rotate-180' : ''}`}>
    <svg
      className="relative block w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`wg-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0" />
          <stop offset="30%" stopColor="#4FC3F7" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#B388FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,24 C200,48 400,0 600,24 C800,48 1000,0 1200,24 L1200,48 L0,48 Z"
        fill={`url(#wg-${flip})`}
      />
    </svg>
    {/* Sliding gradient line */}
    <div
      className="absolute top-1/2 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent, #4FC3F7, #B388FF, transparent)',
        animation: 'slideGradient 4s linear infinite',
      }}
    />
  </div>
)

const Zigzag = () => (
  <div className="relative w-full overflow-hidden leading-none h-8">
    <svg
      className="relative block w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 32"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="zg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0" />
          <stop offset="20%" stopColor="#4FC3F7" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#B388FF" stopOpacity="0.5" />
          <stop offset="80%" stopColor="#4FC3F7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points="0,16 75,4 150,16 225,4 300,16 375,4 450,16 525,4 600,16 675,4 750,16 825,4 900,16 975,4 1050,16 1125,4 1200,16"
        fill="none"
        stroke="url(#zg)"
        strokeWidth="1.5"
      />
    </svg>
  </div>
)

const Curve = ({ flip }: { flip?: boolean }) => (
  <div className={`relative w-full overflow-hidden leading-none h-14 ${flip ? 'rotate-180' : ''}`}>
    <svg
      className="relative block w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 56"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`cg-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="0" />
          <stop offset="30%" stopColor="#B388FF" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#4FC3F7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,56 Q300,0 600,28 Q900,56 1200,0 L1200,56 Z"
        fill={`url(#cg-${flip})`}
      />
    </svg>
    <div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent, #B388FF, #4FC3F7, transparent)',
        animation: 'slideGradient 3s linear infinite',
      }}
    />
  </div>
)

const Tilt = () => (
  <div className="relative w-full overflow-hidden leading-none h-8">
    <svg
      className="relative block w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 32"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0" />
          <stop offset="30%" stopColor="#4FC3F7" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#B388FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,32 L400,4 L800,28 L1200,0 L1200,32 Z"
        fill="url(#tg)"
      />
    </svg>
  </div>
)

const Pulse = () => (
  <div className="relative w-full h-6 flex items-center justify-center overflow-hidden">
    <div
      className="absolute left-0 right-0 h-px"
      style={{
        background: 'linear-gradient(90deg, transparent, #4FC3F7, #B388FF, transparent)',
        animation: 'slideGradient 3s linear infinite',
      }}
    />
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          left: `${15 + i * 17.5}%`,
          background: i % 2 === 0 ? '#4FC3F7' : '#B388FF',
        }}
        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
      />
    ))}
    <motion.div
      className="relative w-1.5 h-1.5 rotate-45 bg-gradient-to-r from-cyan-400 to-purple-400"
      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
)

export const SectionDivider = ({ variant = 'wave', flip = false }: SectionDividerProps) => {
  return (
    <div className="relative w-full pointer-events-none select-none">
      {variant === 'wave' && <Wave flip={flip} />}
      {variant === 'zigzag' && <Zigzag />}
      {variant === 'curve' && <Curve flip={flip} />}
      {variant === 'tilt' && <Tilt />}
      {variant === 'pulse' && <Pulse />}
    </div>
  )
}
