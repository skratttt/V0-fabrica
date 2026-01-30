'use client'

import { Play, Radio, Headphones } from 'lucide-react'

export default function MediaPage() {
  const videos = [
    {
      id: 1,
      title: 'Decentralization in Practice: Regional Perspectives',
      duration: '24:15',
      date: 'January 20, 2024',
    },
    {
      id: 2,
      title: 'Quality of Life Panel Discussion',
      duration: '32:45',
      date: 'January 15, 2024',
    },
    {
      id: 3,
      title: 'Expert Interview: Future of Governance',
      duration: '18:30',
      date: 'January 10, 2024',
    },
  ]

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

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#880E4F' }}>
            Media & Content
          </h1>
          <p className="text-lg" style={{ color: '#424242' }}>
            Explore our video interviews, panel discussions, and podcasts featuring
            expert analysis.
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: '#880E4F' }}
          >
            Featured Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative bg-gray-300 aspect-video flex items-center justify-center group">
                  <Play
                    size={48}
                    className="text-white opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded"
                      style={{
                        backgroundColor: '#4DB6AC',
                        color: '#FFFFFF',
                      }}
                    >
                      VIDEO
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: '#9E9E9E' }}
                    >
                      {video.duration}
                    </span>
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ color: '#880E4F' }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: '#9E9E9E' }}
                  >
                    {video.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Podcasts Section */}
        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: '#880E4F' }}
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
                    style={{ color: '#880E4F' }}
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
