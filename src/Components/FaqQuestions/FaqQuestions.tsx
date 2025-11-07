import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import arrowDown from "/assets/Images/Home page photos/Icon.svg";
import TopBanner from "../TopBanner/TopBanner";
import { setCurrentFaqs } from "../../redux/slices/faqSlice";
import { motion } from "framer-motion";
const FaqQuestions = () => {
  const faqs = useSelector((state: RootState)=>state.faqs.currentFaqs);
  const dispatch=useDispatch()
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);
      if (!small) setShowAll(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqs = isSmallScreen && !showAll ? faqs.slice(0, 3) : faqs;

  return(
    <section className="bg-transparent text-white 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:py-[100px] lg:py-20 md:py-20 py-[50px] ">
      <div className=" relative border-2 border-dashed border-dark-15 rounded-lg overflow-hidden">
        <div className="  border-b-2 border-dashed border-dark-15">
          <TopBanner  tabs={["All","Ordering","Shipping","Returns","Support"]} action={(tab:string)=>dispatch(setCurrentFaqs(tab))} imgNumber={3} title="Have Questions? We Have Answers." paragraph="Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics." />
        </div>

        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-dashed divide-dark-15">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`2xl:p-[60px] lg:p-[50px] md:p-10 p-[30px] border-b-2 border-dashed border-dark-15 ${
                index % 2 === 0 ? "md:border-r-2" : ""
              }`}
            >
              <h3 className="2xl:text-2xl lg:text-xl md:text-lg text-lg font-medium mb-2 font-roboto text-brown-60 dark:text-white">
                {faq.question}
              </h3>
              <p className="2xl:text-lg lg:text-base md:text-base text-sm font-normal text-zinc-700 font-roboto">
                {faq.answer}
              </p>
            </div>
          ))}
        </motion.div>

        {isSmallScreen && faqs.length > 3 && !showAll && (
          <div className="flex items-center justify-center p-6 hover:bg-[#1a1a1a] border-t-2 border-dashed border-dark-15">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 text-gray-600 font-medium font-mono hover:bg-gray-200 hover:text-black transition flex items-center justify-center gap-2 rounded"
            >
              View All
              <img
                src={arrowDown}
                alt="icon"
                className="w-4 h-4 text-gray-600"
              />
            </button>
          </div>
        )}
      </div>
    </section> 
  );
}

export default FaqQuestions;
