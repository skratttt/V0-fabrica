'use client'

import {
  FileText,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Briefcase,
  BookOpen,
  Target,
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Charlas Estratégicas',
    description:
      'Realizamos charlas estratégicas, sobre ciclos, contingencias y coyunturas sociopolíticas, dirigidas a directorios, concejos, asambleas y otros espacios organizativos del mundo privado, empresarial, diplomático y de la sociedad civil en general, tanto a nivel nacional, como internacional. ',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Pensando Chile',
    description:
      'Generamos reflexiones sobre el desarrollo del país y el futuro de la sociedad democrática, articulando a los principales actores y a las más reconocidas voces de la política nacional.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Inteligencia Legislativa',
    description:
      'Radar parlamentario siempre encendido. Elaboramos minutas e informes estratégicos de seguimiento, impacto y articulación de proyectos de ley, así como prospección de votaciones, stakeholders y movimientos clave en el Congreso',
    icon: Users,
  },
  {
    id: 4,
    title: 'Estudios',
    description:
      'Desarrollamos reportes, informes y estudios sobre distintas temáticas de interés público, que sirvan como insumo estratégico para el proceso de toma de decisiones en instituciones públicas y privadas',
    icon: BarChart3,
  },
  {
    id: 5,
    title: 'Informes de comunicación digital y estratégica',
    description:
      'Analizamos la performance comunicacional de actores en el entorno digital y en el entorno mediático, proveyendo recomendaciones e insumos para la toma de decisiones, el manejo de riesgos y la gestión de crisis, derivados del actuar comunicativo de vocerías públicas y privadas.',
    icon: MessageSquare,
  },
  {
    id: 6,
    title: 'Informes de reputación y opinión pública digital',
    description:
      'Escuchamos, monitoreamos, damos seguimiento y analizamos temáticas críticas, marcas y tendencias que circulan en la conversación pública digital, evaluando las dinámicas que caracterizan dicha conversación, su circulación, sus lógicas, impactos, audiencias y comunidades.      ',
    icon: Briefcase,
  },
  {
    id: 7,
    title: 'Informes de estudio',
    description:
      'Diseñamos, aplicamos y/o analizamos encuestas para medir el clima social, la opinión pública, la opinión publicada y las más variadas aristas de los entornos sociopolíticos, económicos y culturales del país. ',
    icon: BookOpen,
  },
  {
    id: 8,
    title: 'Análisis de Proyección Electoral',
    description:
      'Diseñamos, analizamos y proyectamos resultados electorales. Con sustento teórico y rigor metodológico, prospectamos el comportamiento electoral a nivel nacional, regional y comunal, con técnicas e insumos georreferenciados.',
    icon: Target,
  },
]

export default function ServiciosPage() {
  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'rgb(247, 151, 188)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#D81B60' }}>
            Our Services
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#333333' }}
          >
            Fabrica Chile ofrece una gama integral de servicios para apoyar el desarrollo de políticas basadas en evidencia y promover la calidad de vida en las regiones chilenas.

          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: '#D81B60' }}
                  >
                    <Icon size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#D81B60' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 sm:p-12 shadow-md">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#D81B60' }}>
            Listo para comenzar y trabajar juntos?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Contactanos para discutir cómo podemos apoyar tus objetivos con nuestros servicios personalizados.
          </p>
          <button
            className="px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#D81B60' }}
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>
  )
}
