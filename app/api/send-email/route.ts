import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Dynamically import emailjs to use on server
    const emailjs = await import('@emailjs/nodejs')

    // Send email using EmailJS Node.js SDK (server-side only env vars)
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || '',
      process.env.EMAILJS_TEMPLATE_ID || '',
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_name: 'Fabrica Chile',
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        privateKey: process.env.EMAILJS_PRIVATE_KEY || '',
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
