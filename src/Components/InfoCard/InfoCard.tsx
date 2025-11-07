import { motion } from "framer-motion";
export interface InfoCardProps{
  iconSrc:string;
  imageSrc?:string;
  title:string;
  description:string;
  layout?: string;
  paddingY:string,
  paddingX:string,
}
const InfoCard = ({
  iconSrc,
  imageSrc,
  title,
  description,
  paddingY,
  paddingX,
  layout = "vertical",
}: InfoCardProps) => {
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className={`relative  ${paddingY} rounded-xl flex flex-col min-h-[220px]  ${paddingX} overflow-hidden bg-transparent`}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute 2xl:-top-1.5 lg:top-1 md:-top-2 -top-3.5 2xl:w-[205px] lg:w-[150px] md:w-[140px] w-[130px] right-0 "
        />
      )}

      <div className={`${layout==="horizontal"? "  flex-row gap-6":"flex-col"} flex justify-start items-start  `}>
        {iconSrc && (
          <div className={`${layout==="horizontal"?"flex-shrink-0":"mb-4"}`}>
            <img
              src={iconSrc}
              alt={`${title} icon`}
              className=" 2xl:w-[94px] 2xl:h-[94px] lg:w-[76px] lg:h-[76px] md:w-[76px] md:h-[76px] w-[76px] h-[76px] "
            />
          </div>
        )}
        <div className="flex flex-col justify-center items-start gap-4 w-full">
        <h3 className="text-brown-60 dark:text-white 2xl:text-2xl lg:text-xl md:text-lg text-lg font-medium ">{title}</h3>
        <p className=" text-gray-400 2xl:text-lg lg:text-base md:text-base text-sm font-normal ">{description}</p>
        </div>
        
      </div>
    </motion.div>
  );
};
export default InfoCard;
