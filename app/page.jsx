import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
   return (
      <section>
         <div className="container mx-auto h-full">
         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
               <span className="text-xl font-bold text-[#ff1654]">Software Student</span>
               <h1 className="h1 mb-6">
               <span className="text-[#f9f7f3]">Hello I'm</span> <br /> <span className="text-[#eddea4]">Saud Sattar</span>
               </h1>
               <p className="max-w-[500px] mb-9 text-[#f9f7f3]">
                  I am a software engineering student with a solid foundation in various programming languages, eager to continue building and applying my skills in the field.
               </p>
               {/* button */}
               <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                     asChild
                     variant="outline"
                     size="lg"
                     className="uppercase flex items-center gap-2 text-[#eddea4] border-2 border-[#eddea4] hover:bg-[#eddea4]"
                  >
                     <a href="/files/Saud_Sattar_CV.pdf" download>
                     <span>Download CV</span>
                     <FiDownload className="text-xl" />
                     </a>
                  </Button>
                  <div className="mb-8 xl:mb-0">
                  <Social
                     containerStyles="flex gap-6"
                     iconStyles="w-9 h-9 border-2 border-[#eddea4] rounded-full flex justify-center 
                              items-center text-[#eddea4] hover:bg-[#eddea4] hover:text-primary 
                              hover:transition-all duration-500"
                  />
                  </div>
               </div>
            </div>
               {/* photo */}
               <div className="order-1 xl:order-none mb-8 xl:mb-0">
                  <Photo />
               </div>
            </div>
         </div>
         <Stats />
      </section>
   );
};

export default Home;
