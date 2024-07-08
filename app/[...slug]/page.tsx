"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const CMSPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const { slug } = useParams<{ slug: string[] }>();
  return (
    <div>
      <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Revolution of Retail Industry
          </h1>
          <p className="text-sm md:text-base mb-8 text-gray-400 max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            cr
          </p>
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 transition duration-300">
            AI FOR THE RETAILERS
          </button>

          <h2 className="text-2xl md:text-4xl font-bold mt-16 mb-4">
            Generative AI Search
          </h2>
          <p className="text-sm md:text-base mb-8 text-gray-400 max-w-2xl mx-auto">
            Pizza ipsum dolor meat lovers buffalo. Olives pineapple Chicago
            pesto mayo rib ipsum melted sausage lovers. Large wing green stuffed
            crust pan stuffed.
          </p>

          <div className="mt-8 bg-gray-900 rounded-lg p-4 max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* <Image src="path-to-your-search-interface-image.jpg" alt="Search Interface" className="w-full rounded-lg shadow-lg"> */}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <Image src="path-to-image1.jpg" alt="Retail Image 1" className="w-full h-40 object-cover rounded-lg">
                <Image src="path-to-image2.jpg" alt="Retail Image 2" className="w-full h-40 object-cover rounded-lg">
                <Image src="path-to-image3.jpg" alt="Retail Image 3" className="w-full h-40 object-cover rounded-lg"> */}
          </div>
        </div>
      </section>
      {/* SECOND SECTION */}
      <section className="bg-black text-white py-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">AI Search Feature list</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="slider-container relative">
                <div className="slider flex transition-transform duration-300 ease-in-out">
                  <div className="card flex-shrink-0 w-full md:w-96 bg-gray-800 rounded-lg p-6 mr-4">
                    <Slider {...settings}>
                      <div
                        className="feature-item h-full "
                      >
                        <div className="feature-item-inside bg-lightGray lg:px-[70px] lg:py-[60px] px-[30px] py-[20px] h-full">
                          <div className="feature-desc font-normal lg:[&>p]:text-[26px] [&>p]:text-[18px] [&>p]:italic pb-14 tracking-[0.2px]">
                            {/* <p>&quot;{firstEl?.description}&quot;</p> */}
                          </div>
                          <div className="testimonial-name">
                            <h4 className="!mb-0">
                              {/* {firstEl?.testimonial_name} */}
                            </h4>
                            {/* <p>{firstEl?.testimonial_designation}</p> */}
                          </div>
                        </div>
                      </div>
                    </Slider>
                    {/* <img src="path-to-card-image.jpg" alt="Feature" className="w-full h-48 object-cover rounded-lg mb-4"> */}
                    <h3 className="text-xl font-semibold mb-2">
                      Feature Title
                    </h3>
                    <p className="text-gray-400">
                      Feature description goes here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* <img src="path-to-large-image.jpg" alt="AI Search Interface" className="w-full rounded-lg shadow-lg"> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMSPage;
