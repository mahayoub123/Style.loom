
import { useEffect } from "react";
import ProductDetails from "../../Components/ProductDetails/ProductDetails"
import Testimonials from "../../Components/Testimonials/Testimonials";
import FaqQuestions from "../../Components/FaqQuestions/FaqQuestions";
import ElevateYourWardrobeSection from "../../Components/ElevateYourWardrobeSection/ElevateYourWardrobeSection";



export default function ProductsDetails() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
    <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
      <ProductDetails/>
    </div>
    <Testimonials/>
    <FaqQuestions/>
    <ElevateYourWardrobeSection/>
    </>
  )
}
