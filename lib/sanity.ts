import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

// Types for our Sanity documents
export interface Columnist {
  _id: string
  _type: 'columnist'
  name: string
  title?: string
  avatar?: string
  headline: string
  excerpt?: string
  bio?: string
  featured?: boolean
  order?: number
}

export interface Opinion {
  _id: string
  _type: 'opinion'
  title: string
  slug: { current: string }
  author?: Columnist
  authorName?: string
  publishedAt: string
  readTime?: number
  excerpt?: string
  content: any[]
  category?: 'policy' | 'economics' | 'governance' | 'social'
  featured?: boolean
}
