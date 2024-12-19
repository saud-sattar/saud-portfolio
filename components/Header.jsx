import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
   return (
      <header className="py-8 xl:py-12 text-[#f9f7f3] bg-[#1D3557]">
         <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
               <h1 className="text-4xl font-semibold">
                  <span className="text-[#eddea4]">S</span>attar<span className="text-[#ff1654]">.</span>
               </h1>
            </Link>
            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
               <Nav />
               <Link href='/contact'>
                  <Button>Hire me</Button>
               </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
               <MobileNav />
            </div>

         </div>
      </header>
   )
}

export default Header