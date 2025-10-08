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
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId || projectId === 'demo-project') {
    // Return mock data for demo mode
    const mockPosts: { [key: string]: any } = {
      'complete-guide-technical-seo-2024': {
        _id: '1',
        title: 'The Complete Guide to Technical SEO in 2024',
        slug: { current: 'complete-guide-technical-seo-2024' },
        excerpt: 'Master the technical aspects of SEO with our comprehensive guide covering Core Web Vitals, structured data, and more.',
        mainImage: null,
        publishedAt: '2024-01-15',
        featured: true,
        body: [
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'Technical SEO is the foundation of any successful search engine optimization strategy. In this comprehensive guide, we\'ll explore the essential technical elements that can make or break your website\'s search performance.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h2',
             children: [
               {
                 _type: 'span',
                 text: 'Core Web Vitals and Page Speed'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'Core Web Vitals are a set of real-world, user-centered metrics that quantify key aspects of user experience. They measure loading performance, interactivity, and visual stability of your web pages.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h3',
             children: [
               {
                 _type: 'span',
                 text: 'Largest Contentful Paint (LCP)'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h3',
             children: [
               {
                 _type: 'span',
                 text: 'First Input Delay (FID)'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'FID measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h2',
             children: [
               {
                 _type: 'span',
                 text: 'Structured Data and Schema Markup'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'Structured data helps search engines understand your content better and can lead to rich snippets in search results.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h3',
             children: [
               {
                 _type: 'span',
                 text: 'JSON-LD Implementation'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'JSON-LD is the recommended format for structured data. It\'s easier to implement and maintain compared to microdata or RDFa.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h2',
             children: [
               {
                 _type: 'span',
                 text: 'Mobile-First Indexing'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'Google predominantly uses the mobile version of the content for indexing and ranking. Ensure your mobile site contains the same content as your desktop site.'
               }
             ]
           },
           {
             _type: 'block',
             style: 'h3',
             children: [
               {
                 _type: 'span',
                 text: 'Responsive Design Best Practices'
               }
             ]
           },
           {
             _type: 'block',
             style: 'normal',
             children: [
               {
                 _type: 'span',
                 text: 'Use responsive design to ensure your site works well on all devices. Test your site on various screen sizes and orientations.'
               }
             ]
           }
         ],
        author: {
          _id: 'author1',
          name: 'SEO Expert',
          slug: { current: 'seo-expert' },
          image: null,
          bio: 'Professional SEO consultant with 10+ years of experience',
          email: 'expert@example.com',
          website: 'https://example.com',
          socialMedia: {
            twitter: '@seoexpert',
            linkedin: 'seoexpert'
          }
        },
        categories: ['SEO', 'Technical']
      },
      'optimize-website-local-search': {
        _id: '2',
        title: 'How to Optimize Your Website for Local Search',
        slug: { current: 'optimize-website-local-search' },
        excerpt: 'Learn the essential strategies for dominating local search results and attracting more customers to your business.',
        mainImage: null,
        publishedAt: '2024-01-10',
        featured: false,
        body: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Local search optimization is crucial for businesses that serve customers in specific geographic areas. This guide will help you dominate local search results and attract more customers to your business.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Google My Business Optimization'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Your Google My Business profile is the cornerstone of local SEO. It\'s often the first thing potential customers see when searching for your business or services.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Complete Your Profile'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Fill out every section of your Google My Business profile. Include accurate business hours, contact information, and high-quality photos.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Manage Reviews'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Actively encourage satisfied customers to leave reviews and respond professionally to all reviews, both positive and negative.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Local Keyword Research'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Local keyword research involves finding keywords that include location-specific terms and have local search intent.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Location-Based Keywords'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Target keywords that include your city, neighborhood, or region. For example, "plumber in Chicago" or "best pizza near me".'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Local Citations and NAP Consistency'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'NAP (Name, Address, Phone) consistency across all online directories and citations is crucial for local SEO success.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Directory Submissions'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Submit your business to relevant local directories and industry-specific platforms to build authority and improve local rankings.'
              }
            ]
          }
        ],
        author: {
          _id: 'author2',
          name: 'Local SEO Expert',
          slug: { current: 'local-seo-expert' },
          image: null,
          bio: 'Specialist in local search optimization',
          email: 'local@example.com'
        },
        categories: ['SEO', 'Local']
      },
      'content-marketing-strategies-work': {
        _id: '3',
        title: 'Content Marketing Strategies That Actually Work',
        slug: { current: 'content-marketing-strategies-work' },
        excerpt: 'Discover proven content marketing tactics that drive engagement, build authority, and convert visitors into customers.',
        mainImage: null,
        publishedAt: '2024-01-05',
        featured: false,
        body: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Content marketing and SEO go hand in hand. Creating high-quality, optimized content is essential for attracting organic traffic and establishing your brand as an authority in your industry.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Content Strategy Development'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'A well-planned content strategy aligns your content creation efforts with your business goals and target audience needs.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Audience Research'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Understanding your target audience is crucial for creating content that resonates. Use surveys, analytics, and social listening to gather insights.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Content Pillars'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Establish 3-5 content pillars that represent the main topics your brand will cover. This ensures consistency and helps build topical authority.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'On-Page SEO for Content'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Optimizing your content for search engines involves more than just including keywords. It\'s about creating valuable, well-structured content.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Title Tag Optimization'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Craft compelling title tags that include your target keyword and accurately describe the content. Keep them under 60 characters.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Header Structure'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Use a logical header structure (H1, H2, H3) to organize your content and help search engines understand the hierarchy of information.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h2',
            children: [
              {
                _type: 'span',
                text: 'Content Distribution and Promotion'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Creating great content is only half the battle. You need to actively promote and distribute your content to reach your target audience.'
              }
            ]
          },
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                text: 'Social Media Promotion'
              }
            ]
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Share your content across relevant social media platforms, adapting the format and messaging for each platform\'s unique audience.'
              }
            ]
          }
        ],
        author: {
          _id: 'author3',
          name: 'Content Strategist',
          slug: { current: 'content-strategist' },
          image: null,
          bio: 'Expert in content strategy and marketing',
          email: 'content@example.com'
        },
        categories: ['Content Marketing', 'Strategy']
      }
    }
    
    return mockPosts[path] || null
  }

  try {
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
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
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

// Function to get all blog posts for the blog page
export async function getBlogPosts() {
  // Check if Sanity is properly configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  
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

  // Return fallback data if Sanity is not configured
  if (!projectId || projectId === 'demo-project') {
    console.log('Using fallback blog posts - Sanity not configured')
    return fallbackPosts
  }

  try {
    console.log('Fetching blog posts from Sanity...')
    
    const [featuredPosts, latestPosts] = await Promise.all([
      // Fetch featured posts
      client.fetch(`
        *[_type == "post" && featured == true] | order(publishedAt desc)[0...2] {
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
        *[_type == "post" && featured != true] | order(publishedAt desc)[0...6] {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          publishedAt,
          "author": author->name,
          "categories": categories[]->title
        }
      `)
    ])

    console.log(`Fetched ${featuredPosts.length} featured posts and ${latestPosts.length} latest posts`)

    // If no posts are fetched, return the fallback data
    if (featuredPosts.length === 0 && latestPosts.length === 0) {
      console.log('No posts found in Sanity, using fallback data.')
      return fallbackPosts
    }

    return {
      featured: featuredPosts.length > 0 ? featuredPosts : fallbackPosts.featured,
      latest: latestPosts.length > 0 ? latestPosts : fallbackPosts.latest
    }
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error)
    
    // Return fallback data on error
    return fallbackPosts
  }
}