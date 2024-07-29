import Image from "next/image";
import Projects from "./Projects/page";
import Social from "./Social/page";
import Contact from "./Contact/page"
import Navbar from "./Navbar/page";
import Techskill from "./Techskill/page";
import Main from "./Main/page";


export default function Home() {
  return(
    <>
    
    <Navbar />
    <Main />
    <Techskill/>
    <Projects />
    <Social />
    <Contact />
    </>
    

  )
}
