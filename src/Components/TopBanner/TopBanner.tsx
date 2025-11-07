
import FilterTabs from '../FilterTabs/FilterTabs'
import { motion } from "framer-motion";

export default function TopBanner({ paragraph,title,tabs,imgNumber,action }: { tabs?: string[],action?:(name:string)=>void ,imgNumber?:number ,paragraph:string,title:string }) {
    return (
        <motion.div  initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className='overflow-hidden w-full flex flex-col 2xl:py-20 2xl:pl-20 2xl:pr-[300px] lg:py-[60px] lg:pl-[60px] lg:pr-[250px] md:py-[40px] md:pl-[30px] md:pr-[150px] py-[30px] pl-5 pr-5  2xl:gap-[50px] lg:gap-10 gap-[30px]  relative' >
           { imgNumber&&<img src={`/assets/Images/images/abstractDesign${imgNumber}.png`} className='z-0 absolute right-0 top-[47%] translate-y-[-50%]  2xl:size-[340px] lg:size-[280px] md:size-[150px] max-lg:hidden'/>}
            <div className='flex flex-col 2xl:gap-[30px] lg:gap-6 gap-5 '>
                <h1 className='z-10 text-shadow-black text-shadow-sm font-medium 2xl:text-5xl lg:text-[38px] md:text-[38px] text-[28px] text-dark-10 dark:text-white'>{title}</h1>
               <p className="2xl:text-xl lg:text-base md:text-sm text-sm  text-[#676665]">{paragraph}</p>
            </div>
            {
               tabs&& tabs.length > 0 && action &&
                <FilterTabs tabs={tabs} action={action} />
            }
        </motion.div>
    )
}
