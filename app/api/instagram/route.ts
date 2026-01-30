import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
  const searchParams = request.nextUrl.searchParams
  const reelsOnly = searchParams.get('reels') === 'true'

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Instagram access token not configured' },
      { status: 500 }
    )
  }

  try {
    // Fetch user's media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('Instagram API error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Filter to only include VIDEO (reels) posts if requested
    if (reelsOnly) {
      const filtered = {
        data: data.data?.filter((post: any) => post.media_type === 'VIDEO') || []
      }
      return NextResponse.json(filtered)
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Instagram fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    )
  }
}
