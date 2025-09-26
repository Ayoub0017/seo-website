'use client'

import { useEffect } from 'react'

export function ReadingProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      const progressElement = document.getElementById('reading-progress')
      const progressBar = document.getElementById('progress-bar')
      
      if (progressElement) {
        progressElement.textContent = scrollPercent.toString()
      }
      
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`
      }
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return null // This component doesn't render anything
}