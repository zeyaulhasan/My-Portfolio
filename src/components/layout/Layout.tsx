"use client"

import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { ThemeProvider } from '@/hooks/useTheme'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}