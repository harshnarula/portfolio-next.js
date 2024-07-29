import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa6";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { SiThealgorithms } from "react-icons/si";


export default function Main() {
  return (
    <>
      
      <div className="flex flex-col justify-center items-center w-screen h-auto my-[20px]">
        <p className="text-white text-lg lg:text-2xl font-bold animate-bounce font-edu">
         { `Hello,I'm Harsh`} <span className="text-[#54107c]">Narula</span>
        </p>
        <p className="text-white text-md lg:text-2xl animate-flip font-edu">
          {`I'm a Full Stack`}<span className="text-[#7315ab]"> Web Developer</span>
        </p>
      </div>
      <div className="hidden lg:flex flex-row justify-center items-start w-screen h-auto py-[10px] ">
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <CgWebsite className="bg-[#54107c] h-[60px] w-[60px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-xl font-edu">Web Development</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] font-edu">
            Capable of creating full-stack web applications with fast, dynamic,
            and interactive user interfaces built on a scalable back-end
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <FaDatabase className="bg-[#54107c] h-[60px] w-[60px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-xl font-edu">Database Management</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] font-edu">
            Able to convert real-world entities into database models and manage
            them
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <SiThealgorithms className="bg-[#54107c] h-[60px] w-[60px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-xl font-edu">Logic & Algorithm</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] font-edu">
            Proficient in developing efficient logic and algorithms to solve
            complex problems, ensuring optimal performance and reliability
            across applications.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <SiGooglecontaineroptimizedos className="bg-[#54107c] h-[60px] w-[60px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-xl font-edu">Code Optimization</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] font-edu">
            Expert in optimizing code for high-performance software solutions.
          </p>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden flex-col justify-center items-center w-screen h-auto py-[10px] ">
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
            <CgWebsite className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
            <p className="text-white text-lg font-edu">Web Development</p>
            <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
              Capable of creating full-stack web applications with fast,
              dynamic, and interactive user interfaces built on a scalable
              back-end
            </p>
          </div>
          <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
            <FaDatabase className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
            <p className="text-white text-lg font-edu">Database Management</p>
            <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
              Able to convert real-world entities into database models and
              manage them
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
            <SiThealgorithms className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
            <p className="text-white text-lg font-edu">Logic & Algorithm</p>
            <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
              Proficient in developing efficient logic and algorithms to solve
              complex problems, ensuring optimal performance and reliability
              across applications.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
            <SiGooglecontaineroptimizedos className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
            <p className="text-white text-lg font-edu">Code Optimization</p>
            <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
              Expert in optimizing code for high-performance software solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center w-screen h-auto py-[10px] ">
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <CgWebsite className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-lg font-edu">Web Development</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
            Capable of creating full-stack web applications with fast, dynamic,
            and interactive user interfaces built on a scalable back-end
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <FaDatabase className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-lg font-edu">Database Management</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
            Able to convert real-world entities into database models and manage
            them
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <SiThealgorithms className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-lg font-edu">Logic & Algorithm</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
            Proficient in developing efficient logic and algorithms to solve
            complex problems, ensuring optimal performance and reliability
            across applications.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
          <SiGooglecontaineroptimizedos className="bg-[#54107c] h-[40px] w-[40px] rounded-lg text-white  p-[5px] m-[5px]" />
          <p className="text-white text-lg font-edu">Code Optimization</p>
          <p className="text-[#7315ab] text-center w-[300px] m-[5px] text-sm font-edu">
            Expert in optimizing code for high-performance software solutions.
          </p>
        </div>
      </div>
    </>
  );
}
