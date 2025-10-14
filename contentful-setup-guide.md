# Contentful Setup Guide

## Current Status
✅ **Contentful Connection**: Successfully connected to your Contentful space
✅ **Access Token**: Valid Content Delivery API token configured
❌ **Content Types**: Missing required content types in your Contentful space

## Required Content Types

Your blog application expects the following content types to be created in Contentful:

### 1. Blog Post (`blogPost`)
**Content Type ID**: `blogPost`

**Fields**:
- `title` (Short text) - Required
- `slug` (Short text) - Required, Unique
- `excerpt` (Long text) - Optional
- `content` (Rich text) - Required
- `featuredImage` (Media) - Optional
- `author` (Reference to Author) - Optional
- `category` (Reference to Category) - Optional
- `publishedDate` (Date & time) - Required
- `tags` (Short text, List) - Optional
- `seoTitle` (Short text) - Optional
- `seoDescription` (Long text) - Optional

### 2. Author (`author`)
**Content Type ID**: `author`

**Fields**:
- `name` (Short text) - Required
- `bio` (Long text) - Optional
- `image` (Media) - Optional
- `website` (Short text) - Optional
- `twitter` (Short text) - Optional
- `linkedin` (Short text) - Optional

### 3. Category (`category`)
**Content Type ID**: `category`

**Fields**:
- `name` (Short text) - Required
- `slug` (Short text) - Required, Unique
- `description` (Long text) - Optional

## How to Create Content Types in Contentful

1. **Go to your Contentful dashboard**: https://app.contentful.com/spaces/1oyq05q9rdk1
2. **Navigate to Content model** in the left sidebar
3. **Click "Add content type"**
4. **Create each content type** with the fields listed above

### Step-by-Step for Blog Post Content Type:

1. Click "Add content type"
2. Set **Name**: "Blog Post"
3. Set **API Identifier**: "blogPost" (important!)
4. Add fields one by one:
   - Click "Add field" → "Short text" → Name: "Title", Field ID: "title" → Make required
   - Click "Add field" → "Short text" → Name: "Slug", Field ID: "slug" → Make required and unique
   - Click "Add field" → "Long text" → Name: "Excerpt", Field ID: "excerpt"
   - Click "Add field" → "Rich text" → Name: "Content", Field ID: "content" → Make required
   - Click "Add field" → "Media" → Name: "Featured Image", Field ID: "featuredImage"
   - Click "Add field" → "Reference" → Name: "Author", Field ID: "author" → Accept only "Author" content type
   - Click "Add field" → "Reference" → Name: "Category", Field ID: "category" → Accept only "Category" content type
   - Click "Add field" → "Date & time" → Name: "Published Date", Field ID: "publishedDate" → Make required
   - Click "Add field" → "Short text" → Name: "Tags", Field ID: "tags" → Enable "List"
   - Click "Add field" → "Short text" → Name: "SEO Title", Field ID: "seoTitle"
   - Click "Add field" → "Long text" → Name: "SEO Description", Field ID: "seoDescription"

5. **Save** the content type

Repeat similar steps for Author and Category content types.

## After Creating Content Types

1. **Create some sample content** in each content type
2. **Publish the content** (content must be published to appear via the API)
3. **Test your blog** at http://localhost:3000/blog

## Alternative: Import Content Model

If you prefer, you can use Contentful's CLI to import a pre-configured content model. Let me know if you'd like me to create the JSON files for importing.

## Current Application Status

- ✅ Server running on http://localhost:3000
- ✅ Blog page accessible at http://localhost:3000/blog
- ✅ No more InvalidQuery errors
- ⏳ Waiting for content types to be created in Contentful