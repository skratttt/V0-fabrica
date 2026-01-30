'use client'

import { BookOpen, BarChart3, FileText } from 'lucide-react'

const contentItems = [
  {
    id: 1,
    type: 'Studies',
    title: 'Economic Policy in Post-Crisis Chile',
    description:
      'A comprehensive analysis of fiscal policy reforms and their impact on income inequality and social mobility.',
    icon: BookOpen,
    tag: 'New Study',
    date: 'January 2025',
  },
  {
    id: 2,
    type: 'Surveys',
    title: 'Public Sentiment on Decentralization',
    description:
      'National survey tracking Chilean citizen preferences on regional autonomy, infrastructure investment, and local governance.',
    icon: BarChart3,
    tag: 'Latest Survey',
    date: 'January 2025',
  },
  {
    id: 3,
    type: 'Academic Articles',
    title: 'Regional Development Disparities',
    description:
      'Peer-reviewed research examining geographic inequality patterns and policy recommendations for balanced regional growth.',
    icon: FileText,
    tag: 'Featured',
    date: 'December 2024',
  },
]

export default function ContentGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(253, 240, 245)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance" style={{ color: '#D81B60' }}>
            Featured Content
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#333333' }}>
            Explore our latest research, surveys, and academic insights on Chile's critical policy issues.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contentItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                {/* Header with Icon and Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-lg text-white"
                    style={{ backgroundColor: '#D81B60' }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                    style={{ backgroundColor: '#4DB6AC' }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#D81B60' }}>
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span
                    className="text-sm font-semibold group-hover:translate-x-1 transition-transform"
                    style={{ color: '#D81B60' }}
                  >
                    Read More →
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
