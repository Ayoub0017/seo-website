import { cn } from '@/lib/utils'
import { BLOCKS } from '@contentful/rich-text-types'

interface Heading {
  id: string
  text: string
  level: 2
}

interface TableOfContentsProps {
  content: any // Contentful Rich Text content
  className?: string
}

// Extract headings from Contentful Rich Text content (server-side)
function extractHeadings(richTextDocument: any): Heading[] {
  const extractedHeadings: Heading[] = []
  
  if (!richTextDocument || !richTextDocument.content) {
    return extractedHeadings
  }
  
  function traverseNodes(nodes: any[]) {
    nodes.forEach((node) => {
      if (node.nodeType === BLOCKS.HEADING_2) {
        const text = node.content
          ?.map((child: any) => child.value || '')
          .join('') || ''
        
        if (text.trim()) {
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          
          extractedHeadings.push({
            id,
            text: text.trim(),
            level: 2
          })
        }
      }
      
      // Recursively traverse child nodes
      if (node.content && Array.isArray(node.content)) {
        traverseNodes(node.content)
      }
    })
  }
  
  traverseNodes(richTextDocument.content)
  return extractedHeadings
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const headings = content ? extractHeadings(content) : []

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className={className}>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-left w-full text-sm transition-colors duration-200 hover:text-foreground font-medium text-muted-foreground block"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}