'use client'

import { Play, Radio, SproutIcon as Spotify } from 'lucide-react'

const podcasts = [
  {
    id: 1,
    title: 'Policy Insights: Fiscal Reform in Chile',
    description: 'A deep dive into proposed fiscal reforms and their implications for economic growth.',
    duration: '32 min',
    date: 'Jan 24, 2025',
  },
  {
    id: 2,
    title: 'Decentralization Roundtable',
    description: 'Regional leaders discuss the challenges and opportunities of local governance.',
    duration: '48 min',
    date: 'Jan 18, 2025',
  },
  {
    id: 3,
    title: 'Education and Opportunity',
    description: 'How education policy shapes long-term economic mobility in Chile.',
    duration: '38 min',
    date: 'Jan 11, 2025',
  },
  {
    id: 4,
    title: 'Infrastructure Investment Strategy',
    description: 'Planning for sustainable regional development and infrastructure.',
    duration: '44 min',
    date: 'Jan 4, 2025',
  },
]

export default function MediaHub() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance" style={{ color: '#D81B60' }}>
            Multimedia Hub
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#333333' }}>
            Watch, listen, and engage with our latest research and expert discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Video Section - Left */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#D81B60' }}>
              Featured Video
            </h3>

            <div
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md group cursor-pointer mb-6"
              style={{ backgroundColor: '#424242' }}
            >
              {/* Video Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-700">
                <div className="text-center">
                  <Play size={48} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-white text-sm">Click to watch video</p>
                </div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold" style={{ color: '#424242' }}>
                Fabrica Chile: Our Mission and Impact
              </h4>
              <p className="text-gray-600 mt-3 leading-relaxed">
                An overview of Fabrica Chile's research initiatives, policy recommendations, and commitment to improving quality of life across all Chilean regions.
              </p>
              <button
                className="mt-4 px-6 py-2 text-white font-medium rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#D81B60' }}
              >
                Watch Now
              </button>
            </div>
          </div>

          {/* Podcast Section - Right */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Radio size={28} style={{ color: '#D81B60' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#D81B60' }}>
                Latest Podcasts
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-white p-4 sm:p-5 rounded-lg hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: '#4DB6AC' }}
                    >
                      <Play size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-opacity-80" style={{ color: '#424242' }}>
                        {podcast.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-1">
                        {podcast.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <span>{podcast.duration}</span>
                        <span>•</span>
                        <span>{podcast.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spotify Button */}
            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: '#4DB6AC' }}
            >
              <Spotify size={20} />
              Listen on Spotify
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
