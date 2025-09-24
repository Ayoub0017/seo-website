import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false, // Disabled for immediate content updates
  token: process.env.SANITY_API_TOKEN, // Add the API token for authentication
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)