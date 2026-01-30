'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPublicationsMenu, setShowPublicationsMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const publicationSubItems = ['Media', 'Opinion']

  const handleNavClick = (page: string) => {
    setCurrentPage(page.toLowerCase())
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  const isPublicationPage = ['media', 'opinion'].includes(currentPage)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <h1 className="text-2xl font-bold" style={{ color: '#D81B60' }}>
              Fabrica <span className="text-gray-700">Chile</span>
            </h1>
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`font-medium text-sm hover:opacity-80 transition-all duration-200 pb-1 ${
                currentPage === 'about'
                  ? 'border-b-2'
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                color: currentPage === 'about' ? '#4DB6AC' : '#D81B60',
                borderColor: currentPage === 'about' ? '#4DB6AC' : 'transparent',
              }}
            >
              About
            </button>

            {/* Publications with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowPublicationsMenu(true)}
              onMouseLeave={() => setShowPublicationsMenu(false)}
            >
              <button
                className={`font-medium text-sm hover:opacity-80 transition-all duration-200 pb-1 flex items-center gap-1 ${
                  isPublicationPage
                    ? 'border-b-2'
                    : 'border-b-2 border-transparent'
                }`}
                style={{
                  color: isPublicationPage ? '#4DB6AC' : '#D81B60',
                  borderColor: isPublicationPage ? '#4DB6AC' : 'transparent',
                }}
              >
                Publications
                <ChevronDown size={16} />
              </button>

              {/* Dropdown Menu */}
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                style={{ border: '1px solid #E0E0E0' }}
              >
                {publicationSubItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    style={{
                      color: currentPage === item.toLowerCase() ? '#4DB6AC' : '#424242',
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <button
              onClick={() => handleNavClick('servicios')}
              className={`font-medium text-sm hover:opacity-80 transition-all duration-200 pb-1 ${
                currentPage === 'servicios'
                  ? 'border-b-2'
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                color: currentPage === 'servicios' ? '#4DB6AC' : '#D81B60',
                borderColor: currentPage === 'servicios' ? '#4DB6AC' : 'transparent',
              }}
            >
              Servicios
            </button>

            {/* Team */}
            <button
              onClick={() => handleNavClick('team')}
              className={`font-medium text-sm hover:opacity-80 transition-all duration-200 pb-1 ${
                currentPage === 'team'
                  ? 'border-b-2'
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                color: currentPage === 'team' ? '#4DB6AC' : '#D81B60',
                borderColor: currentPage === 'team' ? '#4DB6AC' : 'transparent',
              }}
            >
              Team
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`font-medium text-sm hover:opacity-80 transition-all duration-200 pb-1 ${
                currentPage === 'contact'
                  ? 'border-b-2'
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                color: currentPage === 'contact' ? '#4DB6AC' : '#D81B60',
                borderColor: currentPage === 'contact' ? '#4DB6AC' : 'transparent',
              }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button - Right */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t pt-4">
            <button
              onClick={() => handleNavClick('about')}
              style={{
                color: currentPage === 'about' ? '#4DB6AC' : '#D81B60',
              }}
              className="block font-medium text-sm hover:opacity-80 w-full text-left"
            >
              About
            </button>
            
            <div className="space-y-2">
              <div className="font-medium text-sm" style={{ color: '#D81B60' }}>
                Publications
              </div>
              {publicationSubItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  style={{
                    color: currentPage === item.toLowerCase() ? '#4DB6AC' : '#424242',
                  }}
                  className="block text-sm hover:opacity-80 w-full text-left pl-4"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('servicios')}
              style={{
                color: currentPage === 'servicios' ? '#4DB6AC' : '#D81B60',
              }}
              className="block font-medium text-sm hover:opacity-80 w-full text-left"
            >
              Servicios
            </button>

            <button
              onClick={() => handleNavClick('team')}
              style={{
                color: currentPage === 'team' ? '#4DB6AC' : '#D81B60',
              }}
              className="block font-medium text-sm hover:opacity-80 w-full text-left"
            >
              Team
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              style={{
                color: currentPage === 'contact' ? '#4DB6AC' : '#D81B60',
              }}
              className="block font-medium text-sm hover:opacity-80 w-full text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
