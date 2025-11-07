import { contactCardData } from "../../Data/ContactCardData";
import ContactCard from "../ContactCard/ContactCard";
import TopBanner from "../TopBanner/TopBanner";
import { motion } from "framer-motion";
 interface Information{
    miniTitle:string;
 }
export default function ContactInformationSection({miniTitle}:Information) {
  return (
    <section className=" 2xl:py-[185px] lg:py-20 md:py-20 py-[50px] relative" >
        <div className="border-2 border-dashed border-dark-15 rounded-[20px] ">
        <div className="border-b-2 border-dashed border-dark-15">
            <TopBanner imgNumber={4} title="Your Partner in Every Step of Your Fashion Journey." paragraph="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."/>
        </div>
        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="2xl:block lg:block md:block hidden 2xl:p-[50px] lg:p-10 md:p-[30px]">
           <h2 className="2xl:text-3xl font-medium font-roboto text-dark-20 dark:text-white">{miniTitle}</h2>
        </motion.div>
        <div className=" border-t-2 border-dashed border-dark-15 flex flex-col 2xl:flex-row lg:flex-row md:flex-row justify-between items-center 2xl:divide-x-2 lg:divide-x-2 md:divide-x-2 divide-y-2  divide-dashed divide-dark-15">
          {contactCardData.map((item,index)=>(
            <div className="w-full" key={index}>
              <ContactCard
               photo={item.photo}
               icon={item.icon} 
               contactType={item.contactType}
               btnName={item.btnName}
              />
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}
