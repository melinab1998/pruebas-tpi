import React from 'react'
import HeroSection from "../../components/HeroSection/HeroSection"
import AboutUs from '../../components/AboutUs/AboutUs'
import DonationSection from '../../components/DonationSection/DonationSection'
import AdoptionRequirements from '../../components/AdoptionRequirements/AdoptionRequirements'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <DonationSection/>
      <AdoptionRequirements/>
    </div>
  )
}

export default Home
