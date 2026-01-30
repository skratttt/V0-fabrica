import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { shortLivedToken } = await request.json()
    
    const appId = process.env.INSTAGRAM_APP_ID
    const appSecret = process.env.INSTAGRAM_APP_SECRET

    if (!appId || !appSecret || !shortLivedToken) {
      return NextResponse.json(
        { error: 'Missing required credentials or token' },
        { status: 400 }
      )
    }

    console.log('[v0] Exchanging short-lived token for long-lived token...')

    // Exchange short-lived token for long-lived token
    const response = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_refresh_access_token&access_token=${shortLivedToken}`,
      { method: 'GET' }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('[v0] Instagram token exchange failed:', error)
      return NextResponse.json(
        { error: 'Failed to exchange token', details: error },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    console.log('[v0] Token exchange successful. New token expires in:', data.expires_in, 'seconds')

    return NextResponse.json({
      success: true,
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in, // Should be ~5,184,000 seconds (60 days)
    })
  } catch (error) {
    console.error('[v0] Token exchange error:', error)
    return NextResponse.json(
      { error: 'Failed to exchange token' },
      { status: 500 }
    )
  }
}
