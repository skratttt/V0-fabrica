'use client'

import { Award, Target, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#880E4F' }}>
            About Fabrica Chile
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#424242' }}>
            Fabrica Chile is a leading independent think tank dedicated to rigorous
            research, thoughtful analysis, and evidence-based policy recommendations
            on quality of life and decentralization in Chile.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-4">
              <Target size={40} style={{ color: '#880E4F' }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#880E4F' }}
            >
              Our Mission
            </h3>
            <p style={{ color: '#424242' }}>
              To advance evidence-based understanding of quality of life and
              decentralization through rigorous research and informed policy dialogue.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-4">
              <Award size={40} style={{ color: '#4DB6AC' }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#880E4F' }}
            >
              Our Vision
            </h3>
            <p style={{ color: '#424242' }}>
              A Chile where quality of life is systematically improved through
              decentralized governance and informed policy decisions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-4">
              <Users size={40} style={{ color: '#D81B60' }} />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#880E4F' }}
            >
              Our Values
            </h3>
            <p style={{ color: '#424242' }}>
              Integrity, rigor, independence, and a commitment to serving the public
              good through evidence-based research and analysis.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div
          className="bg-white rounded-lg p-8 shadow-md mb-16"
          style={{ borderLeft: '4px solid #4DB6AC' }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: '#880E4F' }}
          >
            Our Story
          </h2>
          <div className="space-y-4" style={{ color: '#424242' }}>
            <p>
              Founded in 2015, Fabrica Chile emerged from a recognition that Chile
              needed an independent institution dedicated to rigorous, evidence-based
              research on the fundamental questions of quality of life and the role of
              decentralization in governance.
            </p>
            <p>
              Over nearly a decade, our team has grown to include leading economists,
              political scientists, sociologists, and policy experts who bring diverse
              perspectives to our research.
            </p>
            <p>
              Today, Fabrica Chile stands as a trusted source of research and analysis
              for policymakers, civil society organizations, and citizens seeking to
              understand and improve the quality of life across Chile's regions.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: '#880E4F' }}
          >
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-lg p-8 shadow-md"
              style={{ borderLeft: '4px solid #D81B60' }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#880E4F' }}
              >
                Quality of Life
              </h3>
              <ul className="space-y-3" style={{ color: '#424242' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Health and well-being outcomes
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Education and human capital
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Economic opportunity and mobility
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Social cohesion and civic engagement
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-lg p-8 shadow-md"
              style={{ borderLeft: '4px solid #D81B60' }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#880E4F' }}
              >
                Decentralization
              </h3>
              <ul className="space-y-3" style={{ color: '#424242' }}>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Regional governance structures
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Local autonomy and decision-making
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Resource allocation and fiscal federalism
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#4DB6AC' }}
                  />
                  Community participation and accountability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
