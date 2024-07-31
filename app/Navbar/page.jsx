"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { navlinks } from "../data";
import { PiHamburgerDuotone } from "react-icons/pi";

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const navRef = useRef();

  



  return (
    <>
    <nav id ="Navbar" className="hidden lg:flex flex-row flex-start lg:justify-center w-screen h-auto  ml-[10px] lg:ml-[0px]">
      <div  className = "flex flex-col lg:flex-row">
        {navlinks.map((nav) =>(
          <Link
              href={nav.href}
              passHref
              key = {nav.id}
              className="text-white  font-openSans hover:text-[#0d6efd]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
          >
          {nav.name}
          </Link>
        ))}
        
      </div>
    </nav>
    <nav id ="Navbar" className="flex lg:hidden flex-col flex-start justify-center w-screen h-auto " >
      
      <div className=" flex justify-center items-center top-0 right-0 w-[40px] h-[40px] m-[10px] " onClick={() => setNav(!nav)}>
        <PiHamburgerDuotone className="text-white text-2xl" />
      </div>
      
      {nav &&
        <div  className = "flex flex-col bg-[#0d6efd]">
          {navlinks.map((nav) =>(
          <Link
              href={nav.href}
              passHref
              key = {nav.id}
              className="text-white  font-openSans hover:text-[#0d6efd]  duration-300 text:xl md:text-2xl m-[2px] lg:m-[20px]"
          >
          {nav.name}
          </Link>
        ))}
        </div> 
      }
      
    </nav>
    </>
  );
}
