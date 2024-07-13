// Static & Lib imports
import HeroImg from "../../public/images/hero-img.png";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

// Components
import WaveAnimation from "../WaveAnimation/WaveAnimation";

const HeroSection = () => {
  return (
    <>
      {/* <WaveAnimation /> */}
      <section className="text-white min-h-[calc(100vh - 300px)] flex pb-0 px-5 flex-col before:mix-blend-luminosity before:opacity-[0.4] justify-center items-center pt-24 lg:pt-32 xl:pt-160px py-16 relative  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full z-0 before:z-[-1]  before:bg-bg-primary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl xl:text-76px text-text-primary xl:leading-79px font-bold mb-4 ">
            Revolution of Retail Industry
          </h1>
          <p className="text-sm lg:text-base mb-5 lg:mb-10 xl:mb-70px text-text-second max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            cr
          </p>
          <Button className="bg-btn-primary text-sm lg:text-base text-white px-6 py-2.5 lg:py-3 rounded-full font-normal">
            AI FOR THE RETAILERS
          </Button>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-9 mb-4">
            Generative AI Search
          </h2>
          <p className="text-sm lg:text-base mb-7 lg:mb-10 text-text-second max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            crust pan stuffed.
          </p>
          <div className="mx-auto overflow-hidden max-h-580px hero-img ">
            <Image src={HeroImg} alt="hero-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
