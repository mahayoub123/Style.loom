
import ShopNowBtn from '../ShopNowBtn/ShopNowBtn'
import { useDispatch } from 'react-redux'
import { setOpenedProduct } from '../../redux/slices/ProductSlice'
import { motion } from "framer-motion";
export default function ProductCard({id,image,type,title,fit,price}:{id:number,image:string,type:string,title:string,fit:string,price:number}) {
    const dispatch=useDispatch()
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.9,ease:"easeOut"}} viewport={{once:false,amount:0.2}}  className='2xl:w-full md:w-full hover:bg-[#2d2d2d] ease-in-out duration-150 2xl:h-[639px] lg:h-[491px] h-[474px] lg: 2xl:p-[30px] xl:border-r-2 lg:border-r-[1.5px]  border-r border-dashed border-[#262626] p-5 lg:pb-[30px] flex flex-col 2xl:gap-[30px] p- lg:gap-6 gap-5 '>
        <div onClick={()=>{dispatch(setOpenedProduct(id))}} className='overflow-hidden 2xl:rounded-t-[50px] lg:rounded-t-[30px] rounded-t-[20px] flex justify-center items-center  2xl:h-[386px] lg:h-[219px] h-[220px]'>
            <img src={image} className='object-cover 2xl:w-[472px] lg:w-[386.67px]  md:w-full w-full' />
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='bg-dark-10 2xl:py-2.5 2xl:px-4 py-2 px-3 border-2 border-dashed border-dark-15 rounded-[100px] 2xl:text-[18px] leading-[150%] text-[#B3B3B2] text-[14px] '>{type}</div>

            <div onClick={()=>dispatch(setOpenedProduct(id))} className='max-lg:hidden'><ShopNowBtn  btnTitle='Shop Now' path={`/products/${id}`} showIcon={true} /></div>
        </div>
        <div className='w-full flex flex-col 2xl:gap-3.5 gap-2.5'>
            <h3 className='font-medium 2xl:text-2xl text-[18px] leading-[150%] text-dark-20 dark:text-white '>{title}</h3>
            <div className='flex 2xl:gap-5 lg:gap-4 gap-2.5'>
                <div className='flex 2xl:gap-2 gap-1.5 items-center'>
                    <span className='2xl:text-[18px] text-[14px] text-[#81807E] leading-[150%]'>Fit</span>
                    <div className='size-1 bg-[#81807E] rounded-[100px]'></div>
                    <span className='font-medium 2xl:text-[20px] lg:text-[16px] text-[14px] text-brown-60 dark:text-[#CCCCCC] leading-[150%]'>{fit}</span>
                </div>
                <div className='flex 2xl:gap-2 gap-1.5 items-center'>
                    <span className='2xl:text-[18px] text-[14px] text-[#81807E] leading-[150%]'>Price</span>
                    <div className='size-1 bg-[#81807E] rounded-[100px]'></div>
                    <span className='font-medium 2xl:text-[20px] lg:text-[16px] text-[14px]  text-brown-60 dark:text-[#CCCCCC] leading-[150%]'>${price}</span>
                </div>
            </div>
        </div>
        <div className='min-lg:hidden w-full'><ShopNowBtn width='w-full'  btnTitle='Shop Now' path='' cart={false} /></div>
    </motion.div>
  )
}
