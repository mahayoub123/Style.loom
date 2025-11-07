import { useDispatch, useSelector } from "react-redux";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import type { RootState } from "../../redux/store/store";
import ProductCard from "../ProductCard/ProductCard";
import TopBanner from "../TopBanner/TopBanner";
import { setCurrentProducts } from "../../redux/slices/ProductSlice";
import { motion } from "framer-motion";

export default function ProductComp2() {
    const cards = useSelector((state: RootState) => state.products.currentProducts)
    const dispatch=useDispatch()
    return (
        <div className=' justify-self-center lg:w-full overflow-hidden md:w-full max-md:w-[full] 2xl:rounded-[20px] lg:rounded-2xl rounded-[14px] 2xl:border-2  lg:border-2 lg:border-r-2  border-2 border-dashed border-dark-15 '>
            <div className="">
                <TopBanner title="EXPLORE THE LATEST TRENDS AND TIMLESS CLASSICS" imgNumber={2} paragraph="Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics" tabs={["All","Mens","Womens","Kids"]} action={(tabname:string)=>dispatch(setCurrentProducts(tabname))} />
            </div>
            <div className='w-full '>
                <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className='flex items-center justify-between 2xl:p-[30px] p-6 w-full 2xl:border-t-2 2xl:border-b-2 lg:border-t-2 lg:border-b-2 border-b-2 border-t-2 2xl:border-r-2 lg:border-r-[1.5px]  border-r-2  border-dashed border-[#262626]'>
                    <h3 className="font-medium text-dark-10 dark:text-white 2xl:text-[30px] lg:text-[26px] text-2xl ">CLOTHES COLLECTION</h3>
                    <ShopNowBtn btnTitle="View All" showIcon cart={false} path="#" />
                </motion.div>
                <div className="w-full ">
                    <div className="w-full max-lg:hidden grid grid-cols-3">
                        {
                        cards.filter((item) => item.type === "Womenswear"|| item.type === "Menswear"|| item.type==="Kidswear").slice(0, 3).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full max-md:hidden lg:hidden grid grid-cols-2">
                        {
                        cards.filter((item) => item.type === "Womenswear"|| item.type === "Menswear"|| item.type==="Kidswear").slice(0, 2).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full md:hidden ">
                        {
                        cards.filter((item) => item.type === "Womenswear"|| item.type === "Menswear"|| item.type==="Kidswear").slice(0, 1).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className='flex items-center justify-between 2xl:p-[30px] p-6 w-full 2xl:border-t-2 2xl:border-b-2 lg:border-t-[1.5px] lg:border-b-[1.5px] border-b-2 border-t-2 2xl:border-r-2 lg:border-r-[1.5px]  border-r border-dashed border-[#262626]'>
                    <h3 className="font-medium text-dark-10 dark:text-white 2xl:text-[30px] lg:text-[26px] text-2xl ">ACCESSORIES</h3>
                    <ShopNowBtn btnTitle="View All" showIcon cart={false} path="#" />
                </motion.div>
                <div className="w-full ">
                    <div className="w-full max-lg:hidden grid grid-cols-3">
                        {
                        cards.filter((item) => item.type === "Accessories").slice(0, 3).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full max-md:hidden lg:hidden grid grid-cols-2">
                        {
                        cards.filter((item) => item.type === "Accessories").slice(0, 2).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full md:hidden">
                        {
                        cards.filter((item) => item.type === "Accessories").slice(0, 1).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <motion.div  initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}}  className='flex items-center justify-between 2xl:p-[30px] p-6 w-full 2xl:border-t-2 2xl:border-b-2 lg:border-t-[1.5px] lg:border-b-[1.5px] border-b-2 border-t-2 2xl:border-r-2 lg:border-r-[1.5px]  border-r border-dashed border-[#262626]'>
                    <h3 className="font-medium text-dark-10 dark:text-white 2xl:text-[30px] lg:text-[26px] text-2xl ">BAGS AND HANDBAGS</h3>
                    <ShopNowBtn btnTitle="View All" showIcon cart={false} path="#" />
                </motion.div>
                <div className="w-full">
                    <div className="w-full max-lg:hidden grid grid-cols-3">
                        {
                        cards.filter((item) => item.type === "Hand Bag").slice(0, 3).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full max-md:hidden lg:hidden grid grid-cols-2">
                        {
                        cards.filter((item) => item.type === "Hand Bag").slice(0, 2).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                    <div className="w-full md:hidden">
                        {
                        cards.filter((item) => item.type === "Hand Bag").slice(0, 1).map((item, index) =>
                            <ProductCard image={item.image} type={item.type} title={item.title} price={item.price} fit={item.fit} id={item.id} key={index} />
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
