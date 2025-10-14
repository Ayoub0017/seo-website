import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SchemaMarkup } from '@/components/schema-markup'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/contentful-queries'
import { formatDate } from '@/lib/contentful'
import { ayoubPersonData } from '@/components/schema-markup'
import { getImageUrl } from '@/lib/contentful'

// Use ISR (Incremental Static Regeneration) to fetch fresh content
export const revalidate = 3600 // Revalidate every hour

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

export default async function BlogPage() {
  // Fetch blog posts from Contentful
  const posts = await getBlogPosts(6)
  
  return (
    <>
      <SchemaMarkup type="person" data={ayoubPersonData} />
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SEO & Marketing
              <span className="block">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with actionable SEO strategies, content marketing tips, and web development insights that drive real business results.
            </p>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {posts.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover actionable insights and strategies to grow your business online.
                </p>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post) => (
                  <Card key={post.sys.id} className="h-full hover:shadow-lg transition-shadow">
                    {post.fields.featuredImage && (
                      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={getImageUrl(post.fields.featuredImage, 400, 200)}
                          alt={post.fields.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      {post.fields.category && (
                        <Badge variant="secondary" className="w-fit mb-2">
                          {post.fields.category.fields?.name || 'Article'}
                        </Badge>
                      )}
                      <CardTitle className="text-xl line-clamp-2">
                        <Link href={`/blog/${post.fields.slug}`} className="hover:text-primary transition-colors">
                          {post.fields.title}
                        </Link>
                      </CardTitle>
                      {post.fields.excerpt && (
                        <CardDescription className="line-clamp-3">
                          {post.fields.excerpt}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{formatDate(post.fields.publishedDate)}</span>
                        <Link 
                          href={`/blog/${post.fields.slug}`}
                          className="text-primary hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Fallback Content when no posts are available */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Blog Coming Soon</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're preparing valuable content about SEO strategies, content marketing tips, and web development insights.
                  Check back soon for our latest articles and insights.
                </p>
              </div>

              {/* Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">SEO Strategy</Badge>
                    <CardTitle className="text-xl">Advanced SEO Techniques</CardTitle>
                    <CardDescription>
                      Learn cutting-edge SEO strategies that drive organic traffic and improve search rankings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Content Marketing</Badge>
                    <CardTitle className="text-xl">Content That Converts</CardTitle>
                    <CardDescription>
                      Discover how to create compelling content that engages your audience and drives conversions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Web Development</Badge>
                    <CardTitle className="text-xl">Performance Optimization</CardTitle>
                    <CardDescription>
                      Learn how to optimize your website for speed, performance, and better user experience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Newsletter Section */}
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest SEO strategies, marketing tips, and web development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
