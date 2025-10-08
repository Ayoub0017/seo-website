import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client, urlFor } from '@/lib/sanity'
import { getBlogPostByPath, getRelatedPosts, getBlogPostPath } from '@/lib/sanity-queries'
import { PortableText } from '@portabletext/react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BlogSidebar } from '@/components/blog-sidebar'
import { SchemaMarkup, ayoubPersonData } from '@/components/schema-markup'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage?: any
  body: any[]
  publishedAt: string
  author?: {
    _id: string
    name: string
    slug: { current: string }
    image?: any
    bio?: string
    email?: string
    website?: string
    socialMedia?: {
      twitter?: string
      linkedin?: string
      github?: string
    }
  }
}

interface PageProps {
  params: {
    slug: string[]
  }
}

// Custom components for PortableText
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value || !value.asset) {
        return null;
      }
      
      try {
        const imageUrl = urlFor(value).width(800).height(400).url();
        
        return (
          <div className="my-8">
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              width={800}
              height={400}
              className="rounded-lg"
            />
            {value.caption && (
              <p className="text-sm text-muted-foreground text-center mt-2">
                {value.caption}
              </p>
            )}
          </div>
        );
      } catch (error) {
        console.error('Error generating image URL:', error);
        return null;
      }
    },
  },
  block: {
    h1: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return (
        <h1 className="text-3xl font-bold mt-8 mb-6" style={{ color: 'oklch(0.55 0.18 280)' }}>
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      const text = children.map((child: any) => 
        typeof child === 'string' ? child : child.props?.children || ''
      ).join('').trim();
      
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      return (
        <h2 id={id} className="text-2xl font-bold mt-8 mb-4" style={{ color: 'oklch(0.55 0.18 280)' }}>
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      const text = children.map((child: any) => 
        typeof child === 'string' ? child : child.props?.children || ''
      ).join('').trim();
      
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      return (
        <h3 id={id} className="text-xl font-semibold mt-6 mb-3" style={{ color: 'oklch(0.55 0.18 280)' }}>
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return (
        <h4 className="text-lg font-semibold mt-4 mb-2" style={{ color: 'oklch(0.55 0.18 280)' }}>
          {children}
        </h4>
      );
    },
    normal: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return (
        <p className="mb-4 leading-relaxed text-muted-foreground">
          {children}
        </p>
      );
    },
    blockquote: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return (
        <blockquote className="border-l-4 pl-4 my-6 italic text-muted-foreground" style={{ borderLeftColor: 'oklch(0.55 0.18 280)' }}>
          {children}
        </blockquote>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>;
    },
    number: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>;
    },
  },
  listItem: {
    bullet: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <li className="text-muted-foreground">{children}</li>;
    },
    number: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <li className="text-muted-foreground">{children}</li>;
    },
  },
  marks: {
    strong: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <strong className="font-semibold">{children}</strong>;
    },
    em: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return <em className="italic">{children}</em>;
    },
    code: ({ children }: any) => {
      if (!children || children.length === 0) return null;
      return (
        <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    },
    link: ({ children, value }: any) => {
      if (!children || children.length === 0 || !value?.href) return children;
      return (
        <Link 
          href={value.href} 
          className="hover:underline"
              style={{ color: 'oklch(0.55 0.18 280)' }}
          target={value.href.startsWith('http') ? '_blank' : undefined}
          rel={value.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      );
    },
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
  const slugParts = post.slug.current.split('/')
  
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
    title: post.title,
    href: '#'
  })
  
  return breadcrumbs
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const path = resolvedParams.slug.join('/')
  const post = await getBlogPostByPath(path)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const currentUrl = `https://ayoubouarain.com/blog/${path}`

  return {
    title: post.title, // This will be customized per article as requested
    description: post.excerpt, // This will be customized per article as requested
    robots: "index, follow",
    alternates: {
      canonical: currentUrl,
      languages: {
        "en-US": currentUrl,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

export const revalidate = 0 // Disable caching for immediate updates

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const path = resolvedParams.slug.join('/')
  const post = await getBlogPostByPath(path)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post._id)
  const breadcrumbs = generateBreadcrumbs(post)

  return (
    <>
      {/* BlogPosting Schema Markup */}
      <SchemaMarkup 
        type="blogPosting" 
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.mainImage ? urlFor(post.mainImage).url() : "https://ayoubouarain.com/placeholder.jpg",
          datePublished: post.publishedAt,
          author: post.author ? {
            name: post.author.name,
            jobTitle: "Content Author",
            description: post.author.bio || "Content author and contributor",
            url: `https://ayoubouarain.com/author/${post.author.slug?.current || ''}`,
            image: post.author.image ? urlFor(post.author.image).url() : undefined
          } : ayoubPersonData,
          publisher: ayoubPersonData,
          url: `https://ayoubouarain.com/blog/${path}`,
          mainEntityOfPage: `https://ayoubouarain.com/blog/${path}`
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
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {post.author.name}</span>
              </div>
            )}
          </div>

          {/* Featured Image - Positioned between heading and content */}
          {post.mainImage && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.title}
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
                  {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
                    <PortableText
                      value={post.body}
                      components={portableTextComponents}
                    />
                  ) : (
                    <p className="text-muted-foreground">No content available.</p>
                  )}
                </div>
              </div>

              {/* Author Bio Card - Moved below content */}
              {post.author && (
                <div className="max-w-4xl mx-auto">
                  <div className="w-full">
                    <Card className="mt-12 p-6 bg-white dark:bg-gray-900 shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg" style={{ color: 'oklch(0.55 0.18 280)' }}>About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        {post.author.image && (
                          <Image
                            src={urlFor(post.author.image).width(80).height(80).url()}
                            alt={post.author.name}
                            width={80}
                            height={80}
                            className="rounded-full flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg mb-2">{post.author.name}</h3>
                          {post.author.bio && Array.isArray(post.author.bio) && post.author.bio.length > 0 && (
                            <div className="text-muted-foreground mb-4 leading-relaxed prose prose-sm max-w-none">
                              <PortableText
                                value={post.author.bio}
                                components={portableTextComponents}
                              />
                            </div>
                          )}
                          <div className="flex gap-3">
                            {post.author.website && (
                              <Link 
                                href={post.author.website} 
                                target="_blank" 
                                className="text-sm hover:underline font-medium"
                                style={{ color: 'oklch(0.55 0.18 280)' }}
                              >
                                Website
                              </Link>
                            )}
                            {post.author.socialMedia?.twitter && (
                              <Link 
                                href={`https://twitter.com/${post.author.socialMedia.twitter}`} 
                                target="_blank" 
                                className="text-sm hover:underline font-medium"
                                style={{ color: 'oklch(0.55 0.18 280)' }}
                              >
                                Twitter
                              </Link>
                            )}
                            {post.author.socialMedia?.linkedin && (
                              <Link 
                                href={post.author.socialMedia.linkedin} 
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
                <BlogSidebar content={post.body} />
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