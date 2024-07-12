"use client";
import Image from "next/image";
import Link from "next/link";
import SiteLogo from "../../public/images/site-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-black/10 py-4 px-6 md:px-32 backdrop-blur-md w-full fixed top-0 z-[999]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="navbar-brand text-white font-bold bg-black">
            <Image src={SiteLogo} alt="site-logo" width={100} height={40} />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <div className="close-icon">&times;</div>
              ) : (
                <div className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10 text-white text-base">
            {["Solutions", "Technology", "Resource", "Company", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-gray-300 hover:opacity-100 opacity-60 font-light leading-6 text-left"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
        {menuOpen && (
          <nav className="md:hidden flex flex-col mt-4 space-y-4 text-white text-base ml-2">
            {["Solutions", "Technology", "Resource", "Company", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-gray-300 hover:opacity-100 opacity-60 font-light leading-6 text-left"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
