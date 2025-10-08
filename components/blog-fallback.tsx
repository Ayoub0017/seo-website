import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Star, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function BlogPostSkeleton() {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
        <CardTitle>
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1 mb-3">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function FeaturedArticlesFallback() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Star className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPostSkeleton />
          <BlogPostSkeleton />
        </div>
      </div>
    </section>
  )
}

export function LatestArticlesFallback() {
  return (
    <section className="pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPostSkeleton />
          <BlogPostSkeleton />
          <BlogPostSkeleton />
          <BlogPostSkeleton />
        </div>
      </div>
    </section>
  )
}