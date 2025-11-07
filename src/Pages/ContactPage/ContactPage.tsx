import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import ContactInformationSection from "../../Components/ContactInformationSection/ContactInformationSection";
import FaqQuestions from "../../Components/FaqQuestions/FaqQuestions";
import Testimonials from "../../Components/Testimonials/Testimonials";



export default function ContactPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
    <div className='w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:pt-[183px] lg:pt-[137px] pt-[146px]'>
      <ContactInformationSection miniTitle="CONTACT INFORMATION"/> 
    </div>
     <CardContainer section="contactSection2" layout="horizontal"  paddingY='2xl:py-[60px] lg:py-[50px] md:py-10 py-10' paddingX='2xl:px-5 lg:px-4 md:p-5 p-5' show1={false} show2={true} LqTitle="RETURN POLICY" buttonName="Read Return Policy"/>
     <CardContainer section="contactSection3" layout="horizontal"  paddingY='2xl:py-[60px] lg:py-[50px] md:py-10 py-10' paddingX='2xl:px-5 lg:px-4 md:p-5 p-5' show1={false} show2={true} LqTitle="CANCELLATION POLICY" buttonName="Read Cancellation Policy"/>
     <Testimonials/>
     <FaqQuestions/>
     </>
  )
}
