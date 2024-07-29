"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Adjust the path as needed

export default function Social() {
  const [social, setSocial] = useState({
    linkedIn: false,
    github: false,
    twitter: false,
    gmail: false,
    instagram: false,
  });

  const handleLinkedIn = () => {
    setSocial((prevState) => ({
      ...prevState,
      linkedIn: !prevState.linkedIn,
      github: false,
      twitter: false,
      gmail: false,
      instagram: false,
    }));
  };

  useEffect(() => {
    setSocial({
      instagram: false,
      linkedIn: false,
      github: false,
      twitter: false,
      gmail: false,
    });
  }, []);

  // Using Intersection Observer for animations
  const [refInstagram, isVisibleInstagram] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [refGmail, isVisibleGmail] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [refTwitter, isVisibleTwitter] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [refGithub, isVisibleGithub] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [refLinkedIn, isVisibleLinkedIn] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <>
      <div
        id="Social"
        className="flex justify-center items-center lg:items-end flex-col py-[40px] w-auto h-auto"
      >
        <div className="flex flex-row-reverse">
          <a
            ref={refInstagram}
            href="https://www.instagram.com/decaitor/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center ml-[10px] w-[50px] h-[50px] ${
              isVisibleInstagram ? "animate-slideRoll" : "opacity-0"
            }`}
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              className="flex w-[50px] h-[50px] rounded-[30px]"
              alt="Instagram"
            />
          </a>
          <a
            ref={refGmail}
            className={`flex justify-center items-center ml-[10px] w-[50px] h-[50px] ${
              isVisibleGmail ? "animate-slideRoll" : "opacity-0"
            }`}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=harshnarula01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/30/000000/gmail-new.png"
                className="flex w-[50px] h-[50px] rounded-[30px]"
                alt="Gmail"
              />
            </a>
          </a>
          <a
            ref={refTwitter}
            href="https://twitter.com/HarshNa89766122"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center ml-[10px] w-[50px] h-[50px] ${
              isVisibleTwitter ? "animate-slideRoll" : "opacity-0"
            }`}
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              className="flex w-[50px] h-[50px] rounded-[30px]"
              alt="Twitter"
            />
          </a>
          <a
            ref={refGithub}
            href="https://github.com/harshnarula"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center ml-[10px] w-[50px] h-[50px] ${
              isVisibleGithub ? "animate-slideRoll" : "opacity-0"
            }`}
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/github.png"
              className="flex w-[50px] h-[50px] rounded-[30px]"
              alt="GitHub"
            />
          </a>
          <a
            ref={refLinkedIn}
            href="https://www.linkedin.com/in/harsh-narula-597b95314/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex justify-center items-center ml-[10px] w-[50px] h-[50px] ${
              isVisibleLinkedIn ? "animate-slideRoll" : "opacity-0"
            }`}
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/linkedin.png"
              className="flex w-[50px] h-[50px] rounded-[30px]"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="lg:hidden flex border-2 border-[#54107c] hover:bg-[#54107c] hover:text-white duration-300 w-[50px] h-[50px] justify-center items-center rounded-[32px] mt-[40px]  text-white">
          <Link href="#Navbar" passHref className="rotate-180">
            V
          </Link>
        </div>
      </div>
      <div className = "flex justify-center items-center w-screen h-auto">
        <div className="hidden lg:flex border-2 border-[#54107c] animate-bounce hover:bg-[#54107c] hover:text-white duration-300 w-[50px] h-[50px] justify-center items-center rounded-[32px] m-[15px]  text-white">
          <Link href="#Navbar" passHref className="rotate-180">
            V
          </Link>
        </div>
      </div>
    </>
  );
}
