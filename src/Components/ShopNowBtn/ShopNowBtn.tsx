import { useNavigate } from "react-router-dom"

export interface props {
    path: string;
    btnTitle: string;
    showIcon?: boolean;
    cart?: boolean;
    width?: string;
}
export default function ShopNowBtn({ path, btnTitle, showIcon, width, cart }: props) {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(path)} className={`cursor-pointer whitespace-nowrap relative ${width} rounded-[12px] border-2 border-dashed border-[#404040] 2xl:py-[18px] 2xl:px-6 py-3.5 px-5 bg-brown-60 dark:bg-dark-12 text-white h-fit`}>
            <div className="flex justify-center items-center gap-1">
                {cart && <img src="/assets/Images/images/cart.svg" alt="" />}
                <p className="2xl:text-lg text-sm leading-[150%] text-white">{btnTitle}</p>
                {showIcon && <img src="/assets/Images/images/linkArrow.svg" className="2xl:size-[16.5px] size-[13.75px]" alt="" />}
            </div>
            <div className="size-[16.5px] 2xl:rounded-tl-[12px] rounded-tl-[8px] absolute top-0 left-0 border-t border-l border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-tr-[12px] rounded-tr-[8px] absolute top-0 right-0 border-t border-r border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-bl-[12px] rounded-bl-[8px] absolute bottom-0 left-0 border-b border-l border-brown-60 "></div>
            <div className="size-[16.5px] 2xl:rounded-br-[12px] rounded-br-[8px] absolute bottom-0 right-0 border-b border-r border-brown-60 "></div>
        </button>
    )
}
