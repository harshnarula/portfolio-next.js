'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Projects from "./Projects/page";
import Social from "./Social/page";
import Contact from "./Contact/page";
import Navbar from "./Navbar/page";
import Techskill from "./Techskill/page";
import Main from "./Main/page";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Main />
      <Techskill />
      <Projects />
      <Social />
      <Contact />
    </>
  );
}
