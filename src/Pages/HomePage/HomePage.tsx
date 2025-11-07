
import CardContainer from '../../Components/CardContainer/CardContainer'
import ElevateYourWardrobeSection from '../../Components/ElevateYourWardrobeSection/ElevateYourWardrobeSection'
import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions'
import FashionJourneySection from '../../Components/FashionJourneySection/FashionJourneySection'
import Hero from '../../Components/Hero/Hero'
import Testimonials from '../../Components/Testimonials/Testimonials'
import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (

    <div className=' font-roboto ' >
       <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
          <Hero/>
            
        </div>
        
        <CardContainer section='homeCards' layout='vertical' paddingY='2xl:py-[60px] lg:py-[50px] md:py-[30px] py-[30px]' paddingX='2xl:px-[60px] lg:px-[50px] md:px-[30px] px-[30px]' show1={true} show2={false} LqTitle='' buttonName=''/>
        <FashionJourneySection/>
        <ProductsComponent />
        <Testimonials/>
      <FaqQuestions/>
      <ElevateYourWardrobeSection/>


    </div>
  )
}
