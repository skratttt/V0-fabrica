import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET() {
  try {
    const columnists = await sanityClient.fetch(
      `*[_type == "columnist" && featured == true] | order(order asc) [0...3] {
        _id,
        name,
        title,
        avatar,
        headline,
        excerpt,
        bio
      }`
    )

    return NextResponse.json({ data: columnists })
  } catch (error) {
    console.error('Failed to fetch columnists:', error)
    return NextResponse.json(
      { error: 'Failed to fetch columnists' },
      { status: 500 }
    )
  }
}
