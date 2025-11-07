import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { HiSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import { IoClose} from "react-icons/io5";
export default function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [menuOpen , setMenuOpen] = useState<boolean> (false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(theme === 'dark' || (!theme && systemDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  return (
    <nav className=" bg-white dark:bg-dark-06 fixed z-[100] w-full 2xl:px-[162px] lg:px-[80px] md:px-10 px-4 2xl:py-[30px] lg:py-6 md:py-6 py-5 flex justify-between items-center ">
      <div className="2xl:flex lg:flex md:flex hidden justify-between items-center w-full relative after:content-[''] after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:w-full after:border-b-2 after:border-dashed after:border-dark-15">
      <div className=" flex justify-start items-center gap-[14px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `2xl:text-lg lg:text-sm md:text-sm text-sm font-mono rounded-xl 2xl:px-[30px] lg:px-6 md:px-6 px-6 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] transition-all duration-200 ${
              isActive
                ? "bg-brown-60 dark:bg-dark-10 text-white border-none"
                : "bg-transparent text-neutral-500 border border-dashed border-dark-15"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `2xl:text-lg lg:text-sm md:text-sm text-sm  font-mono rounded-xl 2xl:px-6 lg:px-5 md:px-5 px-5 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] transition-all duration-200 ${
              isActive
                ? "bg-brown-60 dark:bg-dark-10  text-white border-none"
                : "bg-transparent text-neutral-500 border border-dashed border-dark-15"
            }`
          }
        >
          Products
        </NavLink>
      </div>
      <div>
        <img src="/assets/Images/Home page photos/whiteLogo.svg" className="hidden dark:block" />
        <img src="/assets/Images/Home page photos/blackLogo.svg" className="block dark:hidden"/>
      </div>
      <div className="flex justify-start items-center gap-[14px]">
        <span onClick={()=> setDarkMode((prev)=> !prev)}>{darkMode?( <IoMdMoon className="w-6 h-6 text-white" />):(<HiSun className="w-6 h-6 text-dark-06" />)}</span>
        <button className=" rounded-xl 2xl:p-[18px] lg:p-[14px] md:p-[14px] p-[14px] bg-dark-20 dark:bg-dark-10">
          <HiShoppingCart className="w-6 h-6 text-white " />
        </button>
        <button className="bg-brown-60 text-white dark:text-dark-06 2xl:text-lg lg:text-sm md:text-sm text-sm  font-normal font-mono rounded-xl px-[30px] 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] ">
          <NavLink to={"/contact"}>Contact</NavLink>
        </button>
      </div>
      
      </div>
     <div className="2xl:hidden lg:hidden md:hidden flex justify-between items-center w-full relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:border-b-[5.5px] after:border-dashed after:border-dark-15">
      <div>
      <img src="/assets/Images/Home page photos/whiteLogo.svg" className="hidden dark:block" />
       <img src="/assets/Images/Home page photos/blackLogo.svg" className="block dark:hidden"/>
      </div>
      <div className="p-[10px] flex justify-center items-center w-14 h-14 rounded-[10px] bg-brown-70">
       <HiBars3BottomRight onClick={()=> setMenuOpen(true)} className="w-7 h-7" />
      </div>
     </div>
{ menuOpen &&(
     <div className="bg-brown-70 dark:bg-dark-06 fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-14  z-50 transition-all">
     
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl font-semibold font-mono  ${
              isActive
                ? " text-dark-10 dark:text-white font-bold border-b border-brown-60"
                : " text-neutral-500 "
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `text-2xl font-mono  ${
              isActive
                ? "text-white font-bold border-b border-brown-60"
                : " text-neutral-500 "
            }`
          }
        >
          Products
        </NavLink>
      
      
      
        <span onClick={()=> setDarkMode((prev)=> !prev)}>{darkMode?( <IoMdMoon className="w-6 h-6 text-white" />):(<HiSun className="w-6 h-6 text-dark-06" />)}</span>
        <button className=" rounded-xl 2xl:p-[18px] lg:p-[14px] md:p-[14px] p-[14px] bg-dark-10">
          <HiShoppingCart className="w-6 h-6 text-white " />
        </button>
        <button className="bg-brown-60 text-dark-06 text-2xl  font-normal font-mono rounded-xl px-[30px] 2xl:py-[18px] lg:py-[14px] md:py-[14px] py-[14px] ">
          <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </button>
      
      <IoClose
            className="text-3xl absolute bottom-10 cursor-pointer text-black dark:text-white"
            onClick={() => setMenuOpen(false)}
          />
     </div>
)}
    </nav>
  );
}
