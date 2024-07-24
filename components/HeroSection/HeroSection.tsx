// Static & Lib imports
import HeroImg from "../../public/images/hero-img.png";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";


const HeroSection = () => {
  return (
    <>
      <section
      className="relative text-white min-h-[calc(100vh-300px)] flex pb-0 px-15px lg:px-14 flex-col justify-center items-center pt-160px py-16 z-0 "
    >
      <div className="absolute top-0 left-0 w-full h-full z-[1] opacity-40 mix-blend-luminosity"  style={{
        backgroundImage: "url('/images/animation.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      </div>
        <div className="text-center z-[3]">
          <div className="max-w-4xl mx-auto ">
          <h1 className="text-3xl lg:text-5xl xl:text-76px text-text-primary xl:leading-79px font-bold mb-4 ">
            Revolution of Retail Industry
          </h1>
          <p className="text-sm lg:text-base mb-5 lg:mb-10 xl:mb-70px text-text-second max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            cr
          </p>
          </div>
          <Button className="bg-btn-primary lg:text-base text-white px-6 py-2.5 lg:py-3 rounded-full font-normal text-12px">
            AI FOR THE RETAILERS
          </Button>

          <h2 className="lg:text-4xl xl:text-5xl font-bold mt-9 mb-4 text-24px">
            Generative AI Search
          </h2>
          <p className="text-sm lg:text-base mb-7 lg:mb-10 text-text-second max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            crust pan stuffed.
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
