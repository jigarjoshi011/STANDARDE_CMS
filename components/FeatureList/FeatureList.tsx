import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import heroSlider from "../../public/images/hero-slider.png";

const FeatureList = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="text-white py-100px px-32 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-32px text-text-primary font-semibold mb-12">
          AI Search Feature list
        </h2>
        <Slider {...settings}>
          <div className="w-full h-full">
            <div className="slider-container relative">
              <div className="slider flex transition-transform duration-300 ease-in-out">
                <div className="card h-[550px] flex-shrink-0 w-full bg-card-primary rounded-40px px-112px py-80px pb-0 mr-4 text-center">
                  <div>
                    <h3 className="text-28px font-semibold mb-2">
                      Pizza ipsum dolor meat lovers buffalo. Marinara meatball
                      pan hand large Philly large spinach. Pan white Chicago
                      string.
                    </h3>
                    <div className="overflow-hidden mt-10">
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
          <div className="w-full h-full">
            <div className="slider-container relative">
              <div className="slider flex transition-transform duration-300 ease-in-out">
                <div className="card h-[550px] flex-shrink-0 w-full bg-bg-third rounded-40px px-112px py-80px pb-0 mr-4">
                  <div className="flex items-center">
                    <div className="relative w-1/2">
                      <h3 className="text-28px font-medium leading-10 text-text-third mb-2">
                        Pizza ipsum dolor meat lovers buffalo. Marinara meatball
                        pan hand large Philly large.
                      </h3>
                      <p className="text-text-fourth text-base font-normal">
                        Pizza ipsum dolor meat lovers buffalo. Olives pineapple
                        Chicago pesto mayo rib ipsum melted sausage lovers.
                        Large wing green stuffed crust pan stuffed. Extra
                        pineapple chicken burnt party fresh.
                      </p>
                    </div>
                    <div className="overflow-hidden mt-10 w-1/2">
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
        </Slider>
      </div>
    </section>
  );
};

export default FeatureList;
