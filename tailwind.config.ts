import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a0a1a',
        'electric-blue': '#4FC3F7',
        'aqua-cyan': '#00E5FF',
        'neon-purple': '#B388FF',
        'bright-green': '#69F0AE',
        'amber-gold': '#FFD54F',
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(79, 195, 247, 0.5)', // electric-blue glow
        'aqua-glow': '0 0 15px rgba(0, 229, 255, 0.5)',
        'purple-glow': '0 0 15px rgba(179, 136, 255, 0.5)',
        'green-glow': '0 0 15px rgba(105, 240, 174, 0.5)',
        'gold-glow': '0 0 15px rgba(255, 213, 79, 0.5)',
        'cyber-glow': '0 0 20px rgba(0, 229, 255, 0.3), 0 0 40px rgba(179, 136, 255, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor' },
          '50%': { boxShadow: '0 0 20px currentColor, 0 0 40px currentColor' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
