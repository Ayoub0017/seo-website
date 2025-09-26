'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  content: any[] // PortableText content
  className?: string
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Extract headings from PortableText content
  useEffect(() => {
    const extractedHeadings: Heading[] = []
    
    const extractHeadings = (blocks: any[]) => {
      blocks.forEach((block) => {
        if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
          const text = block.children
            ?.map((child: any) => child.text)
            .join('') || ''
          
          if (text.trim()) {
            const id = text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
            
            extractedHeadings.push({
              id,
              text: text.trim(),
              level: block.style === 'h2' ? 2 : 3
            })
          }
        }
      })
    }

    if (content && Array.isArray(content)) {
      extractHeadings(content)
    }

    setHeadings(extractedHeadings)
  }, [content])

  // Handle scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean)

      const scrollPosition = window.scrollY + 100

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for fixed header
      const elementPosition = element.offsetTop - offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className={className}>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "text-left w-full text-sm transition-colors duration-200 hover:text-foreground",
                heading.level === 2 ? "font-medium" : "font-normal ml-4",
                activeId === heading.id 
                  ? "font-semibold" 
                  : "text-muted-foreground"
              )}
              style={{
                color: activeId === heading.id ? 'oklch(0.55 0.18 280)' : undefined
              }}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}