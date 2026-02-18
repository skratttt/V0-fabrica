'use client'

import { useState } from 'react'
import Header from '@/components/header' // Aquí SÍ importamos el Header
import Hero from '@/components/hero'
import ProblemSection from '@/components/problem-section'
import PillarsSection from '@/components/pillars-section'
import ContentGrid from '@/components/content-grid'
import FeaturedColumnists from '@/components/featured-columnists'
import MediaHub from '@/components/media-hub'
import Footer from '@/components/footer' // Y el Footer
import OpinionPage from '@/components/pages/opinion'
import MediaPage from '@/components/pages/media'
import AboutPage from '@/components/pages/about'
import ContactPage from '@/components/pages/contact'
import TeamPage from '@/components/pages/team'
import ServiciosPage from '@/components/pages/servicios'
import TokenExchangePage from '@/components/pages/token-exchange'
import ResearchPage from '@/components/pages/research'

export default function Home() {
  // Esta es la "inteligencia" de los botones
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'opinion':
        return <OpinionPage />
      case 'media':
        return <MediaPage />
      case 'about':
        return <AboutPage />
      case 'servicios':
        return <ServiciosPage />
      case 'token-exchange':
        return <TokenExchangePage />
      case 'contact':
        return <ContactPage />
      case 'team':
        return <TeamPage />
      default:
        return (
          <>
            <Hero />
            <ProblemSection />
            <PillarsSection />
            <ContentGrid />
            <FeaturedColumnists />
            <MediaHub />
          </>
        )
    }
  }

  return (
    <main className="min-h-screen">
      {/* Pasamos las funciones a los botones para que funcionen */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {renderPage()}
      
      <Footer />
    </main>
  )
}
