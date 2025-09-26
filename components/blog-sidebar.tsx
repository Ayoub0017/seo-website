'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TableOfContents } from './table-of-contents'

interface BlogSidebarProps {
  content: any[]
}

export function BlogSidebar({ content }: BlogSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold" style={{ color: 'oklch(0.55 0.18 280)' }}>
            Table of Contents
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="pt-0">
          <TableOfContents content={content} />
        </CardContent>
      )}
    </Card>
  )
}