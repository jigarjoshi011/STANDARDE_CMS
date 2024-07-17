"use client";
import { NextPage } from "next";
import HeroImg from "../../public/images/hero-img.png"
import HeroSlider from "../../public/images/hero-img-next.png"
import Highlight from "../../public/images/highlight.png"
import Highlight01 from "../../public/images/hight-img.png"
import Highlight02 from "../../public/images/hight-img-01.png"
import Highlight03 from "../../public/images/hight-img-03.png"
import AixsBank from "../../public/images/aixs-bank.png"
import IciciBank from "../../public/images/icici-bank.png"
import Velocity from "../../public/images/velocity.png"
import NanoBank from "../../public/images/nano-bank.png"
import RelieanceBank from "../../public/images/relieance-bank.png"
import ProductTarget from "../../public/images/product-target.png"
import Packcar from "../../public/images/pack-car.png"
import PackBox from "../../public/images/pack-box.png"
import Image from "next/image";
import HighlightSection from "@/components/HighlightsComponents/HeroSection/HeroSection";


const Highlights: NextPage = () => {
  return (
    <>
      {/* <section className="px-10 pt-100px">
        <div className="bg-bg-dark rounded-40px px-15px lg:px-14 pt-20 overflow-hidden">
          <div className="relative text-center">
            <h1 className="text-40px font-normal text-white leading-8">
              This is{" "}
            </h1>
            <Image src={Highlight} alt="highlight" className="mx-auto" />
          </div>
          <div className="flex gap-60px justify-center">
            <div className="relative group cursor-pointer">
              <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
                <h3 className="text-white font-bold   text-40px text-center mt-16">
                  Marketplace
                </h3>
              </div>
              <div className="h-298px relative duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
                <Image src={Highlight01} alt="highlight" className="mx-auto" />
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
                <h3 className="text-white font-bold   text-40px text-center mt-16">
                  Retail App
                </h3>
              </div>
              <div className="relative h-298px duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
                <Image src={Highlight02} alt="highlight" className="mx-auto" />
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
                <h3 className="text-white font-bold   text-40px text-center mt-16">
                  Retail App
                </h3>
              </div>
              <div className="relative h-298px duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
                <Image src={Highlight03} alt="highlight" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <HighlightSection />
      <section className=" px-15px lg:px-14 xl:px-40 py-5">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Image src={AixsBank} alt="AixsBank" className="mx-auto" />
          </div>
          <div className="relative">
            <Image src={IciciBank} alt="AixsBank" className="mx-auto" />
          </div>
          <div className="relative">
            <Image src={Velocity} alt="AixsBank" className="mx-auto" />
          </div>
          <div className="relative">
            <Image src={NanoBank} alt="AixsBank" className="mx-auto" />
          </div>
          <div className="relative">
            <Image src={RelieanceBank} alt="AixsBank" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className=" px-15px lg:px-14 xl:px-40 py-20">
        <div className="flex -mx-15px">
          <div className="w-1/2 px-15px">
            <div className=" rounded-3xl bg-highlight-primary p-10">
              <h3 className="text-black font-medium text-34px leading-3rem">
                Scale 10x in offline retail by precisely targeting the right
                consumers.
              </h3>

              <div className="relative mt-70px flex justify-end">
                <div className="w-24 h-24 rounded-20px bg-card-second flex items-center justify-center">
                  <svg
                    className="w-11 fill-white"
                    viewBox="0 0 46 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M33.9995 2.25C33.9995 1.65326 34.2365 1.08097 34.6585 0.659009C35.0805 0.237053 35.6527 0 36.2495 0H43.7495C44.3462 0 44.9185 0.237053 45.3405 0.659009C45.7624 1.08097 45.9995 1.65326 45.9995 2.25V9.75C45.9995 10.3467 45.7624 10.919 45.3405 11.341C44.9185 11.7629 44.3462 12 43.7495 12C43.1527 12 42.5804 11.7629 42.1585 11.341C41.7365 10.919 41.4995 10.3467 41.4995 9.75V7.68L28.0895 21.09C27.6676 21.5114 27.0957 21.748 26.4995 21.748C25.9032 21.748 25.3314 21.5114 24.9095 21.09L17.4995 13.68L4.83949 26.34C4.6335 26.5611 4.3851 26.7384 4.1091 26.8613C3.8331 26.9843 3.53516 27.0504 3.23305 27.0558C2.93094 27.0611 2.63086 27.0055 2.35069 26.8924C2.07053 26.7792 1.81603 26.6108 1.60237 26.3971C1.38871 26.1835 1.22028 25.929 1.10712 25.6488C0.993953 25.3686 0.938379 25.0685 0.94371 24.7664C0.94904 24.4643 1.01517 24.1664 1.13814 23.8904C1.26112 23.6144 1.43842 23.366 1.65948 23.16L15.9095 8.91C16.3314 8.48865 16.9032 8.25198 17.4995 8.25198C18.0957 8.25198 18.6676 8.48865 19.0895 8.91L26.4995 16.32L38.3195 4.5H36.2495C35.6527 4.5 35.0805 4.26295 34.6585 3.84099C34.2365 3.41903 33.9995 2.84674 33.9995 2.25ZM3.24948 36C3.84622 36 4.41852 36.2371 4.84048 36.659C5.26243 37.081 5.49948 37.6533 5.49948 38.25V45.75C5.49948 46.3467 5.26243 46.919 4.84048 47.341C4.41852 47.7629 3.84622 48 3.24948 48C2.65275 48 2.08045 47.7629 1.65849 47.341C1.23654 46.919 0.999484 46.3467 0.999484 45.75V38.25C0.999484 37.6533 1.23654 37.081 1.65849 36.659C2.08045 36.2371 2.65275 36 3.24948 36ZM17.4995 29.25C17.4995 28.6533 17.2624 28.081 16.8405 27.659C16.4185 27.2371 15.8462 27 15.2495 27C14.6527 27 14.0805 27.2371 13.6585 27.659C13.2365 28.081 12.9995 28.6533 12.9995 29.25V45.75C12.9995 46.3467 13.2365 46.919 13.6585 47.341C14.0805 47.7629 14.6527 48 15.2495 48C15.8462 48 16.4185 47.7629 16.8405 47.341C17.2624 46.919 17.4995 46.3467 17.4995 45.75V29.25ZM27.2495 33C27.8462 33 28.4185 33.2371 28.8405 33.659C29.2624 34.081 29.4995 34.6533 29.4995 35.25V45.75C29.4995 46.3467 29.2624 46.919 28.8405 47.341C28.4185 47.7629 27.8462 48 27.2495 48C26.6527 48 26.0805 47.7629 25.6585 47.341C25.2365 46.919 24.9995 46.3467 24.9995 45.75V35.25C24.9995 34.6533 25.2365 34.081 25.6585 33.659C26.0805 33.2371 26.6527 33 27.2495 33ZM41.4995 23.25C41.4995 22.6533 41.2624 22.081 40.8405 21.659C40.4185 21.2371 39.8462 21 39.2495 21C38.6527 21 38.0805 21.2371 37.6585 21.659C37.2365 22.081 36.9995 22.6533 36.9995 23.25V45.75C36.9995 46.3467 37.2365 46.919 37.6585 47.341C38.0805 47.7629 38.6527 48 39.2495 48C39.8462 48 40.4185 47.7629 40.8405 47.341C41.2624 46.919 41.4995 46.3467 41.4995 45.75V23.25Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-15px">
            <div className=" rounded-3xl bg-card-primary p-10">
              <h3 className="text-white font-medium text-34px leading-3rem">
                Scale 10x in offline retail by precisely targeting the right
                consumers.
              </h3>

              <div className="relative mt-70px flex justify-end">
                <div className="w-24 h-24 rounded-20px bg-card-third flex items-center justify-center">
                  <svg
                    className="w-11 fill-white"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.875 2.375C0.875 1.54657 1.54657 0.875 2.375 0.875H15.5C16.3284 0.875 17 1.54657 17 2.375C17 3.20343 16.3284 3.875 15.5 3.875H5.99315L18.4355 16.3142C19.0214 16.8999 19.0215 17.8497 18.4358 18.4355C17.8501 19.0214 16.9003 19.0215 16.3145 18.4358L3.875 5.99949V15.5C3.875 16.3284 3.20343 17 2.375 17C1.54657 17 0.875 16.3284 0.875 15.5V2.375ZM29 2.375C29 1.54657 29.6716 0.875 30.5 0.875H43.625C44.4534 0.875 45.125 1.54657 45.125 2.375V15.5C45.125 16.3284 44.4534 17 43.625 17C42.7966 17 42.125 16.3284 42.125 15.5V5.99315L29.6858 18.4355C29.1001 19.0214 28.1503 19.0215 27.5645 18.4358C26.9786 17.8501 26.9785 16.9003 27.5642 16.3145L40.0005 3.875H30.5C29.6716 3.875 29 3.20343 29 2.375ZM18.4355 27.5642C19.0214 28.1499 19.0215 29.0997 18.4358 29.6855L5.99949 42.125H15.5C16.3284 42.125 17 42.7966 17 43.625C17 44.4534 16.3284 45.125 15.5 45.125H2.375C1.54657 45.125 0.875 44.4534 0.875 43.625V30.5C0.875 29.6716 1.54657 29 2.375 29C3.20343 29 3.875 29.6716 3.875 30.5V40.0069L16.3142 27.5645C16.8999 26.9786 17.8497 26.9785 18.4355 27.5642ZM27.5642 27.5645C28.1499 26.9786 29.0997 26.9785 29.6855 27.5642L42.125 40.0005V30.5C42.125 29.6716 42.7966 29 43.625 29C44.4534 29 45.125 29.6716 45.125 30.5V43.625C45.125 44.4534 44.4534 45.125 43.625 45.125H30.5C29.6716 45.125 29 44.4534 29 43.625C29 42.7966 29.6716 42.125 30.5 42.125H40.0069L27.5645 29.6858C26.9786 29.1001 26.9785 28.1503 27.5642 27.5645Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-15px lg:px-14 xl:px-40 py-40 bg-black">
        <div className="flex -mx-4">
          <div className="w-1/2 px-4">
            <h2 className="text-40px leading-3rem font-bold font-raleway text-white">
              World’s first offline retail AI search engine.
            </h2>
            <div className="mt-16">
              <div className="border-l-4 border-card-third pl-5">
                <h5 className="font-medium text-xl text-white mb-2">
                  AI Search{" "}
                </h5>
                <p className="text-base font-light text-white">
                  Pizza ipsum dolor meat lovers buffalo. Hand pizza sauce meat
                  extra. Pepperoni spinach hand green meatball deep.
                </p>
                <a
                  href="#"
                  className="text-card-third text-base font-normal flex gap-2 items-center mt-3"
                >
                  Learn More
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.51989 0.479943C9.71516 0.675205 9.71516 0.991787 9.51989 1.18705L1.18656 9.52038C0.991299 9.71564 0.674717 9.71564 0.479454 9.52038C0.284192 9.32512 0.284192 9.00854 0.479454 8.81328L8.81279 0.479943C9.00805 0.284681 9.32463 0.284681 9.51989 0.479943Z"
                        fill="#5540D6"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.333008 0.833496C0.333008 0.557354 0.556865 0.333496 0.833008 0.333496H9.16634C9.44248 0.333496 9.66634 0.557354 9.66634 0.833496V9.16683C9.66634 9.44297 9.44248 9.66683 9.16634 9.66683C8.8902 9.66683 8.66634 9.44297 8.66634 9.16683V1.3335H0.833008C0.556865 1.3335 0.333008 1.10964 0.333008 0.833496Z"
                        fill="#5540D6"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="mt-8 pl-6">
                <h5 className="font-medium text-xl text-white/50 mb-2">
                  Marketplace{" "}
                </h5>
                <p className="text-base font-light text-text-primary">
                  Pizza ipsum dolor meat lovers buffalo. Hand pizza sauce meat
                  extra. Pepperoni spinach hand green meatball deep.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <Image src={HeroImg} alt="HeroImg" />
          </div>
        </div>
      </section>

      <section className=" px-15px lg:px-14 xl:px-40 py-20">
        <h2 className="text-text-primary text-40px font-semibold">
          Product features
        </h2>
        <div className="flex flex-wrap gap-y-6  mt-10 -mx-3">
          <div className="w-[60%] px-3">
            <div className="bg-card-primary px-8 pb-8 rounded-40px overflow-hidden">
              <div className="rounded-32px overflow-hidden -translate-y-4">
                <Image src={HeroSlider} alt="HeroImg" className="mx-auto" />
              </div>
              <div className="mt-14">
                <h5 className="font-medium text-2xl text-white mb-2">
                  Search{" "}
                </h5>
                <p className="text-base font-light text-white">
                  Pizza ipsum dolor meat lovers buffalo. Marinara .
                </p>
              </div>{" "}
            </div>
          </div>
          <div className="w-[40%] px-3">
            <div className="bg-card-primary  py-8 rounded-40px overflow-hidden">
              <div className="mt-0 px-8">
                <h5 className="font-medium text-2xl text-white mb-2">
                  Search{" "}
                </h5>
                <p className="text-base font-light text-white">
                  Pizza ipsum dolor meat lovers buffalo. Marinara .
                </p>
              </div>
              <div className=" overflow-hidden -translate-y-4 mt-60px">
                <Image
                  src={ProductTarget}
                  alt="HeroImg"
                  className="mx-auto w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-3">
            <div className="bg-card-primary  p-8 rounded-40px overflow-hidden">
              <div className="mt-0 px-8">
                <h5 className="font-medium text-2xl text-white mb-2">
                  Launch{" "}
                </h5>
                <p className="text-base font-light text-white">
                  Pizza ipsum dolor meat lovers buffalo. Marinara meatball pan
                  hand large .
                </p>
              </div>
              <div className=" overflow-hidden -translate-y-4 mt-14 flex px-8">
                <div className="w-1/2 px-5">
                  <div className="bg-card-fourth p-6  rounded-3xl">
                    <div className="relative space-y-4">
                      <p className="text-5xl font-extrabold text-light-grey">
                        01
                      </p>
                      <h5 className="text-3xl font-normal text-white">
                        Distribute
                      </h5>
                    </div>
                    <div className="relative">
                      <Image src={Packcar} alt="Packcar" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-5">
                  <div className="bg-card-fourth p-6  rounded-3xl">
                    <div className="relative space-y-4">
                      <p className="text-5xl font-extrabold text-light-grey">
                        01
                      </p>
                      <h5 className="text-3xl font-normal text-white">
                        Distribute
                      </h5>
                    </div>
                    <div className="relative">
                      <Image src={PackBox} alt="Packcar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
