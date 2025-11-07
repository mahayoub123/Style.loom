import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import type { Testimonial } from "../../redux/types/Testimonialstypes";
import TopBanner from "../TopBanner/TopBanner";
import { motion } from "framer-motion";
const Testimonials = () => {
  const testimonials = useSelector(
    (state: RootState) => state.testimonials
  ) as Testimonial[];

  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
 
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTestimonials =
    showAll || !isSmallScreen ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="bg-dark-transparent text-white  2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:py-[100px] lg:py-20 md:py-20 py-[50px] ">
      <div className="border-2 border-dashed border-dark-15 rounded-[20px] ">
        <TopBanner imgNumber={1} title="The StyleLoom Testimonial Collection." paragraph="At StyleLoom, our customers are the heartbeat of our brand."/>
      </div>
      <div className=" relative border-2 border-t-0 border-dashed border-dark-15">
        <div className="2xl:block lg:block md:hidden hidden">
        <img className="absolute  top-1/2 -translate-y-[58px] left-0 z-0" src="/assets/Images/Home page photos/Abstract Design (2).svg" />
          <img className="absolute  top-1/2 translate-y-1 md left-0 z-0" src="/assets/Images/Home page photos/Abstract Design down.svg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => {
            const columns =
              window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
            const isLastCol = (index + 1) % columns === 0;
            const isLastRow = index >= displayedTestimonials.length - columns;
           
            return (
              <div
                key={testimonial.id}
                className={`  2xl:p-[60px] lg:p-[45px] md:p-[40px] p-[30px] relative transition duration-300 hover:bg-[#1a1a1a]
                  ${!isLastCol ? "border-r-2 border-dashed border-dark-15" : ""}
                  ${!isLastRow ? "border-b-2 border-dashed border-dark-15" : ""}
                `}
              
              >
                <motion.div  initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="flex justify-between items-center gap-2 mb-4">
                  <div className="flex justify-center items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className=" 2xl:w-20 lg:w-[60px] md:w-[50px] w-[50px] rounded-full mr-3 "
                  />
                  <div>
                    <p className="2xl:text-xl lg:text-lg md:text-base text-base font-medium text-brown-60 dark:text-white font-roboto whitespace-nowrap">
                      {testimonial.name}
                    </p>
                    <p className="2xl:text-lg lg:text-base md:text-sm text-sm font-normal font-mono text-zinc-600">
                      {testimonial.location}
                    </p>
                  </div>
                  </div>
                 
                  <img
                    src="/assets/Images/Home page photos/IconTwitter.svg"
                    alt="Twitter icon"
                    className="2xl:w-[34px] lg:w-7 md:w-7 w-7 2xl:h-[34px] lg:h-7 md:h-7 h-7"
                  />
                </motion.div>

                <motion.div  initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="mb-3">
                  <img
                    src={testimonial.rating}
                    alt="rating stars"
                    className="h-5"
                  />
                </motion.div>

                <motion.p  initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="2xl:text-lg lg:text-base md:text-sm text-sm font-roboto font-normal text-zinc-700">
                  {testimonial.content}
                </motion.p>
              </div>
              
            );
          })}
        
          {!showAll && testimonials.length > 3 && isSmallScreen && (
            <div className="flex items-center justify-center p-6 border-t-2 border-dashed border-dark-15 sm:col-span-2 lg:col-span-3">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2text-[16px] font-mono  hover:bg-gray-800 transition text-gray-600 flex items-center justify-center gap-2"
              >
                <span>View All</span>
                <img
                  src="/assets/Images/Home page photos/Icon.svg"
                  alt="icon"
                  className="w-4 h-4  text-gray-600"
                />
              </button>
            </div>
          )}
        </div>
        <div className="2xl:block lg:block md:hidden hidden">
        <img className="absolute  top-1/2 -translate-y-[58px] right-0 z-0" src="/assets/Images/Home page photos/Abstract (1).svg" />
          <img className="absolute  top-1/2 translate-y-1 md right-0 z-0" src="/assets/Images/Home page photos/Abstract (2).svg" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
