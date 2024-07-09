import Image from "next/image";
import Link from "next/link";
import React from "react";
import SiteLogo from "../../public/images/site-logo.png"
const Navbar = () => {
  return (
    <header className="border-black/10 py-4 px-32 backdrop-blur-md w-full  fixed top-0 z-[999] ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="navbar-brand text-white font-bold bg-black">
            {/* <a href="">STANDARDE</a> */}
            <Image src={SiteLogo} alt="site-logo"/>
          </div> 
          <nav className="flex space-x-10 text-white text-base">
            <Link
              href="#"
              className="hover:text-gray-300 hover:opacity-100  opacity-60  font-light leading-6 text-left"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 hover:opacity-100  opacity-60 font-light leading-6 text-left"
            >
              Technology
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 hover:opacity-100  opacity-60 font-light leading-6 text-left"
            >
              Resource
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 hover:opacity-100  opacity-60  font-light leading-6 text-left"
            >
              Company
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 hover:opacity-100  opacity-60 font-light leading-6 text-left"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
