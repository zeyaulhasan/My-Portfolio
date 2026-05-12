"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, X } from 'lucide-react'
import { Modal } from './Modal'
import { scaleIn } from '@/lib/utils'

interface CertificateCardProps {
  certificate: {
    id: number
    name: string
    issuer: string
    date: string
    image: string
    verificationUrl: string
  }
  index: number
}

export const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div
        variants={scaleIn}
        whileHover={{ y: -8, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCardClick}
        className="certificate-card group"
      >
        {/* Certificate Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-accent/20 backdrop-blur-sm rounded-full p-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
              {certificate.name}
            </h3>
            <p className="text-muted-foreground text-sm font-medium">
              {certificate.issuer}
            </p>
          </div>

          {/* Date */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{certificate.date}</span>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={certificate.name}
      >
        <div className="space-y-6">
          {/* Full Certificate Image */}
          <div className="relative max-h-96 overflow-auto rounded-lg border border-border/50">
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Certificate Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {certificate.name}
              </h3>
              <p className="text-muted-foreground text-lg font-medium">
                {certificate.issuer}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span className="text-base">Completed in {certificate.date}</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
