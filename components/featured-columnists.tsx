'use client'

import { MessageSquare, Calendar } from 'lucide-react'
import useSWR from 'swr'
import Link from 'next/link'

// 1. Actualizamos la interfaz para que coincida con tus Noticias (Opiniones)
interface Opinion {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  author?: { name: string }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function FeaturedColumnists() {
  // 2. Cambiamos la URL para pedir las OPINIONES, no los columnistas
  const { data, isLoading, error } = useSWR<{ data: Opinion[] }>('/api/sanity/opinions', fetcher)
  
  // Tomamos solo las 3 primeras para que se vea elegante en el inicio
  const opinions = data?.data?.slice(0, 3) || []

  // Función simple para formatear la fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la Sección */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance" style={{ color: '#D81B60' }}>
            Latest Opinions
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#333333' }}>
            Expert perspectives on Chile's most important policy challenges and opportunities.
          </p>
        </div>

        {/* Estado de Carga (Skeletons) */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 sm:p-8 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/3" />
                <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
                <div className="h-16 bg-gray-200 rounded mb-6" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            ))}
          </div>
        )}

        {/* Estado de Error */}
        {error && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">Unable to load opinions. Please try again later.</p>
          </div>
        )}

        {/* GRILLA DE NOTICIAS */}
        {!isLoading && !error && opinions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {opinions.map((opinion) => (
              <Link 
                key={opinion._id} 
                href={`/opinion/${opinion.slug.current}`}
                className="block group" // Hacemos que todo el bloque sea un link
              >
                <div
                  className="h-full rounded-lg p-6 sm:p-8 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #F48FB1',
                  }}
                >
                  {/* Fecha y Autor */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{formatDate(opinion.publishedAt)}</span>
                  </div>

                  {/* Título (Antes era headline) */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-[#D81B60] transition-colors line-clamp-2" 
                    style={{ color: '#424242' }}
                  >
                    {opinion.title}
                  </h3>

                  {/* Extracto */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {opinion.excerpt || 'Read the full analysis and expert opinion on this topic...'}
                  </p>

                  {/* Botón visual "Read Opinion" */}
                  <div className="flex items-center gap-2 text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform" style={{ color: '#D81B60' }}>
                    <MessageSquare size={18} />
                    <span>Read Opinion</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}