"use client";
import { useState, useEffect } from "react";
import { tech, lang, design, } from "../data";

export default function Techskill() {
  const [div, setDiv] = useState(false);
  const [div1, setDiv1] = useState(false);

  let halfTech = Math.ceil(tech.length / 2);
  let halfLang = Math.ceil(tech.length / 2);

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setDiv(true);
    }, 6100);

    return () => clearTimeout(setTimer);
  }, []);

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setDiv1(true);
    }, 12100);

    return () => clearTimeout(setTimer);
  }, []);

  return (
    <div
      id="Techskill"
      className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-screen h-auto"
    >
      <div className="hidden lg:flex flex-col justify-start items-start w-auto h-[270px] ">
        <p className="text-white w-[60px] border-b-2 hover:border-[#54107c] duration-300 text-2xl m-[20px] font-edu">
          Skills
        </p>
        <div className="flex flex-row justify-start items-center">
          <p className="text-white font-bold text-xl  m-[10px] animate-fadeIn font-edu">
            Languages
          </p>
          <p className="text-white  m-[10px] animate-fadeIn">-</p>
          {lang.map((languages, index) => (
            <p
              key={index}
              className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
            >
              {languages.title}
            </p>
          ))}
        </div>
        <div className="flex flex-row  justify-start items-center">
          <p className="text-white font-bold text-xl  m-[10px] animate-fadeIn font-edu">
            Frameworks
          </p>
          <p className="text-white  m-[10px] animate-fadeIn">-</p>
          {tech.map((framework, index) => (
            <p
              key={index}
              className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
            >
              {framework.title}
            </p>
          ))}
        </div>
        <div className="flex flex-row  justify-start items-center">
          <p className="text-white font-bold text-xl  m-[10px] animate-fadeIn font-edu">
            Design Tools
          </p>
          <p className="text-white  m-[10px] animate-fadeIn">-</p>
          {design.map((design, index) => (
            <p
              key={index}
              className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
            >
              {design.title}
            </p>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-start items-center w-auto h-auto ">
        <p className="text-white w-[60px] border-b-2 hover:border-[#54107c] duration-300 text-2xl m-[20px] font-edu">
          Skills
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-bold text-sm md:text-md  m-[4px] animate-fadeIn font-edu">
            Languages
          </p>

          <div className="flex flex-row">
            {lang.map((languages, index) =>
              languages.id <= halfLang ? (
                <p
                  key={index}
                  className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
                >
                  {languages.title}
                </p>
              ) : null
            )}
          </div>
          <div className="flex flex-row">
          {lang.map((languages, index) =>
              languages.id > halfLang ? (
                <p
                  key={index}
                  className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
                >
                  {languages.title}
                </p>
              ) : null
            )}
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <p className="text-white font-bold text-sm md:text-md  m-[4px] animate-fadeIn font-edu">
            Frameworks
          </p>

          <div className="flex flex-row">
          {tech.map((tech, index) =>
              tech.id <= halfTech ? (
                <p
                  key={index}
                  className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
                >
                  {tech.title}
                </p>
              ) : null
            )}
          </div>
          <div className="flex flex-row">
          {tech.map((tech, index) =>
              tech.id > halfTech ? (
                <p
                  key={index}
                  className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
                >
                  {tech.title}
                </p>
              ) : null
            )}
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <p className="text-white font-bold text-sm md:text-md  m-[4px] animate-fadeIn font-edu">
            Design Tools
          </p>
          {design.map((design, index) => (
            <p
              key={index}
              className="text-[#7315ab] text-xl  m-[10px] animate-slideIn hover:text-white duration-300 hover:cursor-default font-edu"
            >
              {design.title}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-end w-[300px] h-[270px] rounded-x-[60px] m-[10px] lg:m-[0px]  rounded-b-[60px] border-x-4 border-[#54107c] border-b-4">
        <div className="flex flex-col">
          {div1 ? (
            <div className="flex flex-row">
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall3 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/figma.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall2 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/express-js.png"
                  className="scale-50 bg-white"
                  alt=""
                />
              </div>
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/nodejs.png"
                  className="scale-50"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {div ? (
            <div className="flex flex-row">
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall3 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/css3.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall2 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/javascript.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/python.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall4 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png"
                  className="scale-50"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex flex-row">
            <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall3  border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/react-native.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall2   border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/django.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall   border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/fluent/40/000000/mysql-logo.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[60px] h-[60px] rounded-[32px] animate-fall4  border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/html-5.png"
                className="scale-50 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-end w-[200px] h-[270px] rounded-x-[20px] m-[10px] lg:m-[0px]  rounded-b-[20px] border-x-4 border-[#54107c] border-b-4">
        <div className="flex flex-col">
          {div1 ? (
            <div className="flex flex-row">
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall3 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/figma.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall2 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/express-js.png"
                  className="scale-50 bg-white"
                  alt=""
                />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/nodejs.png"
                  className="scale-50"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {div ? (
            <div className="flex flex-row">
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall3 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/css3.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall2 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/javascript.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/40/000000/python.png"
                  className="scale-50"
                  alt=""
                />
              </div>
              <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall4 border-2 border-white m-[2px]">
                <img
                  src="https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png"
                  className="scale-50"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex flex-row">
            <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall3  border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/react-native.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall2   border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/django.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall   border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/fluent/40/000000/mysql-logo.png"
                className="scale-50 "
                alt=""
              />
            </div>
            <div className="flex w-[40px] h-[40px] rounded-[32px] animate-fall4  border-2 border-white m-[2px]">
              <img
                src="https://img.icons8.com/color/40/000000/html-5.png"
                className="scale-50 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
