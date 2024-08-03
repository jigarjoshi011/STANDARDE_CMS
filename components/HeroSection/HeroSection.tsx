// Static & Lib imports
import HeroImg from "../../public/images/hero-img.png";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

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
              Data-Streaming &thinsp; | &thinsp; Dark Store-as-a-Service
              &thinsp; | &thinsp; Store Automation
            </p>
          </div>
          <Button className="bg-btn-primary lg:text-base text-white px-6 py-2.5 lg:py-3 rounded-full font-normal text-12px">
            AI FOR BRANDS
          </Button>

          <h2 className="lg:text-4xl xl:text-5xl font-bold mt-9 mb-4 text-24px">
            World’s 1st Ai Retail Search-Engine
          </h2>
          <p className="text-sm lg:text-base mb-7 lg:mb-10 text-text-second max-w-2xl mx-auto">
            A Direct-to-Retail channel for India’s Brands & Enterprises  to
            unlock data-driven access to India’s fragmented Offline trade
          </p>
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
