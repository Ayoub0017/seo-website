'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { TableOfContents } from './table-of-contents'

interface BlogSidebarProps {
  content: any[]
}

export function BlogSidebar({ content }: BlogSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="sticky top-8 h-fit">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Collapsible Header */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
          {isCollapsed ? (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          )}
        </button>

        {/* Collapsible Content */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <TableOfContents content={content} />
          </div>
        )}
      </div>
    </div>
  )
}