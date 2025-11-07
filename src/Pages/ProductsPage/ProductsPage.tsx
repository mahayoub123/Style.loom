import { useEffect } from "react";
import ProductComp2 from "../../Components/ProductComp2/ProductComp2";
import ElevateYourWardrobeSection from "../../Components/ElevateYourWardrobeSection/ElevateYourWardrobeSection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FaqQuestions from "../../Components/FaqQuestions/FaqQuestions";


export default function ProductsPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
    <div className=" w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px] flex flex-col justify-center">
      <ProductComp2/>
    </div>
    <Testimonials/>
    <FaqQuestions/>
    <ElevateYourWardrobeSection/>
    </>
  )
}
