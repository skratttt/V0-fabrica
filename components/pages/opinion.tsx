'use client'

import useSWR from 'swr'
import Link from 'next/link'
import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { Calendar, User } from 'lucide-react'

// 1. CONFIGURACIÓN PARA IMÁGENES (Igual que hiciste en la noticia)
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return source ? builder.image(source).width(400).height(250).url() : null;
}

// 2. INTERFAZ ACTUALIZADA (Ahora pedimos la imagen)
interface Opinion {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: any // Importante para la foto de portada
  author?: { name: string }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function OpinionPage() {
  const { data, isLoading } = useSWR<{ data: Opinion[] }>('/api/sanity/opinions', fetcher)
  const articles = data?.data || []

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F797BC' }}> {/* Tu Fondo Rosa */}
      
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4 text-[#D81B60]">
            Opinion
          </h1>
          <p className="text-xl text-white font-medium max-w-2xl mx-auto">
            Perspectivas de expertos sobre los desafíos y oportunidades más importantes de Chile.
          </p>
        </div>

        {/* ESTADO DE CARGA (Skeletons en Grid) */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse h-96">
                <div className="h-48 bg-gray-200 w-full" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GRID DE TARJETAS (Estilo Foto 2) */}
        {!isLoading && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article._id} 
                href={`/opinion/${article.slug.current}`}
                className="group"
              >
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-white/20">
                  
                  {/* FOTO ARRIBA (Si no hay, pone un gris) */}
                  <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                    {article.mainImage ? (
                      <img 
                        src={urlFor(article.mainImage)} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>Sin imagen</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENIDO */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Título */}
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#D81B60] transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Resumen (Excerpt) */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                      {article.excerpt || 'Lee el análisis completo de nuestros expertos haciendo clic aquí...'}
                    </p>

                    {/* Pie de tarjeta (Autor y Fecha) */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#FCE4EC] flex items-center justify-center text-[#D81B60]">
                          <User size={16} />
                        </div>
                        <span className="text-xs font-bold text-gray-700">
                          {article.author?.name || 'Fabrica Chile'}
                        </span>
                      </div>
                      
                      {article.publishedAt && (
                        <span className="text-xs text-gray-400 font-medium">
                          {new Date(article.publishedAt).toLocaleDateString('es-CL')}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Mensaje si no hay noticias */}
        {!isLoading && articles.length === 0 && (
          <div className="text-center py-20 bg-white/10 rounded-3xl backdrop-blur-sm">
            <p className="text-white text-xl">No hay artículos publicados aún.</p>
          </div>
        )}

      </div>
    </div>
  )
}