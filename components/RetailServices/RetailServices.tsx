import Image from "next/image";
import React from "react";
import Gridone from "../../public/images/osSystem.png";
import Gridtwo from "../../public/images/geidtwo.png";
import Gridthree from "../../public/images/chart.svg";
import Gridfour from "../../public/images/gridfour.png";
import Gridfive from "../../public/images/Footfall.svg";
import Store from "../../public/images/store.svg";
import Mobproduct from "../../public/images/mobile-view-product.png";
import Grideight from "../../public/images/customer.svg";
import Button from "../Button/Button";

const RetailServices = () => {
  return (
    <section className="text-white py-6 md:py-10 xl:py-16 px-15px lg:px-14 ">
      <div className="max-w-[80rem] mx-auto">
        <div className="text-center mb-12">
          <Button className="bg-btn-primary text-white px-6 py-3 rounded-full font-normal">
            Solutions for Retailers
          </Button>
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mt-9 mb-4">
            Transforming Physical Retail
          </h2>
          <p className="text-sm md:text-base mb-5 md:mb-10 xl:mb-14 text-text-second max-w-2xl mx-auto">
            Uplifting the fragmented Kirana Stores & Grocery segment serving
            India&apos;s local consumers. Propelling them into the next orbit of
            Digitisation in India.
          </p>
        </div>
        <div className="l-ContentColumn w-full max-w-full xl:max-w-[1200px] mx-auto px-15px lg:px-4 md:px-4 ">
          <Image
            src={Mobproduct}
            className="w-full h-full block xl:hidden"
            alt="Mobproduct"
          />
          <div className="main-container hidden  flex-wrap xl:grid  w-full relative xl:gap-5">
            <div className="number-state">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px">
                <Image src={Gridone} className="mx-auto" alt="ge-1" />
                <div className="text-center mt-5">
                  <span className="text-xl font-normal text-white">
                    Standanrde
                  </span>
                  <h5 className="uppercase text-40px font-bold text-white leading-snug">
                    OS
                  </h5>
                </div>
              </div>
            </div>
            <div className="number-state">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px ">
                <div className="flex justify-between items-center flex-wrap">
                  <div className="relative w-full xl:w-unset">
                    <h5 className="text-80px text-text-fifth font-bold leading-none">
                      2.5x
                    </h5>
                    <span>Growth in Business.</span>
                  </div>
                  <div className="relative w-full xl:w-unset mt-8 xl:mt-0">
                    <Image
                      src={Gridthree}
                      alt="gridthree"
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="number-state !w-full lg:!w-1/2 xl:!w-full">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px">
                <div className="relative flex items-end gap-5">
                  <h5 className="text-80px text-text-fifth font-bold leading-none">
                    5.0x
                  </h5>
                  <span>Benefits for both</span>
                </div>
                <div className="flex gap-5 mt-7 flex-wrap lg:flex-nowrap lg:mt-[114px]">
                  <div className="bg-bg-second w-full lg:w-1/2 rounded-xl p-6 text-center space-y-2 lg:space-y-0">
                    <div className="w-16 lg:w-unset h-16 mx-auto lg:h-28">
                      <Image
                        src={Store}
                        alt="Store"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h6 className="text-white text-base lg:text-xl font-medium">
                      Store
                    </h6>
                  </div>
                  <div className="bg-bg-second w-full lg:w-1/2 rounded-xl p-6 text-center space-y-2 lg:space-y-0">
                    <div className="w-16 lg:w-unset h-16 mx-auto lg:h-28">
                      <Image
                        src={Grideight}
                        alt="Gridsix"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h6 className="text-white text-base lg:text-xl font-medium">
                      Customer
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="number-state">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-8 pb-5 rounded-20px">
                <div className="relative text-center w-full">
                  <h5 className="text-52px text-text-fifth font-bold leading-3.25rem">
                    Store
                  </h5>
                  <span>Automation</span>
                </div>
                <div className="h-24 mt-4 lg:mt-0 lg:h-full">
                  <Image
                    src={Gridtwo}
                    alt="gridtwo"
                    className="w-full h-full content-end object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="number-state lg:!w-full xl:!w-unset ">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-0 rounded-20px overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={Gridfour}
                    alt="public-shop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="number-state !w-full xl:!w-full lg:!w-1/2">
              <div className=" bg-white/5 w-full h-full pb-0 border border-white/10 p-8 pr-3 rounded-20px align-super flex-wrap space-y-3 lg:space-y-0">
                <div className="relative block w-full">
                  <h5 className="text-xl text-white font-normal">Footfall+</h5>
                </div>
                <div className="relative w-full ml-2">
                  <Image src={Gridfive} alt="Gridfive" className="ml-auto" />
                </div>
              </div>
            </div>
            <div className="number-state !w-full xl:!w-full lg:!w-1/2">
              <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px flex  flex-wrap space-y-4 lg:space-y-0">
                <div className="relative block w-full max-w-80">
                  <h5 className="text-base md:text-xl text-white font-normal">
                    Serving Various Retail <br /> Categories.
                  </h5>
                </div>
                <div className="flex items-center  w-full justify-end">
                  <div className="flex justify-center space-x-2 md:space-x-6">
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-green-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-indigo-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-purple-500"></span>
                    <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-pink-500"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailServices;
