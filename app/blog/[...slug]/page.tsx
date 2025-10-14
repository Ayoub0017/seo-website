import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client, getImageUrl, formatDate as contentfulFormatDate } from '@/lib/contentful'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/contentful-queries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogSidebar } from '@/components/blog-sidebar'
import { SchemaMarkup, ayoubPersonData } from '@/components/schema-markup'

interface BlogPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    excerpt?: string
    content: any // Rich text content
    featuredImage?: any
    author?: {
      fields: {
        name: string
        bio?: string
        image?: any
        website?: string
        twitter?: string
        linkedin?: string
      }
    }
    category?: {
      fields: {
        name: string
        slug: string
      }
    }
    publishedDate: string
    tags?: string[]
    seoTitle?: string
    seoDescription?: string
  }
}

interface PageProps {
  params: {
    slug: string[]
  }
}

// Custom components for Contentful Rich Text
const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields
      if (file.contentType.startsWith('image/')) {
        return (
          <div className="my-8">
            <Image
              src={`https:${file.url}`}
              alt={title || 'Blog image'}
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            {title && (
              <p className="text-center text-sm text-muted-foreground mt-2 italic">
                {title}
              </p>
            )}
          </div>
        )
      }
      return null
    },
    [BLOCKS.HEADING_1]: (node: any, children: any) => {
      const text = children[0]?.props?.children || ''
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      return (
        <h1 id={id} className="text-4xl font-bold text-foreground mb-6 mt-12 scroll-mt-24">
          {children}
        </h1>
      )
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      const text = children[0]?.props?.children || ''
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      return (
        <h2 id={id} className="text-3xl font-bold text-foreground mb-4 mt-10 scroll-mt-24">
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      const text = children[0]?.props?.children || ''
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      return (
        <h3 id={id} className="text-2xl font-semibold text-foreground mb-3 mt-8 scroll-mt-24">
          {children}
        </h3>
      )
    },
    [BLOCKS.HEADING_4]: (node: any, children: any) => {
      return (
        <h4 className="text-xl font-semibold text-foreground mb-2 mt-6">
          {children}
        </h4>
      )
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return (
        <p className="text-muted-foreground leading-relaxed mb-4">
          {children}
        </p>
      )
    },
    [BLOCKS.QUOTE]: (node: any, children: any) => {
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 bg-muted/50 rounded-r-lg italic text-foreground">
          {children}
        </blockquote>
      )
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      return <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      return <li className="text-muted-foreground">{children}</li>
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-semibold text-foreground">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: any) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
        {text}
      </code>
    ),
  },
  renderText: (text: string) => {
    return text.split('\n').reduce((children: any[], textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function generateBreadcrumbs(post: BlogPost): Array<{ title: string; href: string }> {
  const breadcrumbs = [{ title: 'Blog', href: '/blog' }]
  
  // Handle parent/child slug structure
  const slugParts = post.fields.slug.split('/')
  
  if (slugParts.length > 1) {
    // Add parent article breadcrumb (not category)
    const parentSlug = slugParts[0]
    const parentTitle = parentSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      title: parentTitle,
      href: `/blog/${parentSlug}`
    })
  }
  
  // Add current post
  breadcrumbs.push({
    title: post.fields.title,
    href: '#'
  })
  
  return breadcrumbs
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const currentUrl = `https://ayoubouarain.com/blog/${slug}`

  return {
    title: post.fields.seoTitle || post.fields.title,
    description: post.fields.seoDescription || post.fields.excerpt,
    robots: "index, follow",
    alternates: {
      canonical: currentUrl,
      languages: {
        "en-US": currentUrl,
      },
    },
    openGraph: {
      title: post.fields.seoTitle || post.fields.title,
      description: post.fields.seoDescription || post.fields.excerpt,
      images: post.fields.featuredImage ? [getImageUrl(post.fields.featuredImage, 1200, 630)] : [],
    },
  }
}

export const revalidate = 0 // Disable caching for immediate updates

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug.join('/')
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.sys.id)
  const breadcrumbs = generateBreadcrumbs(post)

  return (
    <>
      {/* BlogPosting Schema Markup */}
      <SchemaMarkup 
        type="blogPosting" 
        data={{
          headline: post.fields.title,
          description: post.fields.excerpt,
          image: post.fields.featuredImage ? getImageUrl(post.fields.featuredImage) : "https://ayoubouarain.com/placeholder.jpg",
          datePublished: post.fields.publishedDate,
          author: post.fields.author ? {
            name: post.fields.author.fields.name,
            jobTitle: "Content Author",
            description: post.fields.author.fields.bio || "Content author and contributor",
            url: `https://ayoubouarain.com/author/${post.fields.author.fields.name.toLowerCase().replace(/\s+/g, '-')}`,
            image: post.fields.author.fields.image ? getImageUrl(post.fields.author.fields.image) : undefined
          } : ayoubPersonData,
          publisher: ayoubPersonData,
          url: `https://ayoubouarain.com/blog/${slug}`,
          mainEntityOfPage: `https://ayoubouarain.com/blog/${slug}`
        }} 
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          {/* Modern Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <svg 
                      className="mx-3 h-3 w-3 text-gray-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="px-3 py-1 rounded-full font-medium text-xs" style={{ backgroundColor: 'oklch(0.55 0.18 280 / 0.1)', color: 'oklch(0.55 0.18 280)' }}>
                      {crumb.title}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-xs">
                      {crumb.title}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Title with Purple Color */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-center" style={{ color: 'oklch(0.55 0.18 280)' }}>
            {post.fields.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.fields.publishedDate)}</span>
            </div>
            {post.fields.author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {post.fields.author.fields.name}</span>
              </div>
            )}
          </div>

          {/* Featured Image - Positioned between heading and content */}
          {post.fields.featuredImage && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={getImageUrl(post.fields.featuredImage, 1200, 600)}
                alt={post.fields.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content - Centered under header */}
            <div className="flex-1">
              <div className="max-w-4xl mx-auto">
                <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {post.fields.content ? (
                    documentToReactComponents(post.fields.content, richTextOptions)
                  ) : (
                    <p className="text-muted-foreground">No content available.</p>
                  )}
                </div>
              </div>

              {/* Author Bio Card - Moved below content */}
              {post.fields.author && (
                <div className="max-w-4xl mx-auto">
                  <div className="w-full">
                    <Card className="mt-12 p-6 bg-white dark:bg-gray-900 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg" style={{ color: 'oklch(0.55 0.18 280)' }}>About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        {post.fields.author.fields.image && (
                          <Image
                            src={getImageUrl(post.fields.author.fields.image, 80, 80)}
                            alt={post.fields.author.fields.name}
                            width={80}
                            height={80}
                            className="rounded-full flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg mb-2">{post.fields.author.fields.name}</h3>
                          {post.fields.author.fields.bio && (
                            <div className="text-muted-foreground mb-4 leading-relaxed">
                              <p>{post.fields.author.fields.bio}</p>
                            </div>
                          )}
                          <div className="flex gap-3">
                            {post.fields.author.fields.website && (
                              <Link 
                                href={post.fields.author.fields.website} 
                                target="_blank" 
                                className="text-sm hover:underline font-medium"
                                style={{ color: 'oklch(0.55 0.18 280)' }}
                              >
                                Website
                              </Link>
                            )}
                            {post.fields.author.fields.twitter && (
                              <Link 
                                href={`https://twitter.com/${post.fields.author.fields.twitter}`} 
                                target="_blank" 
                                className="text-sm hover:underline font-medium"
                                style={{ color: 'oklch(0.55 0.18 280)' }}
                              >
                                Twitter
                              </Link>
                            )}
                            {post.fields.author.fields.linkedin && (
                              <Link 
                                href={post.fields.author.fields.linkedin} 
                                target="_blank" 
                                className="text-sm hover:underline font-medium"
                                style={{ color: 'oklch(0.55 0.18 280)' }}
                              >
                                LinkedIn
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </div>
              )}


              </div>
            </div>

            {/* Sidebar - Right Side - Fixed Position */}
            <div className="lg:w-80 lg:flex-shrink-0 hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <BlogSidebar content={post.fields.content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}