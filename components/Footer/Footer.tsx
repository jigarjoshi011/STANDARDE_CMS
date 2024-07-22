import Image from "next/image";
import React from "react";
import SiteLogo from "../../public/images/site-logo.png";
import TwitterSvg from "../../public/images/ri_twitter-x-fill.svg";
import LinkdinSVG from "../../public/images/linkdin.svg";
import VectorSvg from "../../public/images/Vector.svg";
import Youtube from "../../public/images/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className=" lg:w-full mx-0 px-15px md:px-8  lg:px-14  xl:px-32">
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start md:items-center">
          <div className="flex flex-col  space-y-4 md:space-y-8">
            <a href="#" className="uppercase font-semibold text-3xl text-white">
              standarde
            </a>
            <div className="flex space-x-4 md:space-x-6">
              <Link
                href={"#"}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Image
                  src={TwitterSvg}
                  alt="twitter-link"
                  className="xl:w-6 xl:h-6 w-4 h-4 "
                />
              </Link>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Image
                  src={LinkdinSVG}
                  alt="twitter-link"
                  className="xl:w-6 xl:h-6 w-4 h-4 "
                />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Image
                  src={VectorSvg}
                  alt="twitter-link"
                  className="xl:w-6 xl:h-6 w-4 h-4 "
                />
              </a>
              <a
                href="#"
                className="hover:text-footer-primary/40 transition-colors duration-300"
              >
                <Image
                  src={Youtube}
                  alt="twitter-link"
                  className="xl:w-6 xl:h-6 w-4 h-4 "
                />
              </a>
            </div>
          </div>
          <div className="text-sm text-left md:text-center sm:text-right ">
            <div className="flex items-center justify-start md:justify-end mb-3 xl:mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <Link
                href="#"
                className="text-footer-primary/40 font-montserrat transition-all font-montserrat ease-in-out duration-300 hover:text-footer-primary text-lg font-normal "
              >
                +1 516-342-XXXX
              </Link>
            </div>
            <div className="flex items-center justify-start md:justify-center sm:justify-end">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <Link
                href="#"
                className="text-footer-primary/40 transition-all ease-in-out duration-300 hover:text-footer-primary text-lg font-normal font-montserrat"
              >
                info@neuralnextsystems.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 py-6 pb-2.5 hidden  border-t border-white/20  md:flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <ul className="flex items-center ">
              <li>
                <a
                  href="#"
                  className="text-footer-primary/60 font-manrope font-normal hover:text-footer-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <p className="text-footer-primary/60 text-sm font-normal font-m px-3.5">
                  .
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footer-primary/60 font-manrope hover:text-footer-primary hover:underline text-sm font-normal"
                >
                  Terms of Conditions
                </a>
              </li>
            </ul>
          </div>
          <p className="text-footer-primary/60 text-sm font-normal font-montserrat">
            Attentions Data Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
