import React, { useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloatingButton } from '../components/layout/WhatsAppFloatingButton'
import { Hero } from '../components/sections/Hero'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { BeforeAfterShowcase } from '../components/sections/BeforeAfterShowcase'
import { TestimonialSection } from '../components/sections/TestimonialSection'
import { CTASection } from '../components/sections/CTASection'

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <WhatsAppFloatingButton />
      <main>
        <Hero />
        <ServicesGrid />
        <BeforeAfterShowcase />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
