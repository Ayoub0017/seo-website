import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp, Search, FileText } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { client, urlFor } from "@/lib/sanity"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage?: any
  publishedAt: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId || projectId === 'demo-project') {
    // Return mock data for testing when Sanity is not configured
    return [
      {
        _id: '1',
        title: 'Complete Guide to On-Page SEO',
        slug: { current: 'on-page-seo-guide' },
        excerpt: 'Master the fundamentals of on-page SEO with this comprehensive guide covering everything from keyword optimization to technical SEO.',
        publishedAt: '2024-01-15',
        author: 'SEO Expert',
        categories: ['Featured', 'SEO'],
        children: [
          {
            _id: '2',
            title: 'Keyword Research Strategies',
            slug: { current: 'keyword-research' },
            excerpt: 'Learn advanced keyword research techniques to find profitable keywords for your content.',
            publishedAt: '2024-01-16'
          },
          {
            _id: '3',
            title: 'Meta Tags Optimization',
            slug: { current: 'meta-tags' },
            excerpt: 'Optimize your meta titles and descriptions for better search engine visibility.',
            publishedAt: '2024-01-17'
          }
        ]
      },
      {
        _id: '4',
        title: 'Technical SEO Checklist',
        slug: { current: 'technical-seo' },
        excerpt: 'A comprehensive checklist for technical SEO optimization including site speed, mobile-friendliness, and crawlability.',
        publishedAt: '2024-01-10',
        author: 'Technical SEO Specialist',
        categories: ['SEO', 'Technical'],
        parent: {
          title: 'Advanced SEO Techniques',
          slug: { current: 'advanced-seo' }
        }
      },
      {
        _id: '5',
        title: 'Local SEO Best Practices',
        slug: { current: 'local-seo' },
        excerpt: 'Optimize your business for local search results and improve your Google My Business presence.',
        publishedAt: '2024-01-12',
        author: 'Local SEO Expert',
        categories: ['SEO', 'Local']
      }
    ]
  }

  try {
    const query = `
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
      }
    `
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function generateBlogPath(post: BlogPost): string {
  return `/blog/${post.slug.current}`
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
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

      {/* Blog Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          </div>
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post._id}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  {post.mainImage && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Link href={generateBlogPath(post)}>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No blog posts found</h3>
              <p className="text-muted-foreground">
                Check back later for new content or create your first post in the Sanity Studio.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter CTA */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated with SEO Trends</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get weekly insights on the latest SEO strategies, algorithm updates, and content marketing tips
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-6">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </main>
  )
}
