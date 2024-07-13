import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import heroSlider from "../../public/images/hero-slider.png";
import heroSliderTwo from "../../public/images/slider01.png";

const FeatureList = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
  };
  return (
    <section className="text-white py-10 lg:py-14 pb-8 xl:py-100px px-5 lg:px-16 xl:px-32 overflow-hidden ">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-32px text-text-primary font-semibold mb-4 md:mb-6 xl:mb-12">
          AI Search Feature list
        </h2>
        <div className="slider-slick-swiper">
        <Slider {...settings}>
          <div className="!w-full h-full ">
            <div className="slider-container relative">
              <div className="slider flex transition-transform duration-300 ease-in-out">
                <div className="card h-[calc(100vh-342px)] md:h-[358px] overflow-hidden lg:h-[436px] xl:h-[550px] flex-shrink-0 w-full bg-card-primary rounded-20px md:rounded-40px px-8 md:px-20 py-9 lg:px-112px lg:py-80px pb-0 lg:mr-4 text-center">
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-28px font-semibold mb-2">
                      Pizza ipsum dolor meat lovers buffalo. Marinara meatball
                      pan hand large Philly large spinach. Pan white Chicago
                      string.
                    </h3>
                    <div className="overflow-hidden mt-44 md:mt-14 lg:mt-16">
                      <Image
                        src={heroSlider}
                        alt="slider"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="!w-full h-full">
            <div className="slider-container relative">
              <div className="slider flex transition-transform duration-300 ease-in-out">
                <div className="card h-[calc(100vh-342px)] md:h-[358px] lg:h-[436px] overflow-hidden xl:h-[550px] flex-shrink-0 w-full bg-bg-third rounded-20px md:rounded-40px px-8 md:px-14 xl:px-112px py-8 md:py-14 xl:py-80px pb-0 mr-4">
                  <div className="flex flex-wrap">
                    <div className="relative w-full md:w-1/2">
                    <div className="max-w-full lg:max-w-96 ">
                    <h3 className="text-xl lg:text-28px font-medium xl:leading-10 text-text-third mb-2">
                        Pizza ipsum dolor meat lovers buffalo. Marinara meatball
                        pan hand large Philly large.
                      </h3>
                      <p className="text-text-fourth hidden md:block text-sm lg:text-base font-normal">
                        Pizza ipsum dolor meat lovers buffalo. Olives pineapple
                        Chicago pesto mayo rib ipsum melted sausage lovers.
                        Large wing green stuffed crust pan stuffed. Extra
                        pineapple chicken burnt party fresh.
                      </p>
                    </div>
                     
                    </div>
                    <div className="overflow-hidden w-full md:w-1/2 flex justify-center md:justify-end mt-20 md:mt-0">
                    <div className="object-cover w-32 md:w-48 lg:w-60 xl:w-full h-full xl:h-30rem mt-3 md:mt-0">
                      <Image
                        src={heroSliderTwo}
                        alt="slider"
                        className="mx-auto w-full h-full object-contain"
                      />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        </div>
        
      </div>
    </section>
  );
};

export default FeatureList;
