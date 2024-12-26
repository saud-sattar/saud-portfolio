"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
   {
      name: 'home',
      path: "/",
   },
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
];

const MobileNav = () => {
   const pathname = usePathname();
   return (
      <Sheet>
         <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-[#eddea4]" />
         </SheetTrigger>
         <SheetContent className="flex flex-col">
            {/* logo */}
            <div className='mt-32 mb-40 text-center text-2xl'>
               <Link href="/">
                  <h1 className='text-4xl font-semibold'>
                     <span className='text-[#eddea4]'>S</span>attar<span className='text-[#ff1654]'>.</span>
                  </h1>
               </Link>
            </div>
            {/* nav */}
            <nav className='flex flex-col justify-center items-center gap-8'>
               {links.map((link, index) => {
                  return (
                     <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-[#eddea4] border-b-2 border-[#eddea4]"}
                                'text-xl capitalize hover:text-[#eddea4] transition-all'`
                        }
                     >
                        {link.name}
                     </Link>
                  );
               })}
            </nav>
         </SheetContent>
      </Sheet >
   );
};

export default MobileNav;