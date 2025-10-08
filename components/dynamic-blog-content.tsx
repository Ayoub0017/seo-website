import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp, Search, FileText, Star } from "lucide-react"
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
  author?: string
  categories?: string[]
}

const fallbackPosts = {
  featured: [
    {
      _id: 'fallback-1',
      title: 'The Complete Guide to Technical SEO in 2024',
      slug: { current: 'complete-guide-technical-seo-2024' },
      excerpt: 'Master the technical aspects of SEO with our comprehensive guide covering Core Web Vitals, structured data, and more.',
      mainImage: null,
      publishedAt: '2024-01-15',
      author: 'Ayoub Ouraian',
      categories: ['SEO', 'Technical']
    },
    {
      _id: 'fallback-2',
      title: 'Advanced Content Marketing Strategies for 2024',
      slug: { current: 'advanced-content-marketing-strategies-2024' },
      excerpt: 'Discover cutting-edge content marketing techniques that drive engagement and convert visitors into loyal customers.',
      mainImage: null,
      publishedAt: '2024-01-12',
      author: 'Ayoub Ouraian',
      categories: ['Content Marketing', 'Strategy']
    }
  ],
  latest: [
    {
      _id: 'fallback-3',
      title: 'How to Optimize Your Website for Local Search',
      slug: { current: 'optimize-website-local-search' },
      excerpt: 'Learn the essential strategies for dominating local search results and attracting more customers to your business.',
      mainImage: null,
      publishedAt: '2024-01-10',
      author: 'Ayoub Ouraian',
      categories: ['SEO', 'Local']
    },
    {
      _id: 'fallback-4',
      title: 'Web Development Best Practices for SEO',
      slug: { current: 'web-development-best-practices-seo' },
      excerpt: 'Build SEO-friendly websites from the ground up with these essential web development practices and techniques.',
      mainImage: null,
      publishedAt: '2024-01-08',
      author: 'Ayoub Ouraian',
      categories: ['Web Development', 'SEO']
    },
    {
      _id: 'fallback-5',
      title: 'Measuring SEO Success: Key Metrics That Matter',
      slug: { current: 'measuring-seo-success-key-metrics' },
      excerpt: 'Track your SEO performance with the right metrics and KPIs to ensure your optimization efforts are paying off.',
      mainImage: null,
      publishedAt: '2024-01-05',
      author: 'Ayoub Ouraian',
      categories: ['SEO', 'Analytics']
    },
    {
      _id: 'fallback-6',
      title: 'The Future of Search: AI and SEO in 2024',
      slug: { current: 'future-search-ai-seo-2024' },
      excerpt: 'Explore how artificial intelligence is reshaping search and what it means for your SEO strategy going forward.',
      mainImage: null,
      publishedAt: '2024-01-03',
      author: 'Ayoub Ouraian',
      categories: ['SEO', 'AI', 'Future Trends']
    }
  ]
}

async function getBlogPosts() {
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  
  // Always return fallback data if Sanity is not configured
  if (!projectId || projectId === 'demo-project') {
    console.log('Using fallback blog posts - Sanity not configured')
    return fallbackPosts
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

    // If we get data from Sanity and it's not empty, use it
    if (featuredPosts && latestPosts && (featuredPosts.length > 0 || latestPosts.length > 0)) {
      return {
        featured: featuredPosts,
        latest: latestPosts.filter((post: any) => !post.featured)
      }
    }
    
    // Fallback if Sanity returns empty data
    console.log('Sanity returned empty data, using fallback posts')
    return fallbackPosts
    
  } catch (error) {
    console.error('Error fetching blog posts, using fallback data:', error)
    // Always return fallback data instead of empty arrays
    return fallbackPosts
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function generateBlogPath(post: BlogPost): string {
  return `/blog/${post.slug.current}`
}

export async function DynamicBlogContent() {
  const { featured, latest } = await getBlogPosts()

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