const contentful = require('contentful')

const client = contentful.createClient({
  space: '1oyq05q9rdk1',
  accessToken: '6XBVF5k6NuDsDSfJSaToGtrYhLKH_QjSn6En4ldkL9U',
  environment: 'master'
})

async function debugBlogPosts() {
  try {
    console.log('Fetching all blog posts...')
    const response = await client.getEntries({
      content_type: 'blogPost',
      include: 2
    })
    
    console.log(`\n=== Found ${response.items.length} blog posts ===`)
    
    response.items.forEach((post, index) => {
      console.log(`\n${index + 1}. ${post.fields.title}`)
      console.log(`   ID: ${post.sys.id}`)
      console.log(`   Slug: ${post.fields.slug}`)
      console.log(`   Status: ${post.fields.status || 'No status field'}`)
      console.log(`   Published Date: ${post.fields.publishedDate || 'No date'}`)
      console.log(`   Has Content: ${post.fields.content ? 'Yes' : 'No'}`)
      console.log(`   Has Author: ${post.fields.author ? 'Yes' : 'No'}`)
      console.log(`   Has Category: ${post.fields.category ? 'Yes' : 'No'}`)
      
      // Check all available fields
      console.log(`   All Fields: ${Object.keys(post.fields).join(', ')}`)
    })
    
    // Test with status filter
    console.log('\n=== Testing with status filter ===')
    const publishedResponse = await client.getEntries({
      content_type: 'blogPost',
      'fields.status': 'published',
      include: 2
    })
    
    console.log(`Found ${publishedResponse.items.length} published posts`)
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

debugBlogPosts()