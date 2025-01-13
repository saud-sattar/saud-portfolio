"use client";

import { motion } from "framer-motion";
import React, { act, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
   {
      num: "01",
      category: "Full Stack MERN",
      title: "kre.AI.te- The AI image generator",
      description:
         "kre.AI.te uses openAI as an API to generator prompts entered by the user. The user can then choose to upload that onto the community showcase.",
      stack: [
         { name: "Vite" },
         { name: "Node JS" },
         { name: "Tailwind" },
         { name: "MongoDB" },
      ],
      image: "/assets/assets/work/kreaite.png",
      live: "https://kreaite.vercel.app/",
      github: "https://github.com/saud-sattar/kre.ai.te-project",
   },
   {
      num: "02",
      category: "Text Editor",
      title: "Sierra",
      description:
         "Sierra is a quick little project I wanted to explore to learn more about C and how it works. Sierra gets its name from the NATO phonetic alphabet and is named after my inital, 'S'.",
      stack: [{ name: "C" }, { name: "Make" }, { name: "Shell Scripting" }],
      image: "/assets/assets/work/sierra.png",
      live: "",
      github: "https://github.com/saud-sattar/sierra-project",
   },
   {
      num: "03",
      category: "Full Stack",
      title: "My Portfolio",
      description: "You're looking at it :D",
      stack: [
         { name: "React" },
         { name: "Next JS" },
         { name: "Tailwind" },
         { name: "Javascript" },
         { name: "Vercel" },
      ],
      image: "/assets/assets/work/portfolio.png",
      live: "current",
      github: "https://github.com/saud-sattar/saud-portfolio",
   },
   // {
   //    num: "04",
   //    category: "frontend",
   //    title: "project 1",
   //    description: "blah blah blah blah blah blah blahblahblah blah",
   //    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
   //    image: "/assets/assets/work/thumb1.png",
   //    live: "",
   //    github: "",
   // },
];

const Projects = () => {
   const [project, setProject] = useState(projects[0]);

   const handleSlideChange = (swiper) => {
      // get current slide index
      const currentIndex = swiper.activeIndex;
      // update project state based on current slide index
      setProject(projects[currentIndex]);
   };

   return (
      <motion.section
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
         }}
         className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
         <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
               <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                  <div className="flex flex-col gap-[30px] h-[50%]">
                     {/* outline num */}
                     <div className="text-8xl leading-none font-extrabold text-transparent text-outline-red">
                        {project.num}
                     </div>
                     {/* project category */}
                     <h2 className="text-[42px] font-bold leading-none text-[#f9f7f3] group-hover:text-[#eddea4] transition-all duration-500 capitalize">
                        {project.category}
                     </h2>
                     {/* project title */}
                     <h2 className="text-[25px] font-bold leading-none text-[#f9f7f3]/80 group-hover:text-[#eddea4] transition-all duration-500 capitalize">
                        {project.title}
                     </h2>
                     {/* project description */}
                     <p className="text-white/60">{project.description}</p>
                     {/* stack */}
                     <ul className="flex gap-4">
                        {project.stack.map((item, index) => {
                           return (
                              <li
                                 key={index}
                                 className="text-xl text-[#eddea4]"
                              >
                                 {item.name}
                                 {index !== project.stack.length - 1 && ","}
                              </li>
                           );
                        })}
                     </ul>
                     {/* border */}
                     <div className="border border-white/20"></div>
                     {/* buttons */}
                     <div className="flex items-center gap-4">
                        {/* live project button */}
                        {project.live === "current" ? (
                           // Show a tooltip saying "You are currently on the live project"
                           <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                 <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-[#eddea4]" />
                                 </TooltipTrigger>
                                 <TooltipContent>
                                    <p>You are currently on the live project</p>
                                 </TooltipContent>
                              </Tooltip>
                           </TooltipProvider>
                        ) : project.live ? (
                           // Show the live link button if a live URL exists
                           <Link href={project.live} legacyBehavior>
                              <a target="_blank" rel="noopener noreferrer">
                                 <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                          <BsArrowUpRight className="text-white text-3xl group-hover:text-[#eddea4]" />
                                       </TooltipTrigger>
                                       <TooltipContent>
                                          <p>Live project</p>
                                       </TooltipContent>
                                    </Tooltip>
                                 </TooltipProvider>
                              </a>
                           </Link>
                        ) : (
                           // Show the tooltip with instructions for projects without a live URL
                           <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                 <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-[#eddea4]" />
                                 </TooltipTrigger>
                                 <TooltipContent>
                                    <p>
                                       This is a C project. Download the code
                                       from GitHub and run it locally!
                                    </p>
                                 </TooltipContent>
                              </Tooltip>
                           </TooltipProvider>
                        )}
                        {/* github project button */}
                        <Link href={project.github} legacyBehavior>
                           <a target="_blank" rel="noopener noreferrer">
                              <TooltipProvider delayDuration={100}>
                                 <Tooltip>
                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                       <BsGithub className="text-white text-3xl group-hover:text-[#eddea4]" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                       <p>Github repository</p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="w-full xl:w-[50%]">
                  <Swiper
                     spaceBetween={30}
                     slidesPerView={1}
                     className="xl:h-[520px] mb-12"
                     onSlideChange={handleSlideChange}
                  >
                     {projects.map((project, index) => {
                        return (
                           <SwiperSlide key={index} className="w-full">
                              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                 {/* overlay */}
                                 <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                 {/* image */}
                                 <div className="relative w-full h-full">
                                    <Image
                                       src={project.image}
                                       fill
                                       className="object-cover"
                                       alt=""
                                    />
                                 </div>
                              </div>
                           </SwiperSlide>
                        );
                     })}
                     {/* slider buttons */}
                     <WorkSliderBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-[#eddea4] hover:bg-accent-[#eddea4] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                     />
                  </Swiper>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Projects;
