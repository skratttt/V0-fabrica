'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. María González',
    role: 'Executive Director',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Research Lead',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Paula Martínez',
    role: 'Policy Analyst',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Jorge López',
    role: 'Communications Director',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Sofia Castillo',
    role: 'Senior Researcher',
    image:
      'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Miguel Santos',
    role: 'Data Analyst',
    image:
      'https://images.unsplash.com/photo-1519085360771-9852373193b9?w=400&h=400&fit=crop',
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length
      items.push(teamMembers[index])
    }
    return items
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(253, 240, 245)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#D81B60' }}>
              Meet Our Team
            </h2>
            <p className="text-lg" style={{ color: '#333333' }}>
              Dedicated experts committed to advancing quality of life and decentralization
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop View - 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {getVisibleItems().map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: '#D81B60' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: '#4DB6AC' }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 column */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={teamMembers[currentIndex].image || "/placeholder.svg"}
                  alt={teamMembers[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: '#D81B60' }}
                >
                  {teamMembers[currentIndex].name}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#4DB6AC' }}
                >
                  {teamMembers[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full transition-all hover:bg-gray-100"
              style={{ borderColor: '#D81B60' }}
              aria-label="Previous team member"
            >
              <ChevronLeft size={28} style={{ color: '#D81B60' }} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-3 rounded-full transition-all"
                  style={{
                    width: currentIndex === index ? '24px' : '12px',
                    backgroundColor:
                      currentIndex === index ? '#D81B60' : '#D0D0D0',
                  }}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full transition-all hover:bg-gray-100"
              style={{ borderColor: '#D81B60' }}
              aria-label="Next team member"
            >
              <ChevronRight size={28} style={{ color: '#D81B60' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
