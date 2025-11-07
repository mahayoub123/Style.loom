import TopBanner from "../TopBanner/TopBanner";
import { motion } from "framer-motion";
export default function FashionJourneySection() {
  return (
    <section className="2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:py-[100px] lg:py-20 md:py-20 py-[50px]  ">
      <div className="border-2 border-dashed border-dark-15 rounded-[20px] overflow-hidden">
        <div className="border-b-2 border-dashed border-dark-15">
          <TopBanner
            imgNumber={3}
            paragraph="At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible."
            title="Navigating the StyleLoom Fashion Journey."
          />
        </div>

        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="grid grid-cols-1 md:grid-cols-4 2xl:divide-x-2 lg:divide-x-2 md:divide-x-2 divide-y-2 divide-dashed divide-dark-15">
          <div className="2xl:p-[50px] lg:p-10 md:p-10 p-[30px] flex flex-col justify-start items-start gap-[30px]">
            <p className=" 2xl:text-xl lg:text-lg md:text-lg text-base font-normal font-mono text-brown-60 dark:text-zinc-700">
              Step 01
            </p>
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="font-medium 2xl:text-[28px] lg:text-[22px] md:text-[22px] text-xl font-roboto text-white">
                Discover Trends
              </h3>
              <p className="text-zinc-600 font-roboto font-normal 2xl:text-lg lg:text-base md:text-base text-sm">
                Explore our curated collection of over 1000 styles, spanning
                global fashion trends.
              </p>
            </div>
          </div>

          <div className="2xl:p-[50px] lg:p-10 md:p-10 p-[30px] flex flex-col justify-start items-start gap-[30px]">
            <p className=" 2xl:text-xl lg:text-lg md:text-lg text-base font-normal font-mono text-brown-60 dark:text-zinc-700">
              Step 02
            </p>
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="font-medium  2xl:text-[28px] lg:text-[22px] md:text-[22px] text-xl font-roboto text-white">
                Effortless Navigation
              </h3>
              <p className="text-zinc-600 font-roboto font-normal 2xl:text-lg lg:text-base md:text-base text-sm">
                Intuitive filters and categories help you find the perfect
                pieces tailored to your style.
              </p>
            </div>
          </div>

          <div className="2xl:p-[50px] lg:p-10 md:p-10 p-[30px] flex flex-col justify-start items-start gap-[30px]">
            <p className=" 2xl:text-xl lg:text-lg md:text-lg text-base font-normal font-mono text-brown-60 dark:text-zinc-700">
              Step 03
            </p>
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="font-medium  2xl:text-[28px] lg:text-[22px] md:text-[22px] text-xl font-roboto text-white">
                Secure Checkout
              </h3>
              <p className="text-zinc-600 font-roboto font-normal 2xl:text-lg lg:text-base md:text-base text-sm">
                Multiple payment options and encrypted transactions ensure a
                safe and hassle-free purchase.
              </p>
            </div>
          </div>

          <div className="2xl:p-[50px] lg:p-10 md:p-10 p-[30px] flex flex-col justify-start items-start gap-[30px]">
            <p className=" 2xl:text-xl lg:text-lg md:text-lg text-base font-normal font-mono text-brown-60 dark:text-zinc-700">
              Step 04
            </p>
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="font-medium  2xl:text-[28px] lg:text-[22px] md:text-[22px] text-xl font-roboto text-white">
                Unbox Happiness
              </h3>
              <p className="text-zinc-600 font-roboto font-normal 2xl:text-lg lg:text-base md:text-base text-sm">
                Unbox a fashion-forward experience delivered right to your door,
                ready to elevate your style.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
