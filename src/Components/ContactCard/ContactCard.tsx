import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import { motion } from "framer-motion";
export interface contactProps{
  photo:string;
  icon:string;
  contactType:string;
  btnName:string;
}

export default function ContactCard({photo,icon,contactType,btnName}:contactProps) {
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className=" 2xl:p-[60px] lg:p-[50px] md:p-[30px] p-[30px] relative flex  flex-col justify-center items-center 2xl:gap-[50px] lg:gap-10 md:gap-6 gap-6">
         <img className="absolute top-0 right-0 2xl:w-[205px] 2xl:h-[164px] lg:w-[133px] lg:h-[133px] md:w-[105px] md:h-[105px] w-[100px] h-20" src={photo}/> 
        <div >
            <img className="2xl:w-[94px] 2xl:h-[94px] lg:w-[76px] lg:h-[76px] md:w-[76px] md:h-[76px] w-[76px] h-[76px]" src={icon}/>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-4">
         <p className="2xl:text-2xl lg:text-xl md:text-xl text-lg font-medium text-white font-roboto">{contactType}</p>
         <ShopNowBtn path="#" btnTitle={btnName} width=" w-full"/>
        </div>
        
    </motion.div>
  )
}
