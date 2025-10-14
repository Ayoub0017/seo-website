#!/usr/bin/env node

/**
 * Contentful Content Models Creation Script
 * 
 * This script automatically creates the Author, Category, and Blog Post content models
 * in your Contentful space using the Management API.
 * 
 * Prerequisites:
 * 1. Install contentful-management: npm install contentful-management
 * 2. Get your Management API token from Contentful Settings > API keys
 * 3. Set your environment variables or update the config below
 */

const contentful = require('contentful-management');

// Configuration - Update these with your Contentful details
const CONFIG = {
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || 'YOUR_MANAGEMENT_TOKEN_HERE',
  spaceId: process.env.CONTENTFUL_SPACE_ID || 'YOUR_SPACE_ID_HERE',
  environmentId: process.env.CONTENTFUL_ENVIRONMENT || 'master'
};

// Content Model Definitions
const CONTENT_MODELS = {
  author: {
    name: 'Author',
    description: 'Author profiles for blog posts',
    displayField: 'name',
    fields: [
      {
        id: 'name',
        name: 'Name',
        type: 'Symbol',
        required: true,
        validations: [{ size: { max: 100 } }]
      },
      {
        id: 'bio',
        name: 'Bio',
        type: 'Text',
        required: false,
        validations: [{ size: { max: 500 } }]
      },
      {
        id: 'avatar',
        name: 'Avatar',
        type: 'Link',
        linkType: 'Asset',
        required: false
      },
      {
        id: 'email',
        name: 'Email',
        type: 'Symbol',
        required: false,
        validations: [
          { regexp: { pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' } }
        ]
      },
      {
        id: 'website',
        name: 'Website',
        type: 'Symbol',
        required: false,
        validations: [
          { regexp: { pattern: '^https?:\\/\\/.+' } }
        ]
      },
      {
        id: 'twitter',
        name: 'Twitter',
        type: 'Symbol',
        required: false,
        validations: [{ size: { max: 50 } }]
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        type: 'Symbol',
        required: false,
        validations: [
          { regexp: { pattern: '^https?:\\/\\/.+' } }
        ]
      }
    ]
  },

  category: {
    name: 'Category',
    description: 'Blog post categories',
    displayField: 'name',
    fields: [
      {
        id: 'name',
        name: 'Name',
        type: 'Symbol',
        required: true,
        validations: [{ size: { max: 50 } }]
      },
      {
        id: 'slug',
        name: 'Slug',
        type: 'Symbol',
        required: true,
        validations: [
          { unique: true },
          { regexp: { pattern: '^[a-z0-9-]+$' } }
        ]
      },
      {
        id: 'description',
        name: 'Description',
        type: 'Text',
        required: false,
        validations: [{ size: { max: 200 } }]
      },
      {
        id: 'color',
        name: 'Color',
        type: 'Symbol',
        required: false,
        validations: [
          { regexp: { pattern: '^#[0-9A-Fa-f]{6}$' } }
        ]
      }
    ]
  },

  blogPost: {
    name: 'Blog Post',
    description: 'Blog articles and posts',
    displayField: 'title',
    fields: [
      {
        id: 'title',
        name: 'Title',
        type: 'Symbol',
        required: true,
        validations: [{ size: { max: 100 } }]
      },
      {
        id: 'slug',
        name: 'Slug',
        type: 'Symbol',
        required: true,
        validations: [
          { unique: true },
          { regexp: { pattern: '^[a-z0-9-]+$' } }
        ]
      },
      {
        id: 'excerpt',
        name: 'Excerpt',
        type: 'Text',
        required: true,
        validations: [{ size: { max: 300 } }]
      },
      {
        id: 'content',
        name: 'Content',
        type: 'RichText',
        required: true
      },
      {
        id: 'featuredImage',
        name: 'Featured Image',
        type: 'Link',
        linkType: 'Asset',
        required: false
      },
      {
        id: 'author',
        name: 'Author',
        type: 'Link',
        linkType: 'Entry',
        required: true,
        validations: [
          { linkContentType: ['author'] }
        ]
      },
      {
        id: 'category',
        name: 'Category',
        type: 'Link',
        linkType: 'Entry',
        required: false,
        validations: [
          { linkContentType: ['category'] }
        ]
      },
      {
        id: 'tags',
        name: 'Tags',
        type: 'Array',
        items: {
          type: 'Symbol',
          validations: [{ size: { max: 30 } }]
        },
        required: false
      },
      {
        id: 'publishedDate',
        name: 'Published Date',
        type: 'Date',
        required: true
      },
      {
        id: 'updatedDate',
        name: 'Updated Date',
        type: 'Date',
        required: false
      },
      {
        id: 'seoTitle',
        name: 'SEO Title',
        type: 'Symbol',
        required: false,
        validations: [{ size: { max: 60 } }]
      },
      {
        id: 'seoDescription',
        name: 'SEO Description',
        type: 'Text',
        required: false,
        validations: [{ size: { max: 160 } }]
      },
      {
        id: 'readingTime',
        name: 'Reading Time',
        type: 'Integer',
        required: false
      },
      {
        id: 'featured',
        name: 'Featured',
        type: 'Boolean',
        required: false
      },
      {
        id: 'status',
        name: 'Status',
        type: 'Symbol',
        required: true,
        validations: [
          { in: ['draft', 'published', 'archived'] }
        ]
      }
    ]
  }
};

async function createContentModels() {
  try {
    console.log('🚀 Starting Contentful content models creation...\n');

    // Validate configuration
    if (CONFIG.accessToken === 'YOUR_MANAGEMENT_TOKEN_HERE' || CONFIG.spaceId === 'YOUR_SPACE_ID_HERE') {
      console.error('❌ Please update the CONFIG object with your Contentful credentials');
      console.log('\nYou need to:');
      console.log('1. Get your Management API token from Contentful Settings > API keys');
      console.log('2. Update CONFIG.accessToken and CONFIG.spaceId in this script');
      console.log('3. Or set environment variables: CONTENTFUL_MANAGEMENT_TOKEN and CONTENTFUL_SPACE_ID');
      process.exit(1);
    }

    // Initialize Contentful Management client
    const client = contentful.createClient({
      accessToken: CONFIG.accessToken
    });

    // Get space and environment
    const space = await client.getSpace(CONFIG.spaceId);
    const environment = await space.getEnvironment(CONFIG.environmentId);

    console.log(`✅ Connected to space: ${space.name}`);
    console.log(`✅ Using environment: ${CONFIG.environmentId}\n`);

    // Create content models in order (dependencies first)
    const creationOrder = ['author', 'category', 'blogPost'];

    for (const modelId of creationOrder) {
      const modelConfig = CONTENT_MODELS[modelId];
      
      try {
        console.log(`📝 Creating content model: ${modelConfig.name}...`);

        // Check if content type already exists
        try {
          const existingContentType = await environment.getContentType(modelId);
          console.log(`⚠️  Content type "${modelConfig.name}" already exists. Skipping...`);
          continue;
        } catch (error) {
          // Content type doesn't exist, proceed with creation
        }

        // Create content type
        const contentType = await environment.createContentTypeWithId(modelId, {
          name: modelConfig.name,
          description: modelConfig.description,
          displayField: modelConfig.displayField,
          fields: modelConfig.fields
        });

        // Publish content type
        await contentType.publish();
        
        console.log(`✅ Created and published: ${modelConfig.name}`);
        
      } catch (error) {
        console.error(`❌ Error creating ${modelConfig.name}:`, error.message);
      }
    }

    console.log('\n🎉 Content models creation completed!');
    console.log('\nNext steps:');
    console.log('1. Go to your Contentful web app');
    console.log('2. Create some authors and categories');
    console.log('3. Create your first blog post');
    console.log('4. Your blog will automatically display the content!');

  } catch (error) {
    console.error('❌ Failed to create content models:', error.message);
    
    if (error.message.includes('401')) {
      console.log('\n💡 This looks like an authentication error. Please check:');
      console.log('- Your Management API token is correct');
      console.log('- The token has the right permissions');
    }
    
    if (error.message.includes('404')) {
      console.log('\n💡 This looks like a space not found error. Please check:');
      console.log('- Your space ID is correct');
      console.log('- You have access to this space');
    }
  }
}

// Run the script
if (require.main === module) {
  createContentModels();
}

module.exports = { createContentModels, CONTENT_MODELS };