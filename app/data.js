
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa6";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { SiThealgorithms } from "react-icons/si";

export const projects = [

	
    {
		id: 1,
        name: "ShopY",
		img: "/images/Untitled.jpg",
        desc: "Your ultimate destination for cutting-edge e-gadgets. Explore, compare, and purchase the latest tech innovations with ease and convenience.",
        category: "Full Stack App",
        used: ["React.js", "Express.js", "Node.js", "Mongo DB"],
        link: "https://github.com/harshnarula/shopy-frontend"
		
	},
    {
		id: 2,
        name: "Weather Application",
		img: "/images/logo(2).png",
        desc: "An application that showcase the weather forecast in the user's region",
        category: "Front-End App",
        used: ["React.js"],
        link: "https://github.com/harshnarula/weather-app/tree/master"
		
	},
    {
		id: 3,
        name: "ASHK",
		img: "/images/ASHKlogo.png",
        desc: "Developed a website named ASHK which is used for managing user-specific data based on traveling",
        category: "Full Stack App",
        used: ['Flask', 'Jinja', 'MySql'],
        link: "https://github.com/harshnarula/ASHK"
		
	},
    {
		id: 4,
        name: "Video Chat Applicaton",
		img: "/images/logo(2).png",
        desc: "This is an application where we can coumminicate with other persons virtually through a video call and also can cchat with them",
        category: "Full Stack App",
        used: ['React.js', 'MySql'],
        link: "https://github.com/harshnarula/video-chat-application"
		
	},
]

export const tech = [
	{
		id: 1,
		icon: "https://img.icons8.com/color/40/000000/react-native.png",
		title: "REACT",
	},
    {
		id: 2,
		icon: "https://img.icons8.com/color/40/000000/django.png",
		title: "DJANGO",
	},

    {
		id: 3,
		icon: "https://img.icons8.com/fluent/40/000000/mysql-logo.png",
		title: "MYSQL",
	},
    {
        id: 4,
        icon: "https://img.icons8.com/color/40/000000/express-js.png",
        title: "EXPRESS JS"
    },
    {
        id: 5,
        icon: "https://img.icons8.com/color/40/000000/nodejs.png",
        title: "NODE JS"
    }
]

export const lang = [
	{
		id: 1,
		icon: "https://img.icons8.com/color/40/000000/html-5.png",
		title: "HTML",
	},
    {
		id: 2,
		icon: "https://img.icons8.com/color/40/000000/css3.png",
		title: "CSS",
	},
    {
		id: 3,
		icon: "https://img.icons8.com/color/40/000000/javascript.png",
		title: "JS",
	},
    {
		id: 4,
		icon: "https://img.icons8.com/color/40/000000/python.png",
		title: "PYTHON",
	},
    {
		id: 5,
		icon: "https://img.icons8.com/fluent/40/000000/mysql-logo.png",
		title: "SQL",
	},
    

]

export const design = [
	
	{
		id: 1,
		icon: "https://img.icons8.com/color/40/000000/figma.png",
		title: "FIGMA",
	},
]

export const main = [
	{
		id: 1,
		name: "Web Development",
		desc: "Capable of creating full-stack web applications with fast, dynamic, and interactive user interfaces built on a scalable back-end",
		icon: <CgWebsite className="bg-[#0d6efd]  rounded-lg text-white w-[60px] h-[60px] p-[5px] m-[5px]" />,
		mobileIcon: <CgWebsite className="bg-[#0d6efd]  rounded-lg text-white w-[40px] h-[40px]  p-[5px] m-[5px]" />
	},
	{
		id: 2,
		name: "Database Management",
		desc: "Able to convert real-world entities into database models and manage them",
		icon: <FaDatabase className="bg-[#0d6efd]  rounded-lg text-white w-[60px] h-[60px] p-[5px] m-[5px]" />,
		mobileIcon: <FaDatabase className="bg-[#0d6efd]  rounded-lg text-white w-[40px] h-[40px]  p-[5px] m-[5px]" />
	},
	{
		id: 3,
		name: "Logic & Algorithm",
		desc: "Proficient in developing efficient logic and algorithms to solve complex problems, ensuring optimal performance and reliability across applications.",
		icon: <SiThealgorithms className="bg-[#0d6efd]  rounded-lg text-white w-[60px] h-[60px] p-[5px] m-[5px]" />,
		mobileIcon: <SiThealgorithms className="bg-[#0d6efd]  rounded-lg text-white w-[40px] h-[40px]  p-[5px] m-[5px]" />
	},
	{
		id: 4,
		name: "Code Optimization",
		desc: "Expert in optimizing code for high-performance software solutions.",
		icon: <SiGooglecontaineroptimizedos className="bg-[#0d6efd]  rounded-lg text-white w-[60px] h-[60px]  p-[5px] m-[5px]" />,
		mobileIcon: <SiGooglecontaineroptimizedos className="bg-[#0d6efd]  rounded-lg text-white w-[40px] h-[40px]  p-[5px] m-[5px]" />
	}
	
]

