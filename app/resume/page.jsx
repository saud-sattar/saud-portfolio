"use client";

import {
   FaHtml5,
   FaCss3,
   FaJs,
   FaReact,
   FaFigma,
   FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// about data
const about = {
   title: "About me",
   description: "A quick run down about me :)",
   info: [
      {
         fieldName: "Name",
         fieldValue: "Saud Sattar",
      },
      {
         fieldName: "Phone",
         fieldValue: "0469 835 836",
      },
      {
         fieldName: "Experience",
         fieldValue: "0 Years",
      },
      {
         fieldName: "Email",
         fieldValue: "saud.sattar02@gmail.com",
      },
      {
         fieldName: "Nationality",
         fieldValue: "Australian",
      },
      {
         fieldName: "Language",
         fieldValue: "English",
      },
   ],
};

// exeperience data
const exeperience = {
   title: "My experience",
   description:
      "I pretty much have no experience as a student, but I'm hoping you can change that :D.",
   items: [
      {
         company: "...",
         position: "Nothing So Far...",
         duration: "...",
      },
      // {
      //    company: "Tech R You",
      //    position: "Full stack developer",
      //    duration: "2020 - 2022",
      // },
      // {
      //    company: "Tech R We",
      //    position: "Full stack developer",
      //    duration: "2018 - 2020",
      // }, {
      //    company: "Tech R Us",
      //    position: "Full stack developer",
      //    duration: "2022 - Present",
      // },
      // {
      //    company: "Tech R You",
      //    position: "Full stack developer",
      //    duration: "2020 - 2022",
      // },
      // {
      //    company: "Tech R We",
      //    position: "Full stack developer",
      //    duration: "2018 - 2020",
      // },
   ],
};

// education data
const education = {
   title: "My education",
   description:
      "I am still completing my Honours but here is a little breakdown of my current Educational progress.",
   items: [
      {
         insitution: "University Of Technology Sydney [UTS]",
         degree: "Bachelor of Engineering, Majoring in Software (Honours)",
         duration: "2021 - Present",
      },
      {
         insitution: "Al-Faisal College",
         degree: "Higher School Certificate",
         duration: "2017 - 2020",
      },
   ],
};

// skills data
const skills = {
   title: "My skills",
   description:
      "I am some what proficient in these languages, but I'm sure there is more I can learn.",
   skillList: [
      {
         icon: <FaJs />,
         name: "javascript",
      },
      {
         icon: <FaReact />,
         name: "react.js",
      },
      {
         icon: <SiNextdotjs />,
         name: "next.js",
      },
      {
         icon: <FaNodeJs />,
         name: "node.js",
      },
      {
         icon: <SiTailwindcss />,
         name: "tailwind.css",
      },
      {
         icon: <FaCss3 />,
         name: "css 3",
      },
      {
         icon: <SiMongodb />,
         name: "mongoDB",
      },
      {
         icon: <FaHtml5 />,
         name: "html 5",
      },
      // {
      //    icon: <FaFigma />,
      //    name: "figma",
      // },
   ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
import { ListOrdered } from "lucide-react";

const Resume = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
         }}
         className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
         <div className="container mx-auto">
            <Tabs
               defaultValue="experience"
               className=" flex flex-col xl:flex-row gap-[60px]"
            >
               <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="about">About Me</TabsTrigger>
               </TabsList>

               {/* content */}
               <div className="min-h-[70vh] w-full">
                  {/* experience */}
                  <TabsContent value="experience" className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold text-[#f9f7f3]">
                           {exeperience.title}
                        </h3>
                        <p className="max-w-[600px] text-[#f9f7f3] mx-auto xl:mx-0">
                           {exeperience.description}
                        </p>
                        <ScrollArea className="h-[480px]">
                           <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                              {exeperience.items.map((item, index) => {
                                 return (
                                    <li
                                       key={index}
                                       className="bg-[#1D3557]/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                    >
                                       <span className="text-[#eddea4]">
                                          {item.duration}
                                       </span>
                                       <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                          {item.position}
                                       </h3>
                                       <div className="flex items-center gap-3">
                                          {/* dot */}
                                          <span className="w-[6px] h-[6px] rounded-full bg-[#e0144c]"></span>
                                          <p className="text-[#f9f7f3]">
                                             {item.company}
                                          </p>
                                       </div>
                                    </li>
                                 );
                              })}
                           </ul>
                        </ScrollArea>
                     </div>
                  </TabsContent>
                  {/* education */}
                  <TabsContent value="education" className="w-full">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">
                           {education.title}
                        </h3>
                        <p className="max-w-[600px] text-[#f9f7f3] mx-auto xl:mx-0">
                           {education.description}
                        </p>
                        <ScrollArea className="h-[480px]">
                           <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                              {education.items.map((item, index) => {
                                 return (
                                    <li
                                       key={index}
                                       className="bg-[#1D3557]/30 h-[240px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                    >
                                       <span className="text-[#eddea4]">
                                          {item.duration}
                                       </span>
                                       <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                          {item.degree}
                                       </h3>
                                       <div className="flex items-center gap-3">
                                          {/* dot */}
                                          <span className="w-[6px] h-[6px] rounded-full bg-[#e0144c]"></span>
                                          <p className="text-[#f9f7f3]/60">
                                             {item.insitution}
                                          </p>
                                       </div>
                                    </li>
                                 );
                              })}
                           </ul>
                        </ScrollArea>
                     </div>
                  </TabsContent>
                  {/* skills */}
                  <TabsContent value="skills" className="w-full h-full">
                     <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                           <h3 className="text-4xl font-bold">
                              {skills.title}
                           </h3>
                           <p className="max-w-[600px] text-[#f9f7f3] mx-auto xl:mx-0">
                              {skills.description}
                           </p>
                        </div>
                        <ul
                           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                        xl:gap-[30px]"
                        >
                           {skills.skillList.map((skill, index) => {
                              return (
                                 <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                       <Tooltip>
                                          <TooltipTrigger className="w-full h-[150px] bg-[#1D3557]/30 rounded-xl flex justify-center items-center group">
                                             <div className="text-6xl group-hover:text-[#e0144c] transition-all duration-300">
                                                {skill.icon}
                                             </div>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                             <p className="capitalize">
                                                {skill.name}
                                             </p>
                                          </TooltipContent>
                                       </Tooltip>
                                    </TooltipProvider>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </TabsContent>
                  {/* about */}
                  <TabsContent
                     value="about"
                     className="w-full text-center xl:text-left"
                  >
                     <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-[#f9f7f3] mx-auto xl:mx-0">
                           {about.description}
                        </p>
                        <div className="bg-[#1D3557]/30 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                           <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                              {about.info.map((item, index) => {
                                 return (
                                    <li
                                       key={index}
                                       className="flex items-center justify-center xl:justify-start gap-4"
                                    >
                                       <span className="text-[#e0144c]">
                                          {item.fieldName}
                                       </span>
                                       <span className="text-xl text-[#f9f7f3]">
                                          {item.fieldValue}
                                       </span>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                     </div>
                  </TabsContent>
               </div>
            </Tabs>
         </div>
      </motion.div>
   );
};

export default Resume;
