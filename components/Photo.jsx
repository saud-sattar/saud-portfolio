"use client";

import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
   return (
      <div className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] flex justify-center items-center">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{
               opacity: 1,
               transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
         >
            {/* Image */}
            <Image
               src="/assets/temp2.0.jpg"
               priority
               quality={100}
               fill
               alt="Photo"
               className="object-contain rounded-full p-1 xl:p-1.5"
            />

            {/* Circle SVG */}
            <motion.svg
               className="absolute top-0 left-0 w-full h-full"
               fill="transparent"
               viewBox="0 0 500 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <motion.circle
                  cx="250"
                  cy="250"
                  r="247"
                  stroke="#eddea4"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="1"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                     strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                     rotate: [120, 360],
                  }}
                  transition={{
                     duration: 20,
                     repeat: Infinity,
                     repeatType: "reverse",
                  }}
               />
            </motion.svg>
         </motion.div>
      </div>
   );
};

export default Photo;