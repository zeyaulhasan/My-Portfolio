"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaLinux, FaAws, FaFigma
} from 'react-icons/fa'
import {
    SiCplusplus, SiJavascript, SiMetasploit, SiSelenium, SiMysql, SiWireshark, SiBurpsuite
} from 'react-icons/si'
import { TbTestPipe } from 'react-icons/tb'
import { BiNetworkChart } from 'react-icons/bi'

const techCategories = [
    {
        title: "Languages",
        skills: [
            { name: 'C++', icon: SiCplusplus, color: '#00599C', glow: 'rgba(0, 89, 156, 0.5)' },
            { name: 'Java', icon: FaJava, color: '#007396', glow: 'rgba(0, 115, 150, 0.5)' },
            { name: 'Python', icon: FaPython, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.5)' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.5)' },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: 'HTML', icon: FaHtml5, color: '#E34F26', glow: 'rgba(227, 79, 38, 0.5)' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', glow: 'rgba(21, 114, 182, 0.5)' },
            { name: 'React.js', icon: FaReact, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.5)' },
            { name: 'Selenium', icon: SiSelenium, color: '#43B02A', glow: 'rgba(67, 176, 42, 0.5)' },
            { name: 'TestNG', icon: TbTestPipe, color: '#FF0000', glow: 'rgba(255, 0, 0, 0.5)' },
        ]
    },
    {
        title: "Platforms & Tools",
        skills: [
            { name: 'Metasploit', icon: SiMetasploit, color: '#12659C', glow: 'rgba(18, 101, 156, 0.5)' },
            { name: 'Burp Suite', icon: SiBurpsuite, color: '#FF6633', glow: 'rgba(255, 102, 51, 0.5)' },
            { name: 'Wireshark', icon: SiWireshark, color: '#1679A7', glow: 'rgba(22, 121, 167, 0.5)' },
            { name: 'Nmap', icon: BiNetworkChart, color: '#4D4D4D', glow: 'rgba(77, 77, 77, 0.5)' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1', glow: 'rgba(68, 121, 161, 0.5)' },
            { name: 'Linux', icon: FaLinux, color: '#FCC624', glow: 'rgba(252, 198, 36, 0.5)' },
            { name: 'AWS', icon: FaAws, color: '#FF9900', glow: 'rgba(255, 153, 0, 0.5)' },
            { name: 'Figma', icon: FaFigma, color: '#F24E1E', glow: 'rgba(242, 78, 30, 0.5)' },
        ]
    }
]

export const TechStack = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="skills" className="py-12 relative overflow-hidden bg-[#0a0a1a]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#000000] opacity-90 -z-10" />

            {/* Subtle Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] tracking-tight"
                        >
                            Skills & Experties
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={inView ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-1 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        />
                    </div>

                    {/* Categories */}
                    <div className="space-y-12">
                        {techCategories.map((category, categoryIndex) => (
                            <div key={category.title} className="space-y-6">
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (categoryIndex * 0.1) }}
                                    className="text-xl md:text-2xl font-semibold text-blue-200/80 pl-4 border-l-4 border-blue-500/50"
                                >
                                    {category.title}
                                </motion.h3>

                                <div className="flex flex-wrap gap-4 md:gap-6">
                                    {category.skills.map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) + (categoryIndex * 0.1) }}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.08,
                                            }}
                                            className="group relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden"
                                            style={{
                                                boxShadow: `0 4px 15px -3px ${tech.glow}20, 0 0 0 1px ${tech.color}10`
                                            }}
                                        >
                                            {/* Animated background gradient */}
                                            <motion.div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `radial-gradient(circle at center, ${tech.glow}15 0%, transparent 70%)`
                                                }}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />

                                            {/* Glowing border effect */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{
                                                    boxShadow: `inset 0 0 20px ${tech.glow}30, 0 0 20px ${tech.glow}40`,
                                                    border: `1px solid ${tech.color}40`
                                                }}
                                            />

                                            {/* Rotating ring on hover */}
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                                                style={{
                                                    border: `2px solid ${tech.color}30`,
                                                }}
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            />

                                            {/* Icon with pulsing glow */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="relative w-8 h-8 md:w-10 md:h-10 mb-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 z-10"
                                            >
                                                <tech.icon
                                                    className="w-full h-full object-contain transition-all duration-300"
                                                    style={{
                                                        color: tech.color,
                                                        filter: `drop-shadow(0 0 8px ${tech.glow}) drop-shadow(0 0 12px ${tech.glow}60)`,
                                                    }}
                                                />
                                                {/* Icon glow effect */}
                                                <div
                                                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                                                    style={{
                                                        background: tech.glow,
                                                    }}
                                                />
                                            </motion.div>

                                            {/* Label with glow */}
                                            <span
                                                className="relative text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white transition-all duration-300 z-10"
                                                style={{
                                                    textShadow: `0 0 10px ${tech.glow}00 group-hover:${tech.glow}80`
                                                }}
                                            >
                                                {tech.name}
                                            </span>

                                            {/* Corner accent */}
                                            <div
                                                className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                                style={{
                                                    background: `radial-gradient(circle at top right, ${tech.color}60 0%, transparent 70%)`,
                                                    borderTopRightRadius: '1rem'
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
