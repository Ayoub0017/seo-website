const contentful = require('contentful')

const client = contentful.createClient({
  space: '1oyq05q9rdk1',
  accessToken: '6XBVF5k6NuDsDSfJSaToGtrYhLKH_QjSn6En4ldkL9U',
  environment: 'master'
})

async function listContentTypes() {
  try {
    console.log('Fetching content types...')
    const contentTypes = await client.getContentTypes()
    
    console.log('\n=== Available Content Types ===')
    contentTypes.items.forEach(contentType => {
      console.log(`- ID: "${contentType.sys.id}"`)
      console.log(`  Name: "${contentType.name}"`)
      console.log(`  Description: "${contentType.description || 'No description'}"`)
      console.log('  Fields:')
      contentType.fields.forEach(field => {
        console.log(`    - ${field.id} (${field.type})`)
      })
      console.log('')
    })
    
    console.log('=== Sample Entries ===')
    const entries = await client.getEntries({ limit: 5 })
    entries.items.forEach(entry => {
      console.log(`- Entry ID: ${entry.sys.id}`)
      console.log(`  Content Type: ${entry.sys.contentType.sys.id}`)
      console.log(`  Fields: ${Object.keys(entry.fields).join(', ')}`)
      console.log('')
    })
    
  } catch (error) {
    console.error('Error:', error.message)
  }
}

listContentTypes()