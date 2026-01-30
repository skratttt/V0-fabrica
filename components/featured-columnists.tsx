'use client'

import { MessageSquare } from 'lucide-react'

const columnists = [
  {
    id: 1,
    name: 'Dr. María González',
    title: 'Senior Policy Analyst',
    headline: 'The Future of Healthcare Reform in Chile',
    avatar: '👩‍💼',
    excerpt:
      'Exploring evidence-based approaches to expanding healthcare coverage while maintaining fiscal sustainability.',
  },
  {
    id: 2,
    name: 'Dr. Carlos Ruiz',
    title: 'Economic Research Director',
    headline: 'Decentralization and Regional Prosperity',
    avatar: '👨‍💼',
    excerpt:
      'How empowering regional governments can unlock Chile\'s full economic potential and reduce inequality.',
  },
  {
    id: 3,
    name: 'Prof. Ana Martínez',
    title: 'Social Policy Expert',
    headline: 'Education Quality: A National Priority',
    avatar: '👩‍🎓',
    excerpt:
      'Strategies for improving educational outcomes in underserved communities across Chile.',
  },
]

export default function FeaturedColumnists() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(253, 240, 245)' }}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {columnists.map((columnist) => (
            <div
              key={columnist.id}
              className="rounded-lg p-6 sm:p-8 transition-all hover:shadow-lg cursor-pointer group"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #F48FB1',
              }}
            >
              {/* Avatar and Name */}
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{columnist.avatar}</div>
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
      </div>
    </section>
  )
}
