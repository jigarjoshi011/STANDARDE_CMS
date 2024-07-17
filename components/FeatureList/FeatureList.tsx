import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import heroSlider from "../../public/images/hero-slider.png";
import heroSliderTwo from "../../public/images/slider01.png";

const FeatureList = () => {
  return (
    <section className="text-white py-10 lg:py-14 pb-8 xl:py-100px overflow-hidden">
      <div className="container mx-0 lg:px-24 md:px-10 xl:px-32 sm:px-4">
        <h2 className="text-16px lg:text-32px text-text-primary font-semibold mb-4 md:mb-6 xl:mb-12">
          AI Search Feature list
        </h2>
      </div>
      <div className="mx-0">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={30}
          freeMode={true}
          centeredSlides={true}
          modules={[FreeMode, Pagination]}
          pagination={{
            enabled: false,
            clickable: false,
            bulletClass: "swiper-pagination-bullet",
          }}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.1,
              spaceBetween: 10,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            650: {
              width: 740,
              slidesPerView: 1.1,
              spaceBetween: 10,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            800: {
              width: 740,
              slidesPerView: 1.1,
              spaceBetween: 10,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            960: {
              width: 940,
              slidesPerView: 1.2,
              spaceBetween: 30,
              pagination: {
                enabled: false,
              },
            },
            1040: {
              width: 1440,
              slidesPerView: 1.22,
              spaceBetween: 30,
              pagination: {
                enabled: false,
              },
            },
          }}
        >
          <SwiperSlide>
            <div className="!w-full h-full ">
              <div className="slider-container relative">
                <div className="slider flex transition-transform duration-300 ease-in-out">
                  <div className="card h-[calc(100vh-342px)] md:h-[358px] overflow-hidden lg:h-[436px] xl:h-[550px] flex-shrink-0 w-full bg-card-primary rounded-20px  px-8 md:px-20 py-9 lg:px-112px lg:py-80px pb-0 lg:mr-4 text-center">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="!w-full h-full">
              <div className="slider-container relative">
                <div className="slider flex transition-transform duration-300 ease-in-out">
                  <div className="card h-[calc(100vh-342px)] md:h-[358px] lg:h-[436px] overflow-hidden xl:h-[550px] flex-shrink-0 w-full bg-bg-third rounded-20px  px-8 md:px-14 xl:px-112px py-8 md:py-14 xl:py-80px pb-0 mr-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full md:w-1/2">
                        <div className="max-w-full lg:max-w-96 ">
                          <h3 className="text-xl lg:text-28px font-medium xl:leading-10 text-text-third mb-2">
                            Pizza ipsum dolor meat lovers buffalo. Marinara
                            meatball pan hand large Philly large.
                          </h3>
                          <p className="text-text-fourth hidden md:block text-sm lg:text-base font-normal">
                            Pizza ipsum dolor meat lovers buffalo. Olives
                            pineapple Chicago pesto mayo rib ipsum melted
                            sausage lovers. Large wing green stuffed crust pan
                            stuffed. Extra pineapple chicken burnt party fresh.
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
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureList;
