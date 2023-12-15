import React from 'react'
import HomeHero from './HomeHero'
import Logo from './Logo'
import WhyPage from './WhyPage'
import ImageSection from './ImageSection'
import Features from './Features'
import CustomerTestimonials from './CustomerTestimonials'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Logo />
      <WhyPage />
      <ImageSection />
      <Features />
      <CustomerTestimonials />
    </div>
  )
}

export default HomePage