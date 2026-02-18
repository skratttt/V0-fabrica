'use client'

import { BarChart3, MapPin, Users } from 'lucide-react'

const pillars = [
  {
    icon: BarChart3,
    title: 'Investigaci\u00f3n Basada en Datos',
    description:
      'Aplicamos Data Science y an\u00e1lisis cuantitativo para generar evidencia que informe mejores pol\u00edticas p\u00fablicas.',
  },
  {
    icon: MapPin,
    title: 'Descentralizaci\u00f3n Efectiva',
    description:
      'Proponemos soluciones para que las regiones de Chile tengan mayor autonom\u00eda y recursos para su desarrollo.',
  },
  {
    icon: Users,
    title: 'Impacto Social',
    description:
      'Cada propuesta busca mejorar la calidad de vida de las personas, con foco en equidad y acceso a oportunidades.',
  },
]

export default function PillarsSection() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#4DB6AC' }}
          >
            {'Nuestros Pilares'}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance font-serif"
            style={{ color: '#D81B60' }}
          >
            {'Lo que nos mueve'}
          </h2>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center px-6 py-10 rounded-2xl transition-shadow hover:shadow-lg"
                style={{ backgroundColor: '#FFF5F8' }}
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ backgroundColor: 'rgba(216, 27, 96, 0.1)' }}
                >
                  <Icon size={32} style={{ color: '#D81B60' }} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#D81B60' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#424242' }}
                >
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
