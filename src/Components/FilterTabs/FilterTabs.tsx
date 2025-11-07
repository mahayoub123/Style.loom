import { useState } from "react"
export default function FilterTabs({ tabs, action }: { tabs: string[],action:(name:string)=>void }) {
    const [active,setActive]=useState("All")
    return (
        <div className="flex lg:gap-3.5 gap-2.5">
            {
                tabs.map((item, index) =>
                    <button  onClick={()=>{action(item); setActive(item)}} key={index} className={`${active==item ? 'bg-brown-60 dark:bg-brown-70  text-white dark:text-dark-06 border-0 ':'text-[#B3B3B2] border'} cursor-pointer  border-dark-20 border-dashed 2xl:px-6 2xl:py-3.5 px-5 py-3 2xl:text-[18px] text-[14px] leading-[150%] rounded-[12px] `}>{item}</button>
                )
            }

        </div>
    )
}
