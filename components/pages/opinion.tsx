'use client'

import { MessageSquare, Lightbulb } from 'lucide-react'
import useSWR from 'swr'
import { useState } from 'react'

interface Opinion {
  _id: string
  title: string
  slug: { current: string }
  author?: { name: string; title?: string; avatar?: string }
  authorName?: string
  publishedAt: string
  readTime?: number
  excerpt?: string
  category?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function OpinionPage() {
  const { data, isLoading, error } = useSWR<{ data: Opinion[] }>('/api/sanity/opinions', fetcher)
  const [selectedOpinion, setSelectedOpinion] = useState<string | null>(null)
  const articles = data?.data || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#D81B60' }}>
            Opinion
          </h1>
          <p className="text-lg" style={{ color: '#333333' }}>
            Thought-provoking insights and expert analysis from our team on the most
            pressing issues facing Chile today.
          </p>
        </div>

        {isLoading && (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/4" />
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
                <div className="h-16 bg-gray-200 rounded mb-6" />
                <div className="h-10 bg-gray-200 rounded w-32" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">Unable to load opinions. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && data?.data && data.data.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-50" style={{ color: '#D81B60' }} />
            <p className="text-gray-600">No opinion articles available yet. Check back soon!</p>
          </div>
        )}

        {!isLoading && !error && data?.data && data.data.length > 0 && (
          <div className="space-y-8">
            {data.data.map((article) => (
              <article
                key={article._id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4"
                style={{ borderColor: '#4DB6AC' }}
              >
                <div className="flex gap-4 mb-4">
                  <MessageSquare size={20} style={{ color: '#D81B60' }} />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#D81B60' }}
                    >
                      By {article.author?.name || article.authorName || 'Fabrica Chile'}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: '#9E9E9E' }}
                    >
                      {formatDate(article.publishedAt)} • {article.readTime || 5} min read
                    </p>
                  </div>
                </div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#D81B60' }}
                >
                  {article.title}
                </h2>
                <p className="mb-6 text-lg" style={{ color: '#424242' }}>
                  {article.excerpt || 'Read this insightful opinion piece...'}
                </p>
                <button
                  onClick={() => setSelectedOpinion(article.slug.current)}
                  className="text-white font-medium px-6 py-2 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#D81B60' }}
                >
                  Read Opinion
                </button>
              </article>
            ))}
          </div>
        )}

        {/* Opinion Newsletter CTA */}
        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{ backgroundColor: '#D81B60' }}
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
