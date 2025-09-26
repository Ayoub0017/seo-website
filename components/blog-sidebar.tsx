'use client'

import { TableOfContents } from '@/components/table-of-contents'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2, BookOpen, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogSidebarProps {
  content: any[] // PortableText content
  readingTime?: number
  className?: string
}

export function BlogSidebar({ content, readingTime, className }: BlogSidebarProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <aside className={cn("space-y-6", className)}>
      {/* Table of Contents */}
      <TableOfContents content={content} />
      
      {/* Article Info Card */}
      <Card className="sticky top-[28rem]">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2" style={{ color: 'oklch(0.55 0.18 280)' }}>
            <BookOpen className="h-5 w-5" />
            Article Info
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-4">
          {readingTime && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShare}
            className="w-full flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share Article
          </Button>
        </CardContent>
      </Card>

      {/* Progress Indicator */}
      <Card className="sticky top-[36rem]">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Reading Progress</span>
              <span className="font-medium" style={{ color: 'oklch(0.55 0.18 280)' }}>
                <span id="reading-progress">0</span>%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                id="progress-bar"
                className="h-2 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  backgroundColor: 'oklch(0.55 0.18 280)',
                  width: '0%'
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}