'use client'

import TeamCarousel from '@/components/team-carousel'

export default function TeamPage() {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <TeamCarousel />

      {/* Team Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#880E4F' }}>
              What We Value
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#424242' }}
            >
              Our team is united by a shared commitment to rigorous research,
              integrity, and the mission to improve quality of life through
              evidence-based insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#880E4F' }}
              >
                <span className="text-2xl text-white font-bold">📊</span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#880E4F' }}
              >
                Rigorous Research
              </h3>
              <p style={{ color: '#424242' }}>
                We believe in evidence-based analysis and peer-reviewed research as
                the foundation for policy recommendations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#4DB6AC' }}
              >
                <span className="text-2xl text-white font-bold">🤝</span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#880E4F' }}
              >
                Collaboration
              </h3>
              <p style={{ color: '#424242' }}>
                We value diverse perspectives and work collaboratively with partners
                across sectors and disciplines.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#D81B60' }}
              >
                <span className="text-2xl text-white font-bold">🌍</span>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#880E4F' }}
              >
                Impact
              </h3>
              <p style={{ color: '#424242' }}>
                Everything we do is guided by our mission to improve quality of life
                and strengthen decentralization in Chile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#880E4F' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Team</h2>
          <p className="text-lg text-white opacity-90 mb-8">
            We're always looking for talented researchers, analysts, and professionals
            passionate about quality of life and decentralization.
          </p>
          <button
            className="px-8 py-3 text-white font-medium rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#D81B60' }}
          >
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  )
}
