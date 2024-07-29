'use client';

import useIntersectionObserver from '../hooks/useIntersectionObserver.js'; // Adjust the path as needed
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdCancel } from "react-icons/md";


export default function Contact() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });
  const [error, setError] = useState('')
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: ""
  });

  const form = useRef();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const validateMessage = () => {
    const messageWords = person.message.trim().split(/\s+/);
    if (messageWords.length > 50) {
      setError("Message should be short and not exceed 50 words");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    setError(''); 
  
    if (!person.name) {
      setError("Please enter your name");
      return;
    }
    if (person.name.length > 20) {
      setError("Name is too large");
      return;
    }
  
    if (!person.email) {
      setError("Enter your email");
      return;
    }
  
    if (!emailRegex.test(person.email)) {
      setError("Enter a valid email");
      return;
    }
  
    if (!validateMessage()) {
      return;
    }
  
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
    .then(
      () => {
        setError('Sent Successfully');
        setPerson({ name: "", email: "", message: "" });
      },
      (error) => {
        setError('Failed to Send Message');
      },
    );
  };
  

  const clearError = () => {
    setError('');
  };
    


  return (
    <>
      {error && (
        <span className={`flex justify-center items-center fixed top-5 right-0 w-auto rounded-sm animate-slideInRight h-[40px] px-[10px] text-white ${
          error === "Sent Successfully" ? 'bg-[#54107c]' : 'bg-[red]'
        }`}>
          {error} <MdCancel className="text-white mx-[5px] cursor-pointer " onClick={clearError} />
        </span>
      )}
      
    <div id = "Contact" className="flex flex-col w-screen h-auto justify-center items-center bg-[#181616]">
      <div className="border-t-2 border-[#54107c] w-full h-[2px] m-[10px] animate-slideIn "></div>
      <h6
        ref={ref2}
        className={`w-auto h-auto text-2xl text-[#7315ab] m-[20px] font-edu ${
          isVisible2 ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        Connect?
      </h6>
      <form ref={form} onSubmit={sendEmail} className = 'flex flex-col justify-center items-center'>
        <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-around items-center">
        
          <div
            ref={ref3}
            className={`flex flex-row justify-center items-center m-[10px] ${
              isVisible3 ? 'animate-fadeIn2' : 'opacity-0'
            }`}
          >
            <label className="font-edu w-[60px] lg:w-auto h-auto lg:h-auto text-[#7315ab] text-sm lg:text-lg mr-[2px] lg:mr-[10px]">
              Name
            </label>
            <input
              type="text"
              name="name" // Ensure this matches the placeholder in the EmailJS template
              value={person.name}
              onChange={handleInputChange}
              className="font-edu w-auto h-[20px] lg:h-auto bg-[#181616] hover:border-b-white duration-300 focus:outline-none indent-1 text-white border-b-2 border-[#54107c]"
            />
          </div>
          <div
            ref={ref4}
            className={`flex flex-row justify-center items-center ${
              isVisible4 ? 'animate-fadeIn1' : 'opacity-0'
            }`}
          >
            <label className="font-edu w-[60px] lg:w-auto h-auto lg:h-auto text-[#7315ab] text-sm lg:text-lg mr-[2px] lg:mr-[10px]">
              Email
            </label>
            <input
              type="email"
              name="email" // Ensure this matches the placeholder in the EmailJS template
              value={person.email}
              onChange={handleInputChange}
              className="font-edu w-auto h-[20px] lg:h-auto bg-[#181616] hover:border-b-white duration-300 focus:outline-none indent-1 text-white border-b-2 border-[#54107c]"
            />
          </div>
          <div
            ref={ref4}
            className={`flex flex-row justify-center items-center m-[10px] ${
              isVisible4 ? 'animate-fadeIn3' : 'opacity-0'
            }`}
          >
            <label className="font-edu w-[60px]  lg:w-auto h-auto lg:h-auto text-[#7315ab] text-sm lg:text-lg mr-[2px] lg:mr-[10px]">
              Message
            </label>
            <input
              name="message"
              value={person.message}
              onChange={handleInputChange}
              className="font-edu w-auto h-[20px] lg:h-auto bg-[#181616] hover:border-b-white duration-300 focus:outline-none indent-1 text-white border-b-2 border-[#54107c]"
            />
          </div>
          

        
        </div>
        <div
        ref={ref4}
        className={`flex m-[30px] ${
          isVisible4 ? 'animate-fadeIn3' : 'opacity-0'
        }`}
      >
        <button type = "submit" className="font-edu w-[120px] h-[40px] bg-[#181616] border-2 rounded-[8px] hover:text-white hover:bg-[#54107c] duration-300 border-[#54107c] text-[#54107c]">
          Send
        </button>
          </div>
        
      </form>
    </div>
    </>
  );
}
