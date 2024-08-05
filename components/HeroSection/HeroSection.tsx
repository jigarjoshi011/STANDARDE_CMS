// Static & Lib imports
import HeroImg from "../../public/images/hero-img.png";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative text-white min-h-[calc(100vh-300px)] flex pb-0 px-15px lg:px-14 flex-col justify-center items-center pt-160px py-16 z-0 ">
        <div
          className="absolute top-0 left-0 w-full h-full z-[1] opacity-20 mix-blend-luminosity"
          style={{
            backgroundImage: "url('/images/animation.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-center z-[3]">
          <div className="max-w-4xl mx-auto ">
            <h1 className="text-3xl lg:text-5xl xl:text-76px text-text-primary xl:leading-79px mb-4 font-light ">
              Building India’s <br />{" "}
              <span className="font-bold"> Retail 4.0 </span>
              company
            </h1>
            <p className="text-sm lg:text-base mb-5 lg:mb-10 xl:mb-70px text-text-second mx-auto font-poppins tracking-wide">
              Retail Intelligence &thinsp; | &thinsp; Visibility-as-a-Service
              &thinsp;| &thinsp; Commerce-as-a-Service &thinsp; | &thinsp;
              Location Analytics &thinsp; | &thinsp; STANDARDE Stores | &thinsp;
              Data-Driven Store Renovations &thinsp; | &thinsp; Retailer
              Data-Streaming &thinsp; | <br /> &thinsp; Dark Store-as-a-Service
              &thinsp; | &thinsp; Store Automation
            </p>
          </div>
          <Button className="bg-btn-primary lg:text-base text-white px-6 py-2.5 lg:py-3 rounded-full font-normal text-12px">
            AI FOR BRANDS
          </Button>

          <h2 className="lg:text-4xl xl:text-5xl font-bold mt-9 mb-4 text-24px">
            World’s 1st Ai Retail Search-Engine
          </h2>
          <p className="text-sm lg:text-base mb-7 lg:mb-10 text-text-second max-w-2xl mx-auto py-4">
            A Direct-to-Retail channel for India’s Brands & Enterprises  to
            unlock data-driven access to India’s fragmented Offline trade
          </p>
          <Link
            href={"https://www.highlight.standarde.in"}
            className="inline-flex items-center px-6 py-3 border border-white rounded-full text-sm md:text-base font-medium"
          >
            Learn More
            <svg
              className="fill-white w-3 h-3 ml-3.5"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4242 0.575638C11.6585 0.809953 11.6585 1.18985 11.4242 1.42417L1.42417 11.4242C1.18985 11.6585 0.809953 11.6585 0.575638 11.4242C0.341324 11.1899 0.341324 10.81 0.575638 10.5756L10.5756 0.575638C10.81 0.341324 11.1899 0.341324 11.4242 0.575638Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.399902 0.999902C0.399902 0.668532 0.668532 0.399902 0.999902 0.399902H10.9999C11.3313 0.399902 11.5999 0.668532 11.5999 0.999902V10.9999C11.5999 11.3313 11.3313 11.5999 10.9999 11.5999C10.6685 11.5999 10.3999 11.3313 10.3999 10.9999V1.5999H0.999902C0.668532 1.5999 0.399902 1.33127 0.399902 0.999902Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="mx-auto overflow-hidden max-h-480px xl:max-h-600px hero-img max-w-1000px ">
            <div className="mt-2">
              <Image src={HeroImg} alt="hero-img" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
