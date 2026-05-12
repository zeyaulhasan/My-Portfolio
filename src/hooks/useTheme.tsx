"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    const initialTheme = savedTheme || systemPreference
    setTheme(initialTheme)
    updateTheme(initialTheme)
  }, [])

  const updateTheme = (newTheme: Theme) => {
    const root = document.documentElement

    if (newTheme === 'dark') {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark')
    } else {
      root.setAttribute('data-theme', 'light')
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    updateTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}