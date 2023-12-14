import React from 'react'
import HomeHero from './HomeHero'
import Logo from './Logo'
import WhyPage from './WhyPage'
import ImageSection from './ImageSection'
import Features from './Features'

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Logo />
      <WhyPage />
      <ImageSection />
      <Features />
    </div>
  )
}

export default HomePage