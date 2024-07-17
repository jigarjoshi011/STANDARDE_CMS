"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Highlight from "../../../public/images/highlight.png";
import Highlight02 from "../../../public/images/hight-img-01.png";
import Highlight01 from "../../../public/images/hight-img.png";
import Highlight03 from "../../../public/images/hight-img-03.png";
import { useScreenDetector } from "@/hooks/useScreenDetector";

const HighlightSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);
  const { isDesktop } = useScreenDetector();

  const slides = [
    { image: Highlight01, title: "Marketplace" },
    { image: Highlight02, title: "Retail App" },
    { image: Highlight03, title: "Retail App" },
  ];

  const handleSlideClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isDesktop) {
        setActiveIndex(index);
      } else {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  };

  const handlePointerUp = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isDesktop) {
        setActiveIndex(index);
      } else {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  };
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="px-4 md:px-10 pt-16 md:pt-100px">
      <div className="bg-bg-dark rounded-20px md:rounded-40px px-4 md:px-14 pt-10 md:pt-20 overflow-hidden">
        <div className="relative text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-40px font-normal text-white leading-8">
            This is{" "}
          </h1>
          <Image src={Highlight} alt="highlight" className="mx-auto" />
        </div>
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          width={1180}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
            dynamicBullets: true,
            dynamicMainBullets: 1,
          }}
          watchSlidesProgress
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
              pagination: {
                enabled: true,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleSlideClick(index)}
              onMouseOver={() => handlePointerUp(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative group cursor-pointer">
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "opacity-100 -translate-y-10"
                      : "opacity-0 translate-y-0"
                  }`}
                >
                  <h3 className="text-white font-bold text-2xl md:text-40px text-center mt-4 md:mt-16">
                    {slide.title}
                  </h3>
                </div>
                <div
                  className={`relative h-64 md:h-298px duration-700 transition-all ease-in-out ${
                    activeIndex === index ? "translate-y-0" : "translate-y-16"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HighlightSection;
