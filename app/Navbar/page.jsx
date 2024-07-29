"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { PiHamburgerDuotone } from "react-icons/pi";

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const navRef = useRef();

  



  return (
    <>
    <nav id ="Navbar" className="hidden lg:flex flex-row flex-start lg:justify-center w-screen h-auto  ml-[10px] lg:ml-[0px]">
      <div  className = "flex flex-col lg:flex-row">
        <Link
            href="#Techskill"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
        Skills
        </Link>
        <Link
            href="#Projects"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
        Projects
        </Link>
        <Link
            href="#Social"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
            Social
        </Link>
        <Link
            href="#Contact"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
            Contact
        </Link>
      </div>
    </nav>
    <nav id ="Navbar" className="flex lg:hidden flex-col flex-start justify-center w-screen h-auto " >
      
      <div className=" flex justify-center items-center top-0 right-0 w-[40px] h-[40px] m-[10px] " onClick={() => setNav(!nav)}>
        <PiHamburgerDuotone className="text-white text-2xl" />
      </div>
      {nav &&
        <div  className = "flex flex-col bg-[#54107c]">
        <Link
            href="#Techskill"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
        Skills
        </Link>
        <Link
            href="#Projects"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
        Projects
        </Link>
        <Link
            href="#Social"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
            Social
        </Link>
        <Link
            href="#Contact"
            passHref
            className="text-white  font-openSans hover:text-[#7315ab]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
        >
            Contact
        </Link>
        </div> 
      }
      
    </nav>
    </>
  );
}
