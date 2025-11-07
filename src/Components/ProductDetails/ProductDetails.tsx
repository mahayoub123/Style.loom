import { useDispatch, useSelector } from "react-redux";
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import type { RootState } from "../../redux/store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setOpenedProduct } from "../../redux/slices/ProductSlice";
import { motion } from "framer-motion";

export default function ProductDetails() {
    const product = useSelector((state: RootState) => state.products.openedProduct)
   
    const {id}= useParams<{id:string}>();
    const dispatch=useDispatch()
    useEffect(()=>{
        if (id){
          dispatch(setOpenedProduct(Number(id)))  
        }
    },[id,dispatch])
    const ratingPercentage= (rating:number)=>{
        if (Math.floor(rating||4)==0)
            return ["10%", "20%", "30%", "40%", "80%"]
        else if(Math.floor(rating||4)==1)
            return ["10%", "20%", "30%", "80%", "90%"]
        else if(Math.floor(rating||4)==2)
            return ["10%", "20%", "30%", "80%", "10%"]
        else if(Math.floor(rating||4)==3)
            return ["10%", "50%", "80%", "20%", "10%"]
        else 
            return ["90%", "50%", "30%", "10%", "10%"]
    
    } 
    const ratings:Array<string>= ratingPercentage(product?.rating||4)
    return (
        <div className="xl:divide-x-2 xl:divide-y-2 lg:divide-y-[1.5px] lg:divide-x-[1.5px] divide-x-[1px] divide-y-[1px] divide-dashed divide-[#262626] 2xl:rounded-[20px] lg:rounded-2xl rounded-[14px] xl:border-2 lg:border-[1.5px] border border-dashed border-[#262626] w-full">
            <div className="w-full flex justify-between gap-10 flex-wrap  2xl:p-20 lg:p-[60px] py-[30px] px-5 ">
                <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="flex flex-col 2xl:gap-3.5 lg:gap-2.5 gap-1.5">
                    <h1 className="font-medium 2xl:text-5xl md:text-[38px] text-[28px] text-dark-20 dark:text-white">{product?.title}</h1>
                    <div className="flex xl:gap-4 gap-3 items-center">
                        <p className="2xl:text-[22px] lg:text-[18px] text-[14px] leading-[150%] text-[#676665]">{product?.fit}</p>
                        <div className="bg-[#152011] rounded-[100px] xl:py-2 xl:px-5  lg:px-4 py-1.5 px-2.5 xl:text-[18px] lg:text-[14px] text-[12px] leading-[150%] text-[#8AF265]">In stock</div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="flex gap-5">
                    <ShopNowBtn  cart={true} btnTitle="Add To Cart" path="" width="w-full" />
                    <ShopNowBtn  cart={true} btnTitle="Add To Cart" path="" />
                </motion.div>
            </div>
            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full max-lg:flex-col flex 2xl:gap-[30px] lg:gap-5">
                <div className="h-full w-full 2xl:py-[50px] 2xl:px-[30px] lg:p-[30px] p-2.5 xl:border-r-2 lg:border-r-[1.5px] border-r border-dashed border-[#262626] ">
                    <div className="flex items-center justify-center overflow-hidden w-full     2xl:max-h-[604px] lg:max-h-[451px] max-h-[210px]">
                        <img src={product?.image} className="h-full w-full " />
                    </div>
                </div>
                <div className="max-lg:grid max-lg:grid-cols-2 max-lg:w-full lg:w-[518px]   lg:flex-col lg:flex 2xl:gap-[30px] gap-5 2xl:py-[50px]  lg:py-[30px] p-2.5 ">
                    <div className="overflow-hidden flex justify-center items-center w-full 2xl:max-h-[287px] lg:max-h-[215.5px] max-h-[133px]">
                        <img src={product?.image} className="w-full  " />
                    </div>
                    <div className="overflow-hidden flex justify-center items-center w-full 2xl:max-h-[287px] lg:max-h-[215.5px] max-h-[133px]">
                        <img src={product?.image} className="w-full  " />
                    </div>
                </div>

            </motion.div>
            <div className="flex max-lg:flex-col w-full h-max xl:divide-x-2  lg:divide-x-[1.5px] divide-x-[1px]  divide-dashed divide-[#262626]">
                <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full  lg:divide-y-[1.5px] divide-y-[1px] divide-dashed divide-[#262626]">
                    <div className="w-full 2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <h3 className="font-medium 2xl:text-3xl lg:text-2xl text-[20px]  text-dark-20 dark:text-white  ">Materials, Care and origin</h3>
                    </div>
                    <div className="w-full 2xl:p-[50px] lg:p-10 py-[30px] px-6 flex flex-col 2xl:gap-4 lg:gap-3 gap-2.5">
                        <h3 className="font-medium 2xl:text-[20px] lg:text-[18px] text-[16px] text-brown-60 dark:text-white  ">Join Life</h3>
                        <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">Tracing its roots back to ancient Greek draped garments, has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.</p>
                    </div>
                    <div className="w-full 2xl:p-[50px] lg:p-10 py-[30px] px-6 flex flex-col 2xl:gap-[50px] lg:gap-[30px] gap-5">
                        <div className="flex flex-col 2xl:gap-4 lg:gap-3 gap-2.5">
                            <h3 className="font-medium 2xl:text-[20px] lg:text-[18px] text-[16px] text-brown-60 dark:text-white  ">Materials</h3>
                            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] ">Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.</p>
                        </div>
                        <div className={`2xl:w-[638px] 2xl:h-[415px] lg:w-[520px] lg:h-[311px] w-[310px] h-[175px] overflow-hidden flex justify-center items-center `}>
                            <img src={product?.image} className="scale-[2500%]" alt="" />
                        </div>
                    </div>
                </motion.div>
                <div className="w-full  lg:divide-y-[1.5px] divide-y-[1px] divide-dashed divide-[#262626]">
                    <div className="w-full flex flex-col 2xl:gap-[50px] lg:gap-[30px] gap-5 2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <motion.h3 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="font-medium 2xl:text-3xl lg:text-2xl text-[20px] text-dark-20 dark:text-white ">Features</motion.h3>
                        <motion.ul initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%] list-disc decoration-1">
                            <li>Distressed detailing for a rugged look</li>
                            <li>Button-up front closure with engraved metal buttons</li>
                            <li>Two chest pockets with buttoned flaps</li>
                            <li>Two side pockets for added functionality</li>
                            <li>Adjustable buttoned cuffs for a personalized fit</li>
                            <li>Back waist tabs for customizable styling</li>
                        </motion.ul>
                    </div>
                    <div className="w-full flex flex-col 2xl:gap-5 gap-4 2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <motion.h3 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="font-medium 2xl:text-[20px] lg:text-[18px] text-[16px] text-brown-60 dark:text-white  ">Price</motion.h3>
                        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex-wrap flex justify-between items-center max-lg:flex-col gap-5">
                            <div className="flex items-center xl:gap-4 gap-3">
                                <h3 className="font-medium 2xl:text-3xl lg:text-2xl text-[20px] text-dark-20 dark:text-white  ">${product?.price}</h3>
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">( MRP incl. of all taxes )</p>
                            </div>
                            <div className='max-lg:hidden'><ShopNowBtn  btnTitle='Add To Cart' path='' cart={true} /></div>
                            <div className='min-lg:hidden w-full'><ShopNowBtn width="w-full" btnTitle='Add To Cart' path='' cart={true} /></div>
                        </motion.div>
                    </div>
                    <div className="w-full flex flex-col 2xl:gap-5 gap-4 2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <motion.h3 initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="font-medium 2xl:text-[20px] lg:text-[18px] text-[16px] text-brown-60 dark:text-white  ">Available Sizes</motion.h3>
                        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="lg:gap-4 gap-3 flex flex-wrap ">
                            <div className="rounded-[100px] lg:py-2 lg:px-[34px] py-1.5 px-5 bg-[#1A1A1A] text-white font-mono lg:text-[18px] text-[16px] ">S</div>
                            <div className="rounded-[100px] lg:py-2 lg:px-[34px] py-1.5 px-5 bg-[#1A1A1A] text-white font-mono lg:text-[18px] text-[16px] ">M</div>
                            <div className="rounded-[100px] lg:py-2 lg:px-[34px] py-1.5 px-5 bg-[#1A1A1A] text-white font-mono lg:text-[18px] text-[16px] ">L</div>
                            <div className="rounded-[100px] lg:py-2 lg:px-[34px] py-1.5 px-5 bg-[rgb(26,26,26)] text-white font-mono lg:text-[18px] text-[16px] ">XL</div>
                        </motion.div>

                    </div>
                    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full 2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <h3 className="font-medium 2xl:text-[20px] lg:text-[18px] text-[16px] text-brown-60 dark:text-white">Ratings & Review</h3>
                    </motion.div>
                    <div className="w-full overflow-hidden flex justify-center  flex-wrap max-lg:flex-col max-lg:items-center 2xl:gap-[50px] lg:gap-[30px] gap-5  2xl:p-[50px] lg:p-10 py-[30px] px-6">
                        <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="flex items-center lg:flex-col 2xl:gap-2.5 lg:gap-2 gap-5  2xl:w-[177px] lg:w-[145px]">
                            <h2 className="font-mono font-medium 2xl:text-5xl md:text-[38px] text-[28px]  text-dark-20 dark:text-white">{product?.rating}</h2>
                            <div className="flex 2xl:gap-[5px] gap-1">
                                {
                                    Array.from({ length: Math.ceil(product?.rating || 4.5) }, (_, i) => i).map((index) =>
                                        <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" key={index} alt="" />
                                    )
                                }
                            </div>
                            <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">49 Ratings</p>
                        </motion.div>
                        <div className="flex flex-col 2xl:gap-4 lg:gap-3 gap-2.5">
                            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex 2xl:gap-5 lg:gap-4 gap-3 items-center">
                                <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" alt="" />
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">05</p>
                                <div className="2xl:w-[326px] lg:max-w-[275px] md:w-[175px] w-[252px] 2xl:p-2.5 lg:p-1.5 rounded-[100px] border border-[#262626] bg-[#1A1A1A]">
                                    <div style={{ width: ratings[0] }} className={`2xl:h-2 h-1 rounded-[100px] bg-[#AE9B84]`}></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex 2xl:gap-5 lg:gap-4 gap-3 items-center">
                                <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" alt="" />
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">04</p>
                                <div className="2xl:w-[326px] lg:max-w-[275px] md:w-[175px]  w-[252px] 2xl:p-2.5 lg:p-1.5 rounded-[100px] border border-[#262626] bg-[#1A1A1A]">
                                    <div style={{ width: ratings[1] }} className={` 2xl:h-2 h-1 rounded-[100px] bg-[#AE9B84]`}></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex 2xl:gap-5 lg:gap-4 gap-3 items-center">
                                <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" alt="" />
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">03</p>
                                <div className="2xl:w-[326px] lg:max-w-[275px] md:w-[175px] w-[252px] 2xl:p-2.5 lg:p-1.5 rounded-[100px] border border-[#262626] bg-[#1A1A1A]">
                                    <div style={{ width: ratings[2] }} className={` 2xl:h-2 h-1 rounded-[100px] bg-[#AE9B84]`}></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex 2xl:gap-5 lg:gap-4 gap-3 items-center">
                                <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" alt="" />
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">02</p>
                                <div className="2xl:w-[326px] lg:max-w-[275px] md:w-[175px] w-[252px] 2xl:p-2.5 lg:p-1.5 rounded-[100px] border border-[#262626] bg-[#1A1A1A]">
                                    <div style={{ width: ratings[3] }} className={` 2xl:h-2 h-1 rounded-[100px] bg-[#AE9B84]`}></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}} className="w-full flex  2xl:gap-5 lg:gap-4 gap-3 items-center">
                                <img src="/assets/Images/images/star.svg" className="2xl:size-6 lg:size-5 size-[18px]" alt="" />
                                <p className="text-[#81807E] 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[150%]">01</p>
                                <div className="2xl:w-[326px] lg:max-w-[275px] md:w-[175px] w-[252px] 2xl:p-2.5 lg:p-1.5 rounded-[100px] border border-[#262626] bg-[#1A1A1A]">
                                    <div style={{ width: ratings[4] }} className={` 2xl:h-2 h-1 rounded-[100px] bg-[#AE9B84]`}></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
