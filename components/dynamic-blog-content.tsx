import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp, Search, FileText, Star } from "lucide-react"
import { getBlogPosts } from "@/lib/contentful-queries"
import { getImageUrl, formatDate } from "@/lib/contentful"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    excerpt?: string
    featuredImage?: any
    publishedDate: string
    author?: {
      fields: {
        name: string
      }
    }
    category?: {
      fields: {
        name: string
      }
    }
    tags?: string[]
  }
}

const fallbackPosts = {
  featured: [
    {
      sys: { id: 'fallback-1' },
      fields: {
        title: 'The Complete Guide to Technical SEO in 2024',
        slug: 'complete-guide-technical-seo-2024',
        excerpt: 'Master the technical aspects of SEO with our comprehensive guide covering Core Web Vitals, structured data, and more.',
        featuredImage: null,
        publishedDate: '2024-01-15',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'SEO' } },
        tags: ['SEO', 'Technical']
      }
    },
    {
      sys: { id: 'fallback-2' },
      fields: {
        title: 'Advanced Content Marketing Strategies for 2024',
        slug: 'advanced-content-marketing-strategies-2024',
        excerpt: 'Discover cutting-edge content marketing techniques that drive engagement and convert visitors into loyal customers.',
        featuredImage: null,
        publishedDate: '2024-01-12',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'Content Marketing' } },
        tags: ['Content Marketing', 'Strategy']
      }
    }
  ],
  latest: [
    {
      sys: { id: 'fallback-3' },
      fields: {
        title: 'How to Optimize Your Website for Local Search',
        slug: 'optimize-website-local-search',
        excerpt: 'Learn the essential strategies for dominating local search results and attracting more customers to your business.',
        featuredImage: null,
        publishedDate: '2024-01-10',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'SEO' } },
        tags: ['SEO', 'Local']
      }
    },
    {
      sys: { id: 'fallback-4' },
      fields: {
        title: 'Web Development Best Practices for SEO',
        slug: 'web-development-best-practices-seo',
        excerpt: 'Build SEO-friendly websites from the ground up with these essential web development practices and techniques.',
        featuredImage: null,
        publishedDate: '2024-01-08',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'Web Development' } },
        tags: ['Web Development', 'SEO']
      }
    },
    {
      sys: { id: 'fallback-5' },
      fields: {
        title: 'Measuring SEO Success: Key Metrics That Matter',
        slug: 'measuring-seo-success-key-metrics',
        excerpt: 'Track your SEO performance with the right metrics and KPIs to ensure your optimization efforts are paying off.',
        featuredImage: null,
        publishedDate: '2024-01-05',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'SEO' } },
        tags: ['SEO', 'Analytics']
      }
    },
    {
      sys: { id: 'fallback-6' },
      fields: {
        title: 'The Future of Search: AI and SEO in 2024',
        slug: 'future-search-ai-seo-2024',
        excerpt: 'Explore how artificial intelligence is reshaping search and what it means for your SEO strategy going forward.',
        featuredImage: null,
        publishedDate: '2024-01-03',
        author: { fields: { name: 'Ayoub Ouraian' } },
        category: { fields: { name: 'SEO' } },
        tags: ['SEO', 'AI', 'Future Trends']
      }
    }
  ]
}

async function getBlogPostsData() {
  try {
    // Fetch blog posts from Contentful
    const posts = await getBlogPosts()
    
    if (posts && posts.length > 0) {
      // Split posts into featured and latest
      const featured = posts.slice(0, 3)
      const latest = posts.slice(3, 12)
      
      return {
        featured: featured.length > 0 ? featured : fallbackPosts.featured,
        latest: latest.length > 0 ? latest : fallbackPosts.latest
      }
    }
    
    // Return fallback data if no posts found
    console.log('No posts found in Contentful, using fallback data')
    return fallbackPosts
    
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error)
    // Return fallback data on error
    return fallbackPosts
  }
}

function generateBlogPath(post: BlogPost): string {
  return `/blog/${post.fields.slug}`
}

export async function DynamicBlogContent() {
  const { featured, latest } = await getBlogPostsData()

  return (
    <>
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
                  key={post.sys.id}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  {post.fields.featuredImage && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={getImageUrl(post.fields.featuredImage, 600, 300)}
                        alt={post.fields.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.fields.publishedDate)}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.fields.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.fields.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.fields.tags?.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={generateBlogPath(post)}>
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((post) => (
              <Card
                key={post.sys.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                {post.fields.featuredImage && (
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={getImageUrl(post.fields.featuredImage, 600, 300)}
                      alt={post.fields.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.fields.publishedDate)}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.fields.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.fields.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.fields.tags?.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={generateBlogPath(post)}>
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
    </>
  )
}