import { createClient } from 'contentful'

// Contentful client configuration with proper error handling
const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master'

// Create client only if required environment variables are present
let client: any = null

if (spaceId && accessToken) {
  client = createClient({
    space: spaceId,
    accessToken: accessToken,
    environment: environment,
  })
} else {
  // Create a mock client for build time when env vars are missing
  client = {
    getEntries: () => Promise.resolve({ items: [] }),
    getEntry: () => Promise.resolve(null),
    getAsset: () => Promise.resolve(null),
  }
}

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