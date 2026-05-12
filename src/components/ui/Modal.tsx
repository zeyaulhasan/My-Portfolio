"use client"

import { ReactNode, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      // Prevent scroll when modal opens
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      // Restore scroll when modal closes
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — fixed to viewport */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal — always centered in viewport regardless of scroll */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl max-w-4xl w-full pointer-events-auto glass glow"
              style={{ maxHeight: 'calc(100vh - 40px)' }}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onClose()
                    }}
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </motion.button>
                </div>
              )}

              {/* Content — scrollable inside modal only */}
              <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
