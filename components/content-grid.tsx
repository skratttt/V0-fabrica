'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Instagram, ExternalLink, Play } from 'lucide-react'
import useSWR from 'swr'

interface InstagramPost {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  timestamp: string
}

interface InstagramResponse {
  data: InstagramPost[]
  error?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ContentGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { data, error, isLoading } = useSWR<InstagramResponse>('/api/instagram', fetcher)

  const posts = data?.data || []
  const itemsPerView = 3

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, posts.length - itemsPerView) : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev >= posts.length - itemsPerView ? 0 : prev + 1
    )
  }

  const getVisiblePosts = () => {
    if (posts.length === 0) return []
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % posts.length
      if (posts[index]) visible.push(posts[index])
    }
    return visible
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const truncateCaption = (caption: string | undefined, maxLength: number = 100) => {
    if (!caption) return 'View on Instagram'
    return caption.length > maxLength ? caption.substring(0, maxLength) + '...' : caption
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Instagram size={32} style={{ color: '#D81B60' }} />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance" style={{ color: '#D81B60' }}>
                Latest from Instagram
              </h2>
            </div>
            <p className="mt-4 text-lg" style={{ color: '#333333' }}>
              Follow our latest updates, publications, and content on social media.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          {posts.length > itemsPerView && (
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                aria-label="Previous posts"
              >
                <ChevronLeft size={24} style={{ color: '#D81B60' }} />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                aria-label="Next posts"
              >
                <ChevronRight size={24} style={{ color: '#D81B60' }} />
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
                <div className="aspect-square bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3 w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12 bg-white rounded-lg">
            <Instagram size={48} className="mx-auto mb-4 opacity-50" style={{ color: '#D81B60' }} />
            <p className="text-gray-600">Unable to load Instagram posts. Please try again later.</p>
          </div>
        )}

        {/* No Posts State */}
        {!isLoading && !error && posts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <Instagram size={48} className="mx-auto mb-4 opacity-50" style={{ color: '#D81B60' }} />
            <p className="text-gray-600">No posts available yet. Check back soon!</p>
          </div>
        )}

        {/* Instagram Posts Carousel */}
        {!isLoading && !error && posts.length > 0 && (
          <>
            {/* Desktop View - 3 columns */}
            <div className="hidden md:grid grid-cols-3 gap-6 sm:gap-8">
              {getVisiblePosts().map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url}
                      alt={post.caption || 'Instagram post'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.media_type === 'VIDEO' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <Play size={56} className="text-white drop-shadow-lg" fill="white" />
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-3 py-1 text-xs font-semibold rounded-full text-white backdrop-blur-sm"
                        style={{ backgroundColor: 'rgba(77, 182, 172, 0.9)' }}
                      >
                        {post.media_type === 'VIDEO' ? 'Reel' : post.media_type === 'CAROUSEL_ALBUM' ? 'Album' : 'Photo'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                      {truncateCaption(post.caption, 80)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{formatDate(post.timestamp)}</span>
                      <span
                        className="text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: '#D81B60' }}
                      >
                        View <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile View - Single card with swipe */}
            <div className="md:hidden">
              <a
                href={posts[currentIndex]?.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden shadow-sm block"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={posts[currentIndex]?.media_type === 'VIDEO' ? (posts[currentIndex]?.thumbnail_url || posts[currentIndex]?.media_url) : posts[currentIndex]?.media_url}
                    alt={posts[currentIndex]?.caption || 'Instagram post'}
                    className="w-full h-full object-cover"
                  />
                  {posts[currentIndex]?.media_type === 'VIDEO' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play size={56} className="text-white drop-shadow-lg" fill="white" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full text-white backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(77, 182, 172, 0.9)' }}
                    >
                      {posts[currentIndex]?.media_type === 'VIDEO' ? 'Reel' : posts[currentIndex]?.media_type === 'CAROUSEL_ALBUM' ? 'Album' : 'Photo'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-3">
                    {truncateCaption(posts[currentIndex]?.caption, 120)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{formatDate(posts[currentIndex]?.timestamp)}</span>
                    <span
                      className="text-sm font-semibold flex items-center gap-1"
                      style={{ color: '#D81B60' }}
                    >
                      View on Instagram <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </a>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-white shadow-md"
                  aria-label="Previous post"
                >
                  <ChevronLeft size={20} style={{ color: '#D81B60' }} />
                </button>
                <div className="flex gap-2">
                  {posts.slice(0, Math.min(posts.length, 6)).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: currentIndex === index ? '20px' : '8px',
                        backgroundColor: currentIndex === index ? '#D81B60' : '#D0D0D0',
                      }}
                      aria-label={`Go to post ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-white shadow-md"
                  aria-label="Next post"
                >
                  <ChevronRight size={20} style={{ color: '#D81B60' }} />
                </button>
              </div>
            </div>

            {/* Dots Indicator - Desktop */}
            {posts.length > itemsPerView && (
              <div className="hidden md:flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(posts.length / itemsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerView)}
                    className="h-3 rounded-full transition-all"
                    style={{
                      width: Math.floor(currentIndex / itemsPerView) === index ? '24px' : '12px',
                      backgroundColor: Math.floor(currentIndex / itemsPerView) === index ? '#D81B60' : '#D0D0D0',
                    }}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
