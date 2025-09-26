import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp, Search, FileText, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { client, urlFor } from "@/lib/sanity"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SchemaMarkup, ayoubPersonData } from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "SEO & Marketing Insights",
  description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
  robots: "index, follow",
  alternates: {
    canonical: "https://ayoubouraian.com/blog",
    languages: {
      "en-US": "https://ayoubouraian.com/blog",
    },
  },
}

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage?: any
  publishedAt: string
}

async function getBlogPosts() {
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId || projectId === 'demo-project') {
    // Return mock data for testing when Sanity is not configured
    return {
      featured: [
        {
          _id: '1',
          title: 'The Complete Guide to Technical SEO in 2024',
          slug: { current: 'complete-guide-technical-seo-2024' },
          excerpt: 'Master the technical aspects of SEO with our comprehensive guide covering Core Web Vitals, structured data, and more.',
          mainImage: null,
          publishedAt: '2024-01-15',
          author: 'SEO Expert',
          categories: ['SEO', 'Technical']
        }
      ],
      latest: [
        {
          _id: '2',
          title: 'How to Optimize Your Website for Local Search',
          slug: { current: 'optimize-website-local-search' },
          excerpt: 'Learn the essential strategies for dominating local search results and attracting more customers to your business.',
          mainImage: null,
          publishedAt: '2024-01-10',
          author: 'Local SEO Expert',
          categories: ['SEO', 'Local']
        },
        {
          _id: '3',
          title: 'Content Marketing Strategies That Actually Work',
          slug: { current: 'content-marketing-strategies-work' },
          excerpt: 'Discover proven content marketing tactics that drive engagement, build authority, and convert visitors into customers.',
          mainImage: null,
          publishedAt: '2024-01-05',
          author: 'Content Strategist',
          categories: ['Content Marketing', 'Strategy']
        }
      ]
    }
  }

  try {
    const [featuredPosts, latestPosts] = await Promise.all([
      // Fetch featured posts
      client.fetch(`
        *[_type == "post" && featured == true] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          "author": author->name,
          "categories": categories[]->title
        }
      `),
      // Fetch latest posts (excluding featured ones)
      client.fetch(`
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          featured,
          "author": author->name,
          "categories": categories[]->title
        }
      `)
    ])

    return {
      featured: featuredPosts,
      latest: latestPosts.filter((post: any) => !post.featured)
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return { featured: [], latest: [] }
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

export const revalidate = 0 // Disable caching for immediate updates

export default async function BlogPage() {
  const { featured, latest } = await getBlogPosts()

  return (
    <>
      {/* Blog Schema Markup */}
      <SchemaMarkup 
        type="blog" 
        data={{
          name: "SEO & Marketing Insights Blog",
          description: "Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.",
          url: "https://ayoubouraian.com/blog",
          author: ayoubPersonData,
          publisher: {
            "@type": "Organization",
            "name": "Ayoub Ouraian Digital Marketing",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ayoubouraian.com/ayoub-ouarain-logo.png"
            }
          }
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

      {/* Featured Articles */}
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
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
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
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.categories?.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
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
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          </div>
          {latest.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latest.map((post) => (
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
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.categories?.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
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
    </>
  )
}
