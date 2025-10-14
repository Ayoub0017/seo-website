import { client } from './contentful'
import { Entry } from 'contentful'

// Types for Contentful entries
export interface BlogPost {
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
    author?: Entry<any>
    category?: Entry<any>
    publishedDate: string
    tags?: string[]
    seoTitle?: string
    seoDescription?: string
  }
}

export interface Author {
  sys: {
    id: string
  }
  fields: {
    name: string
    bio?: string
    image?: any
    website?: string
    twitter?: string
    linkedin?: string
  }
}

export interface Category {
  sys: {
    id: string
  }
  fields: {
    name: string
    slug: string
    description?: string
  }
}

// Get all blog posts
export async function getBlogPosts(limit: number = 10): Promise<BlogPost[]> {
  try {
    // First check if the content type exists
    const contentTypes = await client.getContentTypes()
    const blogPostType = contentTypes.items.find(ct => ct.sys.id === 'blogPost')
    
    if (!blogPostType) {
      console.warn('Content type "blogPost" not found in Contentful space')
      return []
    }

    const response = await client.getEntries({
      content_type: 'blogPost',
      limit,
      order: '-fields.publishedDate',
      include: 2, // Include linked entries
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
      include: 2,
    })
    
    return response.items[0] as BlogPost || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(categorySlug: string, limit: number = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.category.fields.slug': categorySlug,
      limit,
      order: '-fields.publishedDate',
      include: 2,
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}

// Get related blog posts (excluding current post)
export async function getRelatedPosts(currentPostId: string, categoryId?: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const query: any = {
      content_type: 'blogPost',
      limit,
      order: '-fields.publishedDate',
      include: 2,
      'sys.id[ne]': currentPostId, // Exclude current post
    }
    
    // If category is provided, filter by category
    if (categoryId) {
      query['fields.category.sys.id'] = categoryId
    }
    
    const response = await client.getEntries(query)
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await client.getEntries({
      content_type: 'category',
      order: 'fields.name',
    })
    
    return response.items as Category[]
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Get all authors
export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await client.getEntries({
      content_type: 'author',
      order: 'fields.name',
    })
    
    return response.items as Author[]
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

// Search blog posts
export async function searchBlogPosts(query: string, limit: number = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      query,
      limit,
      order: '-fields.publishedDate',
      include: 2,
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error searching blog posts:', error)
    return []
  }
}