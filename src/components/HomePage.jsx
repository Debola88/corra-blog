import React from 'react'
import HomeHero from './HomeHero'
import Logo from './Logo'
import WhyPage from './WhyPage'
import ImageSection from './ImageSection'
import Features from './Features'
import CustomerTestimonials from './CustomerTestimonials'
import Faq from './Faq'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Logo />
      <WhyPage />
      <ImageSection />
      <Features />
      <CustomerTestimonials />
      <Faq />
    </div>
  )
}

export default HomePage