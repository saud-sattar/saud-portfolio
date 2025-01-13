"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
   {
      name: "home",
      path: "/",
   },
   {
      name: "projects",
      path: "/projects",
   },
   {
      name: "resume",
      path: "/resume",
   },
   {
      name: "contact",
      path: "/contact",
   },
];

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();

   const closeNav = () => setIsOpen(false);

   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-[#eddea4]" />
         </SheetTrigger>
         <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
               <Link href="/" onClick={closeNav}>
                  <h1 className="text-4xl font-semibold">
                     <span className="text-[#eddea4]">S</span>attar
                     <span className="text-[#e0144c]">.</span>
                  </h1>
               </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
               {links.map((link, index) => (
                  <Link
                     href={link.path}
                     key={index}
                     onClick={closeNav}
                     className={`${
                        link.path === pathname &&
                        "text-[#eddea4] border-b-2 border-[#eddea4]"
                     } text-xl capitalize hover:text-[#eddea4] transition-all`}
                  >
                     {link.name}
                  </Link>
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;
