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
    title: 'Policy Research & Analysis',
    description:
      'In-depth research and analysis on public policy issues affecting quality of life and decentralization in Chile.',
    icon: FileText,
  },
  {
    id: 2,
    title: 'Economic Impact Studies',
    description:
      'Comprehensive economic impact assessments for regional development projects and policy initiatives.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Stakeholder Engagement',
    description:
      'Facilitation of dialogue and collaboration between government, private sector, and civil society organizations.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Data Analysis & Surveys',
    description:
      'Quantitative and qualitative research methodologies to gather insights on public opinion and social trends.',
    icon: BarChart3,
  },
  {
    id: 5,
    title: 'Strategic Communication',
    description:
      'Development of communication strategies to effectively disseminate research findings and policy recommendations.',
    icon: MessageSquare,
  },
  {
    id: 6,
    title: 'Consulting Services',
    description:
      'Expert advisory services for organizations seeking guidance on policy design, implementation, and evaluation.',
    icon: Briefcase,
  },
  {
    id: 7,
    title: 'Training & Capacity Building',
    description:
      'Educational programs and workshops to strengthen institutional capacity in public policy and governance.',
    icon: BookOpen,
  },
  {
    id: 8,
    title: 'Advocacy & Coalition Building',
    description:
      'Strategic support for advocacy campaigns and coalition formation around key policy priorities.',
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
            Fabrica Chile offers a comprehensive range of services to support
            evidence-based policy development and promote quality of life across
            Chilean regions.
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
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Contact us to learn more about how our services can support your
            organization's goals and initiatives.
          </p>
          <button
            className="px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#D81B60' }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}
