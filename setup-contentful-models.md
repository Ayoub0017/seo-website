# Automated Contentful Models Setup

## Quick Setup Guide

I've created an automated script that will create all the content models directly in your Contentful space!

## Prerequisites

✅ **Already installed**: `contentful-management` package

## Setup Steps

### 1. Get Your Contentful Credentials

1. Go to [Contentful Web App](https://app.contentful.com)
2. Navigate to **Settings** → **API keys**
3. Click **Add API key** or use an existing one
4. Copy your:
   - **Space ID** (from the space settings)
   - **Content Management API - access token**

### 2. Run the Script

**Option A: Set Environment Variables (Recommended)**
```bash
# Set your credentials as environment variables
$env:CONTENTFUL_MANAGEMENT_TOKEN="your_management_token_here"
$env:CONTENTFUL_SPACE_ID="your_space_id_here"

# Run the script
node create-contentful-models.js
```

**Option B: Edit the Script Directly**
1. Open `create-contentful-models.js`
2. Update the CONFIG object:
   ```javascript
   const CONFIG = {
     accessToken: 'your_management_token_here',
     spaceId: 'your_space_id_here',
     environmentId: 'master'
   };
   ```
3. Run: `node create-contentful-models.js`

## What the Script Creates

The script will automatically create these content models:

1. **Author** - Author profiles with bio, avatar, social links
2. **Category** - Blog post categories with colors and descriptions  
3. **Blog Post** - Complete blog post model with all fields

## After Running the Script

1. ✅ Content models will be created and published
2. 🎯 Go to Contentful web app → Content
3. 📝 Create your first author and category
4. ✍️ Write your first blog post
5. 🚀 Your blog will automatically display the content!

## Troubleshooting

- **401 Error**: Check your Management API token
- **404 Error**: Verify your Space ID is correct
- **Already exists**: The script will skip existing models safely

The script is safe to run multiple times - it won't overwrite existing content models.