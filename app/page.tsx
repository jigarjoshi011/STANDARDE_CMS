"use client";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";
import Image from "next/image";
import Slider from "react-slick";
import HeroImg from "../public/images/hero-img.png";
import BgBlur from "../public/images/bg-blur.png";
import heroSlider from "../public/images/hero-slider.png";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div>
      {/* FIRST SECTION */}
      <AnimatedBackground>
        <section className="text-white min-h-screen flex pb-0 flex-col before:mix-blend-luminosity before:opacity-[0.4] justify-center items-center pt-160px py-16 relative  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full z-0 before:z-[-1]  before:bg-bg-primary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-76px text-text-primary xl:leading-79px font-bold mb-4 ">
              Revolution of Retail Industry
            </h1>
            <p className="text-sm md:text-base mb-5 md:mb-10 xl:mb-70px text-text-second max-w-2xl mx-auto">
              Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
              pesto mayo rib ipsum melted sausage lovers. Large wing green
              stuffed cr
            </p>
            <button className="bg-btn-primary text-white px-6 py-3 rounded-full font-normal">
              AI FOR THE RETAILERS
            </button>

            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mt-9 mb-4">
              Generative AI Search
            </h2>
            <p className="text-sm md:text-base mb-10 text-text-second max-w-2xl mx-auto">
              Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
              pesto mayo rib ipsum melted sausage lovers. Large wing green
              stuffed crust pan stuffed.
            </p>
            <div className="mx-auto overflow-hidden max-h-580px hero-img ">
              <Image src={HeroImg} alt="hero-img"/>
            </div>

          </div>
        </section>
      </AnimatedBackground>
      {/* SECOND SECTION */}
      <section className="text-white py-100px px-32 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-32px text-text-primary font-semibold mb-12">
            AI Search Feature list
          </h2>
          <div className="flex flex-col md:flex-row gap-8 flex-wrap">
            <div className="w-full">
              <div className="slider-container relative">
                <div className="slider flex transition-transform duration-300 ease-in-out">
                  <div className="card flex-shrink-0 w-full bg-card-primary rounded-40px px-112px py-80px pb-0 mr-4 text-center">
                    {/* <Slider {...settings}>
                      <div className="feature-item h-full ">
                        <div className="feature-item-inside bg-lightGray lg:px-[70px] lg:py-[60px] px-[30px] py-[20px] h-full">
                          <div className="feature-desc font-normal lg:[&>p]:text-[26px] [&>p]:text-[18px] [&>p]:italic pb-14 tracking-[0.2px]">
                           
                          </div>
                          <div className="testimonial-name">
                            <h4 className="!mb-0">
                          
                            </h4>
                           
                          </div>
                        </div>
                      </div>
                    </Slider> */}
                    {/* <img src="path-to-card-image.jpg" alt="Feature" className="w-full h-48 object-cover rounded-lg mb-4"> */}
                    <h3 className="text-28px font-semibold mb-2">
                    Pizza ipsum dolor meat lovers buffalo. Marinara meatball pan hand large Philly large spinach. Pan white Chicago string.
                    </h3>
                    <div className="overflow-hidden mt-10">
                      <Image src={heroSlider} alt="slider" className="mx-auto"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full">
              <div className="slider-container relative">
                <div className="slider flex transition-transform duration-300 ease-in-out">
                  <div className="card flex-shrink-0 w-full bg-bg-third rounded-40px px-112px py-80px pb-0 mr-4   ">
                    <div className="flex items-center">
                      <div className="relative w-1/2">
                    <h3 className="text-28px font-medium leading-10 text-text-third mb-2">
                    Pizza ipsum dolor meat lovers buffalo. Marinara meatball pan hand large Philly large.
                    </h3>
                    <p className="text-text-fourth text-base  font-normal">Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed crust pan stuffed. Extra pineapple chicken burnt party fresh.</p>
                    </div>  
                    <div className="overflow-hidden mt-10 w-1/2">
                      <Image src={heroSlider} alt="slider" className="mx-auto"/>
                    </div>
                    </div>
                    
                   
                  </div>
                </div>
              </div>
            </div> */}
           
          </div>
        </div>
      </section>
      {/* THIRD SECTION */}
      <section className="text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <button className="bg-btn-primary text-white px-6 py-3 rounded-full font-normal">AI FOR THE RETAILERS</button>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mt-9 mb-4">
              Retail & Service Transformation
            </h2>
            <p className="text-sm md:text-base mb-5 md:mb-10 xl:mb-14 text-text-second max-w-2xl mx-auto">
              Bring digital innovation to stores. Deliver seamless shopping
              experiences across channels to drive growth and create more
              engaging experiences that win loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center space-x-4">
              <img
                src="path_to_globe_icon.png"
                alt="OS"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-2xl font-bold">2.5x</h3>
                <p className="text-gray-400">Growth</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="path_to_chart_icon.png"
                alt="Chart"
                className="w-16 h-16"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-2xl font-bold">5x</h3>
                <p className="text-gray-400">Benefits for</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Standards</h3>
              <p className="text-gray-400 mb-2">OS</p>
              <img
                src="path_to_store_image.jpg"
                alt="Store"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">New</h3>
              <p className="text-gray-400 mb-2">Eco system</p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="path_to_computer_icon.png"
                  alt="Computer"
                  className="w-20 h-20 mx-auto"
                />
                <img
                  src="path_to_people_icon.png"
                  alt="People"
                  className="w-20 h-20 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span className="w-3 h-3 rounded-full bg-pink-500"></span>
        </div>
      </section>
      {/* FOURTH SECTION */}
      {/* FIFTH SECTION */}
      <section className="text-white py-16 px-32">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl pr-0 overflow-hidden mx-auto bg-black rounded-40px bg-radial px-16 pt-20 relative before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50">
            
              <div className="flex flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 z-10">
                  <h2 className="text-2xl !leading-3.25rem md:text-3xl xl:text-40px font-semibold mb-6">
                  Pizza ipsum dolor meat lovers buffalo.
                  </h2>
                  <ul className="flex flex-wrap gap-4 mb-6">
                    {[
                      "Free Trial",
                      "Consult API Expert",
                      "Robust Customer Support",
                      "Plug & Play API",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center mb-3">
                        <svg
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-white rounded-full text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact Us
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div className="w-full lg:w-1/2 flex items-center z-10">
                  <Image src={heroSlider} alt="hero-mg" className="w-full h-full"/>
                </div>
              </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
