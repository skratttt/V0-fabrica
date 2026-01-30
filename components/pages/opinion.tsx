'use client'

import { MessageSquare, Lightbulb } from 'lucide-react'

export default function OpinionPage() {
  const articles = [
    {
      id: 1,
      author: 'Dr. María González',
      title: 'Why Decentralization is Key to Chile\'s Future',
      excerpt:
        'An exploration of how decentralization can empower local communities and improve governance across the nation.',
      date: 'January 15, 2024',
      readTime: '8 min read',
    },
    {
      id: 2,
      author: 'Carlos Rodríguez',
      title: 'Measuring Quality of Life: Beyond GDP',
      excerpt:
        'A critical analysis of modern quality of life metrics and why traditional economic indicators fall short.',
      date: 'January 10, 2024',
      readTime: '6 min read',
    },
    {
      id: 3,
      author: 'Paula Martínez',
      title: 'Regional Autonomy and Economic Growth',
      excerpt:
        'Examining the relationship between regional autonomy and sustained economic development in emerging economies.',
      date: 'January 5, 2024',
      readTime: '10 min read',
    },
    {
      id: 4,
      author: 'Sofia Castillo',
      title: 'Building Resilient Communities Through Governance',
      excerpt:
        'How inclusive governance structures contribute to community resilience in times of social and economic change.',
      date: 'December 28, 2023',
      readTime: '7 min read',
    },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#880E4F' }}>
            Opinion
          </h1>
          <p className="text-lg" style={{ color: '#424242' }}>
            Thought-provoking insights and expert analysis from our team on the most
            pressing issues facing Chile today.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4"
              style={{ borderColor: '#4DB6AC' }}
            >
              <div className="flex gap-4 mb-4">
                <MessageSquare size={20} style={{ color: '#880E4F' }} />
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: '#880E4F' }}
                  >
                    By {article.author}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#9E9E9E' }}
                  >
                    {article.date} • {article.readTime}
                  </p>
                </div>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: '#880E4F' }}
              >
                {article.title}
              </h2>
              <p className="mb-6 text-lg" style={{ color: '#424242' }}>
                {article.excerpt}
              </p>
              <button
                className="text-white font-medium px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#D81B60' }}
              >
                Read Opinion
              </button>
            </article>
          ))}
        </div>

        {/* Opinion Newsletter CTA */}
        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{ backgroundColor: '#880E4F' }}
        >
          <Lightbulb size={40} className="mx-auto mb-4 text-white" />
          <h3 className="text-2xl font-bold mb-4 text-white">
            Get Expert Opinions
          </h3>
          <p className="mb-6 text-white opacity-90">
            Subscribe to our newsletter for the latest insights and analysis from
            our experts.
          </p>
          <button
            className="px-8 py-3 text-white font-medium rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#D81B60' }}
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}
