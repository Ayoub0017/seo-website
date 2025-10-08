import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/schema-markup"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star, FileText, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/sanity-queries"
import { urlFor } from "@/lib/sanity"
import { ayoubPersonData } from "@/components/schema-markup"

// Utility functions
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function generateBlogPath(post: any): string {
  return `/blog/${post.slug.current}`
}

export const metadata: Metadata = {
  title: "SEO & Marketing Insights",
  description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouarain.com/blog",
    languages: {
      "en-US": "https://ayoubouarain.com/blog",
    },
  },
  openGraph: {
    title: "SEO & Marketing Insights - Ayoub Ouraian Blog",
    description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
    url: "https://ayoubouarain.com/blog",
    siteName: "Ayoub Ouraian",
    images: [
      {
        url: "https://ayoubouarain.com/ayoub-ouarain-profile.png",
        width: 1200,
        height: 630,
        alt: "SEO & Marketing Insights by Ayoub Ouraian",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing Insights - Ayoub Ouraian Blog",
    description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
    images: ["https://ayoubouarain.com/ayoub-ouarain-profile.png"],
  },
}

export const revalidate = 0 // Disable caching for immediate updates

export default async function BlogPage() {
  console.log('BlogPage component is rendering on the server')
  
  const { featured, latest } = await getBlogPosts()
  
  console.log('Server-side data fetched:', {
    featuredCount: featured.length,
    latestCount: latest.length,
    featuredTitles: featured.map(post => post.title),
    latestTitles: latest.map(post => post.title)
  })

  return (
    <>
      {/* Blog Schema Markup */}
      <SchemaMarkup 
        type="blog" 
        data={{
          name: "SEO & Marketing Insights Blog",
          description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
          url: "https://ayoubouarain.com/blog",
          author: ayoubPersonData,
          publisher: ayoubPersonData
        }} 
      />
      
      <main className="min-h-screen">
        {/* Navigation component */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              SEO & Marketing
              <span className="text-primary block">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights
              that drive real business results.
            </p>
          </div>
        </section>

        {/* Featured Articles - Server-side rendered */}
        {featured.length > 0 && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Star className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featured.map((post) => (
                  <Card
                    key={post._id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                  >
                    <CardHeader className="pb-4">
                      {post.mainImage && (
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(post.mainImage).width(400).height(200).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        {post.author && (
                          <span>by {post.author}</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.categories?.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Link href={generateBlogPath(post)}>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles - Server-side rendered */}
        {latest.length > 0 && (
          <section className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latest.map((post) => (
                  <Card
                    key={post._id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                  >
                    <CardHeader className="pb-4">
                      {post.mainImage && (
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(post.mainImage).width(400).height(200).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        {post.author && (
                          <span>by {post.author}</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.categories?.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Link href={generateBlogPath(post)}>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA - Server-side rendered */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Stay Updated with SEO Insights
                </CardTitle>
                <CardDescription className="text-lg">
                  Get the latest SEO strategies, marketing tips, and web development insights delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Subscribe to Newsletter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
