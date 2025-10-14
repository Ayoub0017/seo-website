import { createClient } from 'contentful'

// Contentful client configuration
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
})

export { client }

// Helper function to get image URL from Contentful
export function getImageUrl(asset: any, width?: number, height?: number): string {
  if (!asset?.fields?.file?.url) {
    return '/placeholder.jpg'
  }
  
  let url = `https:${asset.fields.file.url}`
  
  // Add image transformations if width/height specified
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (width || height) params.append('fit', 'fill')
  
  if (params.toString()) {
    url += `?${params.toString()}`
  }
  
  return url
}

// Helper function to format Contentful date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}