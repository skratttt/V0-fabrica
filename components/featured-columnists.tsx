'use client'

import { MessageSquare } from 'lucide-react'
import useSWR from 'swr'

interface Columnist {
  _id: string
  name: string
  title?: string
  avatar?: string
  headline: string
  excerpt?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function FeaturedColumnists() {
  const { data, isLoading, error } = useSWR<{ data: Columnist[] }>('/api/sanity/columnists', fetcher)
  const columnists = data?.data || []

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance" style={{ color: '#D81B60' }}>
            Featured Columnists
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#333333' }}>
            Expert perspectives on Chile's most important policy challenges and opportunities.
          </p>
        </div>

        {/* Columnists Grid */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 sm:p-8 animate-pulse">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded mr-4" />
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded mb-2 w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded mb-3" />
                <div className="h-16 bg-gray-200 rounded mb-6" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">Unable to load columnists. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && data?.data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.data.map((columnist) => (
              <div
                key={columnist._id}
                className="rounded-lg p-6 sm:p-8 transition-all hover:shadow-lg cursor-pointer group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #F48FB1',
                }}
              >
                {/* Avatar and Name */}
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{columnist.avatar || '👤'}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#D81B60' }}>
                      {columnist.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{columnist.title}</p>
                  </div>
                </div>

                {/* Headline */}
                <h4 className="text-lg font-bold mb-3 group-hover:text-opacity-80 transition-colors" style={{ color: '#424242' }}>
                  {columnist.headline}
                </h4>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {columnist.excerpt}
                </p>

                {/* Read Link */}
                <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: '#D81B60' }}>
                  <MessageSquare size={16} />
                  <span>Read Opinion</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
