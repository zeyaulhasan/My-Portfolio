"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import { FaStackOverflow, FaQuora } from 'react-icons/fa'
import { ContactForm } from '@/components/ui/ContactForm'
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils'

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const socialLinks = [
    {
      name: 'GitHub',
      href: SOCIAL_LINKS.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'StackOverflow',
      href: SOCIAL_LINKS.stackoverflow,
      icon: FaStackOverflow,
      color: 'hover:text-orange-500'
    },
    {
      name: 'Quora',
      href: SOCIAL_LINKS.quora,
      icon: FaQuora,
      color: 'hover:text-red-500'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: SOCIAL_LINKS.email
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93xxxxxx99', // Replace with actual phone
      href: 'tel:+91 93xxxxxx99'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: 'https://www.google.com/maps/search/?api=1&query=Punjab%2C%20India'
    }
  ]

  const handleFormSubmit = (formData: { name: string; email: string; message: string }) => {
    // Handle form submission - you can integrate with your preferred service
    console.log('Form submitted:', formData)
    // Example: Send to your email service, Discord webhook, etc.
  }

  return (
    <section id="contact" className="scroll-mt-16 py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Let&apos;s Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always interested in new opportunities, whether it&apos;s a full-time position,
                  freelance project, or just a chat about technology and innovation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="flex items-center space-x-4 p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={scaleIn}
                        className={`flex flex-col items-center space-y-1 p-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group ${social.color}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-4 h-4 transition-colors" />
                        <span className="text-xs font-medium text-center">{social.name}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form and Availability */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Contact Form */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="max-w-lg mx-auto space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>

                  <ContactForm onSubmit={handleFormSubmit} />
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                variants={scaleIn}
                className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20 dark:from-green-500/20 dark:to-blue-500/20 dark:border-green-500/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium text-foreground">Available for opportunities</p>
                    <p className="text-sm text-muted-foreground">Currently seeking new challenges</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
