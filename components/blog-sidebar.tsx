import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TableOfContents } from './table-of-contents'

interface BlogSidebarProps {
  content: any[]
}

export function BlogSidebar({ content }: BlogSidebarProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold" style={{ color: 'oklch(0.55 0.18 280)' }}>
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <TableOfContents content={content} />
      </CardContent>
    </Card>
  )
}