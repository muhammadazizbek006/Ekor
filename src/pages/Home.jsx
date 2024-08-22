import React from 'react'
import HeroHill from '../components/home/HeroHill'
import Hero from '../components/home/Hero'
import ProductsReport from '../components/home/ProductsReport'
import ProductsOffer from '../components/home/ProductsOffer'
import BusinessOffer from '../components/home/BusinessOffer'
import MeatAndFruit from '../components/home/MeatAndFruit'
import HouseholdProducts from '../components/home/HouseholdProducts'
import BusinessMaterials from '../components/home/BusinessMaterials'
import SpecialOffers from '../components/home/SpecialOffers'
import OurAttentionMatters from '../components/home/OurAttentionMatters'
import Subscribe from '../components/home/Subscribe'
import ReviewsFromOurCustomers from '../components/home/ReviewsFromOurCustomers'
import RequestForCooperation from '../components/home/RequestForCooperation'
const Home = () => {
  return (
    <>
    

      <Hero/>
      <ProductsReport/>
      <ProductsOffer/>
      <MeatAndFruit/>
      <HouseholdProducts/>
      <BusinessOffer/>
      <BusinessMaterials/>
      <SpecialOffers/>
      <OurAttentionMatters/>
      <Subscribe/>
      <ReviewsFromOurCustomers/>

    </>
  )
}

export default Home