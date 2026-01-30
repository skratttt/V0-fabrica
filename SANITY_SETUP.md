# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for managing columnists and opinion articles.

## Prerequisites

1. Create a Sanity account at [sanity.io](https://www.sanity.io/)
2. Create a new project in the Sanity dashboard
3. Note your **Project ID** and **Dataset name** (usually "production")

## Environment Variables

Add these to your Vercel project (already requested):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your dataset name (usually "production")
- `SANITY_API_TOKEN` - API token with write permissions (optional, for admin features)

## Schema Setup

### Option 1: Using Sanity Studio (Recommended)

1. Go to your Sanity project dashboard at [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Studio" to open Sanity Studio
3. Create two document types:

#### Columnist Schema
```javascript
{
  name: 'columnist',
  type: 'document',
  title: 'Columnist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title/Position'
    },
    {
      name: 'avatar',
      type: 'string',
      title: 'Avatar (emoji or URL)',
      description: 'Emoji or image URL for the columnist avatar'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Latest Opinion Headline',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Opinion Excerpt',
      rows: 3
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      rows: 4
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured on Homepage',
      initialValue: false
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      initialValue: 0
    }
  ]
}
```

#### Opinion Schema
```javascript
{
  name: 'opinion',
  type: 'document',
  title: 'Opinion Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'columnist'}]
    },
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name (if not in columnist list)'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date'
    },
    {
      name: 'readTime',
      type: 'number',
      title: 'Read Time (minutes)',
      initialValue: 5
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}]
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Policy', value: 'policy'},
          {title: 'Economics', value: 'economics'},
          {title: 'Governance', value: 'governance'},
          {title: 'Social Issues', value: 'social'}
        ]
      }
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false
    }
  ]
}
```

## Adding Content

### Add Columnists
1. Go to Sanity Studio
2. Create new "Columnist" documents
3. Fill in name, title, avatar (emoji like 👩‍💼), headline, excerpt, and bio
4. Check "Featured on Homepage" to display on the homepage
5. Set "Display Order" (0 = first, 1 = second, etc.)
6. Publish

### Add Opinion Articles
1. Go to Sanity Studio
2. Create new "Opinion Article" documents
3. Fill in title and click "Generate" next to slug
4. Select an author from the columnist list OR enter a custom author name
5. Write the content using the rich text editor
6. Add excerpt for preview
7. Set category and read time
8. Publish

## Testing

After adding content in Sanity:
1. Your columnists should appear on the homepage in the "Featured Columnists" section
2. All opinion articles should appear on the Opinion page
3. Clicking "Read Opinion" will show the full article (requires additional detail page implementation)

## Troubleshooting

- **No content showing**: Check that your environment variables are set correctly
- **API errors**: Verify your Project ID and Dataset name match your Sanity project
- **Content not updating**: Try refreshing the page (data is cached for 1 hour)
