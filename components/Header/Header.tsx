"use client";
import Image from "next/image";
import Link from "next/link";
import SiteLogo from "../../public/images/site-logo.png";
import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Button from "../Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  return (
    <header className="border-black/10 py-4 px-15px lg:px-14 xl:px-32 backdrop-blur-md w-full fixed top-0 z-[999]">
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center">
          <div className="navbar-brand  ">
            <a href="#" className="uppercase font-semibold text-2xl text-white">standarde</a>
          </div>
          <div className="flex items-start lg:hidden cs-btns" ref={menuRef}>
            <Button
              onClickHandler={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <div className="close-icon !mt-0">&times;</div>
              ) : (
                <div className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </Button>
          </div>
          <nav className="hidden lg:flex space-x-8 xl:space-x-10 text-white ">
            {["Solutions", "Technology", "Resource", "Company", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-gray-300 hover:opacity-100 opacity-60 text-sm xl:text-base font-light leading-6 text-left"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
        {menuOpen && (
          <nav className="lg:hidden flex flex-col mt-4 space-y-3 md:space-y-4 text-white text-sm md:text-base ml-2">
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
