import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const opinion = await sanityClient.fetch(
      `*[_type == "opinion" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        "author": author->{name, title, avatar, bio},
        authorName,
        publishedAt,
        readTime,
        excerpt,
        content,
        category,
        featured
      }`,
      { slug: params.slug }
    )

    if (!opinion) {
      return NextResponse.json(
        { error: 'Opinion not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: opinion })
  } catch (error) {
    console.error('Failed to fetch opinion:', error)
    return NextResponse.json(
      { error: 'Failed to fetch opinion' },
      { status: 500 }
    )
  }
}
