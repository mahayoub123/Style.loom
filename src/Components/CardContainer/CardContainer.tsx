import { useSelector } from "react-redux";
import InfoCard from "../InfoCard/InfoCard";
import type { RootState } from "../../redux/store/store";
import TopBanner from "../TopBanner/TopBanner";
import TitleAndButton from "../TitleAndButton/TitleAndButton";
import { useEffect, useState } from "react";


interface CardContainerProps{
  section:"homeCards" | "contactSection2" | "contactSection3";
  layout?:"vertical"|"horizontal";
  paddingY:string;
  paddingX:string;
  LqTitle:string;
  buttonName:string;
  show1:boolean;
  show2:boolean;
 
}
const CardContainer = ({section , layout="vertical",paddingY,paddingX,show1,show2,LqTitle,buttonName}:CardContainerProps) => {
  const cards = useSelector((state: RootState) => state.cards[section]);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  return (
    <section className=" 2xl:py-[100px] lg:py-20 md:py-20 py-[50px] 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 relative">
      <div className=" border-2 border-dashed border-[#3a3a3a] rounded-3xl overflow-hidden">
        
          <div className=" flex justify-around items-center border-b-2 border-dashed border-dark-15">
           {show1&&<TopBanner title="CRAFTING TRENDS, INSPIRING CONFIDENCE" paragraph="Explore a world of fashion at StyleLoom, where trends meet affordability."/>}
             {show2&&<TitleAndButton LqTitle={LqTitle} buttonName={buttonName}/>}
          </div>

          <div className={`grid${section==='homeCards'&& isSmallScreen&&!showAll?"grid-cols-1 divide-y-2 divide-dashed divide-dark-15":" "} grid-cols-1 md:grid-col-3 lg:grid-cols-3 2xl:divide-x-2 md:divide-x-2 divide-y-2 divide-dashed divide-dark-15  w-full`}>
           {(section === 'homeCards' && isSmallScreen && !showAll? cards.slice(0,3) :
           cards).map((item) => (
            <div key={item.id}>
              <InfoCard
                iconSrc={item.iconSrc}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                paddingY={paddingY}
                paddingX={paddingX}
                layout={layout}
              />
            </div>
          ))}
            

{ section==='homeCards' &&!showAll && cards.length > 3 && isSmallScreen && (
            <div className="flex items-center justify-center p-6 border-t-2 border-dashed border-dark-15 sm:col-span-2 lg:col-span-3">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 text-[16px] font-mono  hover:bg-gray-800 transition text-gray-600 flex items-center justify-center gap-2"
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
      </div>
    </section>
  );
};

export default CardContainer;
