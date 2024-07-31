import { main } from "../data";

export default function Main() {
  return (
    <>
      
      <div className="flex flex-col justify-center items-center w-screen h-auto my-[20px]">
        <p className="text-white text-lg lg:text-2xl font-bold animate-bounce font-openSans">
         { `Hello,I'm Harsh`} <span className="text-[#0d6efd]">Narula</span>
        </p>
        <p className="text-white text-md lg:text-2xl animate-flip font-openSans">
          {`I'm a Full Stack`}<span className="text-[#0d6efd]"> Web Developer</span>
        </p>
      </div>
      <div className="hidden lg:flex flex-row justify-center items-start w-screen h-auto py-[10px] ">
        {main.map((content) => (
                  <div key = {content.id} className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
                    {content.icon}
                  <p className="text-white text-xl font-openSans">{content.name}</p>
                  <p className="text-[#0d6efd] text-center w-[300px] m-[5px] font-openSans">
                    {content.desc}
                  </p>
                </div>
        ))}
        
      </div>
      <div className="hidden md:flex lg:hidden flex-col justify-center items-center w-screen h-auto py-[10px] ">
        <div className="flex flex-row justify-center items-start">
        {main.map((content) => 
          content.id <= 2 ? (
              <div key = {content.id} className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
              {content.mobileIcon}
              <p className="text-white text-lg font-openSans">{content.name}</p>
              <p className="text-[#0d6efd] text-center w-[300px] m-[5px] text-sm font-openSans">
                {content.desc}
              </p>
            </div>
    ) : null
        )}
          
        </div>
        <div className="flex flex-row justify-center items-start">
        {main.map((content) => 
          content.id > 2 ? (
              <div key = {content.id} className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
              {content.mobileIcon}
              <p className="text-white text-lg font-openSans">{content.name}</p>
              <p className="text-[#0d6efd] text-center w-[300px] m-[5px] text-sm font-openSans">
                {content.desc}
              </p>
            </div>
    ) : null
        )}
          
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center w-screen h-auto py-[10px] ">
      {main.map((content) => (
                  <div key = {content.id} className="flex flex-col justify-center items-center m-[5px] animate-scaleUp">
                  {content.mobileIcon}
                  <p className="text-white text-lg font-openSans">{content.name}</p>
                  <p className="text-[#0d6efd] text-center w-[300px] m-[5px] text-sm font-openSans">
                    {content.desc}
                  </p>
                </div>
        ))}

      </div>
    </>
  );
}
