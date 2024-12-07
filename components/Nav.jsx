"use client";

import { CloudCog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
   {
      name: 'home',
      path: "/",
   },
   // {
   //     name: 'services',
   //     path: "/services",
   // },
   {
      name: 'projects',
      path: "/projects",
   },
   {
      name: 'resume',
      path: "/resume",
   },
   {
      name: 'contact',
      path: "/contact",
   },
]

const Nav = () => {
   const pathname = usePathname();
   console.log(pathname);
   return (
      <nav className="flex gap-8">
         {links.map((link, index) => {
            return (
               <Link
                  href={link.path}
                  key={index}
                  className={`
                            ${link.path === pathname && "text-[#ff1654] border-b-2 border-[#ff1654]"}
                        capitalize font-medium hover:text-[#eddea4] transition-all`}
               >
                  {link.name}
               </Link>
            );
         })}
      </nav>
   );
};

export default Nav;