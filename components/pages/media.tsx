'use client'

import { useState } from 'react'
import { Play, Radio, Headphones, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
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

export default function MediaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { data, error, isLoading } = useSWR<InstagramResponse>('/api/instagram?reels=true', fetcher)

  const reels = data?.data || []
  const itemsPerView = 3

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, reels.length - itemsPerView) : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev >= reels.length - itemsPerView ? 0 : prev + 1
    )
  }

  const getVisibleReels = () => {
    if (reels.length === 0) return []
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % reels.length
      if (reels[index]) visible.push(reels[index])
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

  const truncateCaption = (caption: string | undefined, maxLength: number = 80) => {
    if (!caption) return 'Watch on Instagram'
    return caption.length > maxLength ? caption.substring(0, maxLength) + '...' : caption
  }

  const podcasts = [
    {
      id: 1,
      title: 'The Decentralization Debate',
      episode: 'Ep. 15',
      duration: '45 min',
    },
    {
      id: 2,
      title: 'Quality of Life Matters',
      episode: 'Ep. 12',
      duration: '38 min',
    },
    {
      id: 3,
      title: 'Regional Voices',
      episode: 'Ep. 8',
      duration: '52 min',
    },
  ]

  const videos = [
    {
      id: 1,
      title: 'Video Interview with John Doe',
      duration: '1 hour',
      date: 'Jan 15, 2023',
    },
    {
      id: 2,
      title: 'Panel Discussion on AI',
      duration: '1 hour 30 min',
      date: 'Feb 20, 2023',
    },
    {
      id: 3,
      title: 'Expert Analysis on Blockchain',
      duration: '45 min',
      date: 'Mar 10, 2023',
    },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#D81B60' }}>
            Media & Content
          </h1>
          <p className="text-lg" style={{ color: '#333333' }}>
            Explore our video interviews, panel discussions, and podcasts featuring
            expert analysis.
          </p>
        </div>

        {/* Reels Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <h2
              className="text-3xl font-bold"
              style={{ color: '#D81B60' }}
            >
              Featured Reels
            </h2>
            {reels.length > itemsPerView && (
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  aria-label="Previous reels"
                >
                  <ChevronLeft size={20} style={{ color: '#D81B60' }} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  aria-label="Next reels"
                >
                  <ChevronRight size={20} style={{ color: '#D81B60' }} />
                </button>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
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
              <Play size={48} className="mx-auto mb-4 opacity-50" style={{ color: '#D81B60' }} />
              <p className="text-gray-600">Unable to load reels. Please try again later.</p>
            </div>
          )}

          {/* No Reels State */}
          {!isLoading && !error && reels.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <Play size={48} className="mx-auto mb-4 opacity-50" style={{ color: '#D81B60' }} />
              <p className="text-gray-600">No reels available yet. Check back soon!</p>
            </div>
          )}

          {/* Reels Grid */}
          {!isLoading && !error && reels.length > 0 && (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {getVisibleReels().map((reel) => (
                  <a
                    key={reel.id}
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={reel.thumbnail_url || reel.media_url}
                        alt={reel.caption || 'Instagram reel'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <Play
                          size={56}
                          className="text-white drop-shadow-lg"
                          fill="white"
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className="px-3 py-1 text-xs font-semibold rounded-full text-white backdrop-blur-sm"
                          style={{ backgroundColor: 'rgba(216, 27, 96, 0.9)' }}
                        >
                          Reel
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                        {truncateCaption(reel.caption)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{formatDate(reel.timestamp)}</span>
                        <span
                          className="text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                          style={{ color: '#D81B60' }}
                        >
                          Watch <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Dots Indicator */}
              {reels.length > itemsPerView && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: Math.ceil(reels.length / itemsPerView) }).map((_, index) => (
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

        {/* Podcasts Section */}
        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: '#D81B60' }}
          >
            Podcasts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow flex items-start gap-6"
              >
                <div
                  className="p-4 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#4DB6AC' }}
                >
                  <Headphones size={32} className="text-white" />
                </div>
                <div className="flex-grow">
                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color: '#4DB6AC' }}
                  >
                    {podcast.episode}
                  </p>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: '#D81B60' }}
                  >
                    {podcast.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: '#9E9E9E' }}
                  >
                    {podcast.duration}
                  </p>
                  <button
                    className="text-white font-medium px-4 py-2 rounded-lg transition-opacity hover:opacity-90 inline-flex items-center gap-2"
                    style={{ backgroundColor: '#D81B60' }}
                  >
                    <Radio size={16} />
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spotify CTA */}
          <div className="mt-12 text-center">
            <button
              className="px-8 py-3 text-white font-medium rounded-lg transition-opacity hover:opacity-90 inline-flex items-center gap-2"
              style={{ backgroundColor: '#4DB6AC' }}
            >
              <Radio size={20} />
              Listen on Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
