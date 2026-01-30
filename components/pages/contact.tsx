'use client'

import React from "react"

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    // You can add actual form submission logic here
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#880E4F' }}>
            Get In Touch
          </h1>
          <p className="text-lg" style={{ color: '#424242' }}>
            Have questions or want to collaborate? We'd love to hear from you.
            Contact us directly or fill out the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: '#880E4F' }}
            >
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="p-3 rounded-lg h-fit"
                  style={{ backgroundColor: '#4DB6AC' }}
                >
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Address
                  </h3>
                  <p style={{ color: '#424242' }}>
                    Avenida Apoquindo 3000
                    <br />
                    Santiago, Chile
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="p-3 rounded-lg h-fit"
                  style={{ backgroundColor: '#4DB6AC' }}
                >
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Phone
                  </h3>
                  <p style={{ color: '#424242' }}>
                    +56 2 2234 5678
                    <br />
                    +56 9 8765 4321
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="p-3 rounded-lg h-fit"
                  style={{ backgroundColor: '#4DB6AC' }}
                >
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Email
                  </h3>
                  <p style={{ color: '#424242' }}>
                    info@fabricachile.cl
                    <br />
                    research@fabricachile.cl
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div
              className="mt-12 p-6 rounded-lg"
              style={{ backgroundColor: '#F48FB1' }}
            >
              <h3
                className="font-bold text-lg mb-3"
                style={{ color: '#880E4F' }}
              >
                Office Hours
              </h3>
              <p style={{ color: '#424242' }}>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: '#880E4F' }}
              >
                Send us a Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#E0E0E0',
                      backgroundColor: '#FFFFFF',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#E0E0E0',
                      backgroundColor: '#FFFFFF',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                    style={{
                      borderColor: '#E0E0E0',
                      backgroundColor: '#FFFFFF',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: '#E0E0E0',
                      backgroundColor: '#FFFFFF',
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white font-medium rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#D81B60' }}
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
