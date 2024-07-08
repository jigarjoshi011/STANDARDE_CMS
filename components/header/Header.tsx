import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="border-black/10 py-4 px-32 backdrop-blur-md bg-white/20 bg-custom-gradient sticky top-0 z-50 h-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="navbar-brand text-white font-bold">
            <a href="#">STANDARDE</a>
          </div>
          <nav className="flex space-x-4 text-white text-base">
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
