import { footerData } from "../../Data/FooterData";
import { footerBar } from "../../Data/MovingBarData";
import { media } from "../../Data/SocialMediaData";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-dark-15">
    <div className=" whitespace-nowrap  flex justify-between items-center gap-2  overflow-hidden py-[50px] animate-ticker">
        {footerBar.map((item, index) => (
          <div key={index} className="inline-flex  items-center gap-4 px-4">
            <span className="2xl:text-3xl lg:text-2xl md:text-xl text-xl text-dark-20 font-normal font-roboto ">{item.phrase}</span>

            <img className="2xl:w-[60px] lg:w-[50px] md:w-[40px] w-[40px] " src={item.icon}/>
          </div>
        ))}
      </div>
      <div className=" 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 py-[100px] border-b-2 border-t-2 border-dashed border-dark-15">
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className=" flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between items-start 2xl:items-center lg:items-center md:items-center gap-[30px]">
        <img className=" hidden dark:block 2xl:w-[788px] lg:w-[560px] md:w-[357px] w-[357px]" src="/assets/Images/Home page photos/whitefooterlogo.svg"/>
        <img  className=" block dark:hidden 2xl:w-[788px] lg:w-[560px] md:w-[357px] w-[357px]" src="/assets/Images/Home page photos/vectorpaint (1).svg"/>
        <div className="flex justify-center items-center 2xl:gap-5 lg:gap-4 md:gap-4 gap-4">
          {media.map((item,index)=>(
            <div key={index} className=" flex justify-center items-center 2xl:w-[66px] lg:w-[56px] md:w-[56px] w-[48px] 2xl:h-[66px] lg:h-[56px] md:h-[56px] h-[48px] rounded-xl bg-brown-80 p-4">
              <a href="#" className="text-[34px]">{item.icons}</a>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 py-[80px] border-b-2 border-dashed border-dark-15 ">
      
      {footerData.columns.map((column, index) => (
        <div key={index}>
          <motion.h4 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="font-medium font-roboto  text-dark-10 dark:text-white 2xl:text-[22px] lg:text-lg md:text-base text-base mb-[30px]">{column.title}</motion.h4>
          <motion.ul initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="text-zinc-600 2xl:text-xl lg:text-base md:text-sm text-sm font-normal font-mono flex flex-wrap items-center gap-2">
            {column.text.map((item, idx) =>
              item === "•" ? (
                <li key={idx} className="text-dark-15">•</li>
              ) : (
                <li key={idx}>
                  <a  href="#">{item}</a>
                </li>
              )
            )}
          </motion.ul>
        </div>
      ))}

      
      <div className="flex flex-col justify-center items-start">
        <motion.h4 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="font-medium font-roboto text-dark-10 dark:text-white  2xl:text-[22px] lg:text-lg md:text-base text-base mb-6">Subscribe to Newsletter</motion.h4>
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="relative w-full">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full 2xl:px-6 lg:px-5 md:px-5 px-5 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] pr-10 rounded-xl bg-brown-70 dark:bg-dark-10 text-white placeholder-zinc-600 placeholder:font-normal 2xl:placeholder:text-lg lg:placeholder:text-sm md:placeholder:text-sm placeholder:text-sm placeholder:font-mono focus:outline-none"
          />
          <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2  text-dark-20 dark:text-brown-60" />
        </motion.div>
      </div>
    </div>
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="text-zinc-700 2xl:text-lg lg:text-sm md:text-sm text-sm font-normal font-mono flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between items-start 2xl:items-center lg:items-center md:items-center gap-5  2xl:px-[162px] lg:px-[80px] md:px-10 px-4 py-[50px]">
      <p>© 2024 StyleLoom. All rights reserved.</p>
      <div className="flex justify-center items-center gap-3">
        <a>Terms & Conditions</a>
        <span className="h-4  border"></span>
        <a href="#">Privacy Policy</a>
      </div>
    </motion.div>
    </footer>
  )
}
