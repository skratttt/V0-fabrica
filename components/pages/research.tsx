'use client'

import { BookOpen, TrendingUp, Award } from 'lucide-react'

export default function ResearchPage() {
  const studies = [
    {
      id: 1,
      title: 'Quality of Life in Urban Centers: A Comparative Analysis',
      date: 'January 2024',
      category: 'Quality of Life',
      description:
        'Comprehensive study examining factors that influence quality of life across major Chilean cities, with policy recommendations.',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'Decentralization and Regional Development: Case Studies',
      date: 'December 2023',
      category: 'Decentralization',
      description:
        'In-depth analysis of successful decentralization models and their impact on regional economic growth and citizen engagement.',
      icon: TrendingUp,
    },
    {
      id: 3,
      title: 'Impact of Local Governance on Public Services',
      date: 'November 2023',
      category: 'Governance',
      description:
        'Research on how decentralized governance structures improve public service delivery and citizen satisfaction.',
      icon: Award,
    },
    {
      id: 4,
      title: 'Economic Indicators and Regional Sustainability',
      date: 'October 2023',
      category: 'Economics',
      description:
        'Analysis of economic sustainability in different regions and recommendations for balanced growth.',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#D81B60' }}>
            Research
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#333333' }}>
            Our research team conducts rigorous, evidence-based studies on quality of
            life and decentralization. Explore our latest findings and reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study) => {
            const Icon = study.icon
            return (
              <div
                key={study.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: '#D81B60' }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded text-xs font-semibold mb-2"
                      style={{
                        backgroundColor: '#4DB6AC',
                        color: '#FFFFFF',
                      }}
                    >
                      {study.category}
                    </span>
                    <p
                      className="text-sm"
                      style={{ color: '#9E9E9E' }}
                    >
                      {study.date}
                    </p>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#D81B60' }}
                >
                  {study.title}
                </h3>
                <p className="mb-6" style={{ color: '#424242' }}>
                  {study.description}
                </p>
                <button
                  className="text-white font-medium px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#D81B60' }}
                >
                  Read Study
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
