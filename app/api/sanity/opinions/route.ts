import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET() {
  try {
    const opinions = await sanityClient.fetch(
      `*[_type == "opinion"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        "author": author->{name, title, avatar},
        authorName,
        publishedAt,
        readTime,
        excerpt,
        category,
        featured
      }`
    )

    return NextResponse.json({ data: opinions })
  } catch (error) {
    console.error('Failed to fetch opinions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch opinions' },
      { status: 500 }
    )
  }
}
