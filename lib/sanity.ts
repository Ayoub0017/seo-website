import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Fallback configuration for when Sanity is not properly configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Create client with conditional configuration
let client: any
let builder: any

try {
  // Only create client if we have a valid projectId
  if (projectId && projectId !== 'demo-project') {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Disabled for immediate content updates
      token: process.env.SANITY_API_TOKEN, // Add the API token for authentication
    })
    builder = imageUrlBuilder(client)
  } else {
    // Create a mock client for demo mode
    client = {
      fetch: () => Promise.resolve([]),
      config: () => ({ projectId: 'demo-project' })
    }
    builder = {
      image: () => ({ url: () => '/placeholder.jpg' })
    }
  }
} catch (error) {
  console.warn('Sanity client initialization failed, using demo mode:', error)
  // Fallback to mock client
  client = {
    fetch: () => Promise.resolve([]),
    config: () => ({ projectId: 'demo-project' })
  }
  builder = {
    image: () => ({ url: () => '/placeholder.jpg' })
  }
}

export { client }

export const urlFor = (source: any) => {
  if (!source || projectId === 'demo-project') {
    return { url: () => '/placeholder.jpg' } // Return placeholder for demo mode
  }
  return builder.image(source)
}