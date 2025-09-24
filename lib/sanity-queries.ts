import { groq } from 'next-sanity'
import { client } from './sanity'

// Get all blog posts
export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    author->{
      _id,
      name,
      slug,
      image
    },
    "categories": categories[]->title
  }
`

// Get a single blog post with full content
export const blogPostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    featured,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    author->{
      _id,
      name,
      slug,
      image,
      bio,
      email,
      website,
      socialMedia
    },
    "categories": categories[]->title
  }
`

// Function to get blog post by path (slug)
export async function getBlogPostByPath(path: string) {
  const query = groq`
    *[_type == "post" && slug.current == $path][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      featured,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      author->{
        _id,
        name,
        slug,
        image,
        bio,
        email,
        website,
        socialMedia
      },
      "categories": categories[]->title
    }
  `
  return await client.fetch(query, { path })
}

// Function to get related posts
export async function getRelatedPosts(postId: string, limit: number = 3) {
  return await client.fetch(
    `*[_type == "post" && _id != $postId] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      featured,
      author->{
        _id,
        name,
        slug,
        image
      },
      "categories": categories[]->title
    }`,
    { postId, limit }
  )
}

// Function to get blog post path (for URL generation)
export function getBlogPostPath(post: { slug: { current: string } }) {
  return `/blog/${post.slug.current}`
}