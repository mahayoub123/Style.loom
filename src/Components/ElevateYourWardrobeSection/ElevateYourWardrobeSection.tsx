import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
export default function ElevateYourWardrobeSection() { 
  const navigate = useNavigate()

  return (
    <section className=" 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:py-[100px] lg:py-20 md:py-20 py-[50px] ">
         <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className=" relative 2xl:py-[100px] lg:py-20 md:py-14 py-[50px] 2xl:pr-[142px] lg:pr-[120px] md:pr-[120px] pr-[30px] 2xl:pl-[100px] lg:pl-20 md:pl-14 pl-[30px] rounded-[20px] flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between 2xl:items-center lg:items-center md:items-center items-start gap-[30px] bg-brown-70 overflow-hidden">
        
        <div className="flex flex-col justify-start items-start gap-4">
            <h2 className=" text-white dark:text-dark-06 font-roboto font-medium 2xl:text-[58px] lg:text-5xl md:text-[38px] text-[38px] relative z-20 ">ELEVATE YOUR WARDROBE</h2>
            <p className="text-dark-20 dark:text-dark-12 font-normal font-roboto 2xl:text-lg lg:text-base md:text-sm text-sm relative z-20 2xl:w-[84%] lg:w-full md:w-full w-full ">Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.</p>
        </div>
        <div className="2xl:w-[159px] lg:w-[126px] md:w-[126px] w-full">
            <button onClick={()=>navigate("/products")} className=" relative z-40 w-full flex justify-center items-center gap-1 bg-dark-12 2xl:px-6 lg:px-5 md:px-5 px-5 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] rounded-xl font-roboto 2xl:text-lg lg:text-sm md:text-sm text-sm text-white">
            <p className="whitespace-nowrap">Shop Now</p>
            <img src="/assets/Images/images/linkArrow.svg"/>
            </button>
            
        </div>
        
           <img className=" 2xl:w-[623px] lg:w-[535px] md:w-[524px] w-[306px]  absolute 2xl:bottom-0 lg:bottom-[3px] md:-bottom-2.5 bottom-52  2xl:right-0 lg:right-0 md:right-0 -right-20 " src="/assets/Images/Home page photos/Abstract Design (6).png"/>
        
        
    </motion.div>
    </section>
   
  )
}
