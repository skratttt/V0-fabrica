'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ContentGrid from '@/components/content-grid'
import FeaturedColumnists from '@/components/featured-columnists'
import MediaHub from '@/components/media-hub'
import Footer from '@/components/footer'
import ResearchPage from '@/components/pages/research'
import OpinionPage from '@/components/pages/opinion'
import MediaPage from '@/components/pages/media'
import AboutPage from '@/components/pages/about'
import ContactPage from '@/components/pages/contact'
import TeamPage from '@/components/pages/team'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'research':
        return <ResearchPage />
      case 'opinion':
        return <OpinionPage />
      case 'media':
        return <MediaPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'team':
        return <TeamPage />
      default:
        return (
          <>
            <Hero />
            <ContentGrid />
            <FeaturedColumnists />
            <MediaHub />
          </>
        )
    }
  }

  return (
    <main className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </main>
  )
}
