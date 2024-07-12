"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import heroSlider from "../public/images/hero-slider.png";
import osLogo from "../public/images/os-logo.png";
import barChart from "../public/images/bar-chart.svg";
import AvatarGrp from "../public/images/avtar-grp.png";
import DesktopIcon from "../public/images/desktop.png";
import StoreIcon from "../public/images/store.png";
import ProductSlide from "../public/images/product_01.png";
import Gridone from "../public/images/geidone.png";
import Gridtwo from "../public/images/geidtwo.png";
import Gridthree from "../public/images/gridthree.png";
import Gridfour from "../public/images/gridfour.png";
import Gridfive from "../public/images/gridsix.png";
import Gridsix from "../public/images/store.png";
import Grideight from "../public/images/shopping.png";
import CartIcon from "../public/images/cart.png";
import ProductSlideImage1 from "../public/images/product_01.png";
import ProductSlideImage2 from "../public/images/product_02.png";
import ProductSlideImage4 from "../public/images/product_04.png";

import Button from "@/components/Button/Button";
import dynamic from "next/dynamic";
import Head from "next/head";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeatureList from "@/components/FeatureList/FeatureList";

const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground/AnimatedBackground"),
  { ssr: false }
);
const CarouselComponent = dynamic(() => import("@/components/Slider/Slider"), {
  ssr: false,
});

export default function Home() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productSliderSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Head>
        <title>Revolution of Retail Industry | Standarde</title>
        <meta
          name="description"
          content="Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta
          property="og:title"
          content="Revolution of Retail Industry | Standarde"
        />
        <meta
          property="og:description"
          content="Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Revolution of Retail Industry",
            description:
              "Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers.",
            url: "https://yourwebsite.com/",
            image: "https://yourwebsite.com/og-image.jpg",
            publisher: {
              "@type": "Organization",
              name: "Your Company Name",
              logo: {
                "@type": "ImageObject",
                url: "https://yourwebsite.com/logo.png",
              },
            },
          }),
        }}
      />
      <div>
        <HeroSection />
        <FeatureList />
        <section className="text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Button className="bg-btn-primary text-white px-6 py-3 rounded-full font-normal">
                Standarde Store’s
              </Button>
              <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mt-9 mb-4">
                Retail & Service Transformation
              </h2>
              <p className="text-sm md:text-base mb-5 md:mb-10 xl:mb-14 text-text-second max-w-2xl mx-auto">
                Bring digital innovation to stores. Deliver seamless shopping
                experiences across channels to drive growth and create more
                engaging experiences that win loyalty.
              </p>
            </div>
            <div className="l-ContentColumn">
            <div className="main-container gap-5">

              <div className="number-state bg-white/5 border border-white/10 p-8 rounded-20px">
              <Image src={Gridone} className=""/>
              <div className="text-center mt-5">
                <span className="text-xl font-normal text-white">Standanrde</span>
                <h5 className="uppercase text-40px font-bold text-white leading-snug">OS</h5>
              </div>
              </div>
              <div className="number-state bg-white/5 border border-white/10 p-8 rounded-20px ">
              <div className="flex justify-between items-center">
                  <div className="relative">
                  <h5 className="text-80px text-text-fifth font-bold leading-none">2.5x</h5>
                  <span>Growth</span>
                  </div>
                  <div className="relative">
                  <Image src={Gridthree} alt="gridthree"/>
                  </div>
                  </div>
              </div>
              <div className="number-state bg-white/5 border border-white/10 p-8 rounded-20px">
              <div className="relative flex items-end gap-4">
                  <h5 className="text-80px text-text-fifth font-bold leading-none">2.5x</h5>
                  <span>Benefits for</span>
                  </div>
                  <div className="flex gap-5 mt-[114px]">
                    <div className="bg-bg-second rounded-xl p-6 text-center">
                      <div className="h-28">
                      <Image src={Gridsix} alt="Gridsix" className="w-full h-full object-cover"/>
                      </div>
                      <h6 className="text-white text-xl font-medium">Store</h6>
                    </div>
                    <div className="bg-bg-second rounded-xl p-6 text-center">
                    <div className="h-28">
                      <Image src={Grideight} alt="Gridsix" className="w-full h-full object-cover"/>
                      </div>
                      <h6 className="text-white text-xl font-medium">Customer</h6>
                    </div>
                  </div>
              </div>
              <div className="number-state bg-white/5 border border-white/10 p-8number-state bg-white/5 border border-white/10 p-8 rounded-20px align-super flex-wrap rounded-20px flex flex-wrap justify-between">
              <div className="relative text-center w-full">
                  <h5 className="text-52px text-text-fifth font-bold leading-3.25rem">New</h5>
                  <span>Eco system</span>
                  </div>
                  <Image src={Gridtwo} alt="gridtwo" className="w-full object-cover"/>
                 
              </div>
              <div className="number-state bg-white/5 border border-white/10 p-0 rounded-20px overflow-hidden">
              <div className="relative w-full h-full">
                  <Image src={Gridfour} alt="public-shop" className="w-full h-full object-cover"/>
                </div>
                </div>
              <div className="number-state bg-white/5 pb-0 border border-white/10 p-8 rounded-20px align-super flex-wrap">
              <div className="relative block w-full"><h5>Foot fall</h5></div>
              <div className="relative w-full ml-2">
              <Image  src={Gridfive} alt="Gridfive" className="ml-auto"/>
              </div>
              </div>
              <div className="number-state bg-white/5 border border-white/10 p-8 rounded-20px flex  flex-wrap ">
              <div className="relative block w-full max-w-40 "><h5>Unified segment accross platforms.</h5></div>
              <div className="flex items-center  w-full justify-end"><div className="w-6 h-6 rounded-full bg-red-600"></div></div>
              </div>
            
            </div>
            </div>
            {/* <div className="flex">
              <div className="w-1/4 px-4">
                <div className="bg-white/5 border border-white/10 p-8 rounded-20px mb-5">
                <div className="relative mx-auto text-center">
                  <Image src={Gridone} alt="gridone" className="mx-auto mix-blend-screen"/>
                  <div className="mt-5 leading-10">
                    <span className="block text-white text-xl font-normal">Standanrde</span>
                    <h5 className="uppercase text-40px font-bold">OS</h5>
                  </div>
                  </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-20px">
                <div className="relative mx-auto text-center">
                <div className="relative mb-5">
                    <span className="block text-[#505051] text-5xl font-bold">New</span>
                    <h5 className="uppercase text-xl font-normal">Eco system</h5>
                  </div>

                  <Image src={Gridtwo} alt="gridone" className="mx-auto mix-blend-screen"/>

                  </div>
                  </div>
              </div>
              <div className="w-3/4 px-4"></div>
            </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center space-x-4">
                <Image src={osLogo} alt="OS" className="w-16 h-16" />
                <div>
                  <h3 className="text-2xl font-bold">2.5x</h3>
                  <p className="text-gray-400">Growth</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src={barChart} alt="Chart" className="w-16 h-16" />
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold">5x</h3>
                  <p className="text-gray-400">Benefits for</p>
                </div>
              </div>
            </div> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Standards</h3>
                <p className="text-gray-400 mb-2">OS</p>
                <Image
                  src={StoreIcon}
                  alt="Store"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">New</h3>
                <p className="text-gray-400 mb-2">Eco system</p>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src={DesktopIcon}
                    alt="Computer"
                    className="w-20 h-20 mx-auto"
                  />
                  <Image
                    src={AvatarGrp}
                    alt="People"
                    className="w-20 h-20 mx-auto"
                  />
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="flex justify-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
          </div> */}
        </section>
        {/* FOURTH SECTION */}
        <section className="text-white py-20 px-32 overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-32px text-text-primary font-semibold mb-10">
              Our products
            </h2>
            <Slider {...productSliderSettings}>
              <div className="w-1/3 px-2">
                <div className="bg-card-bg p-8 pb-0 rounded-32px max-h-560px">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <span className="uppercase text-base font-normal block">
                        STANDARDE
                      </span>
                      <h5 className="text-xl font-semibold">HIGHLIGHT</h5>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-2 h-3.5 fill-white"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.575638 0.575638C0.809953 0.341324 1.18985 0.341324 1.42417 0.575638L7.42417 6.57564C7.65848 6.80995 7.65848 7.18985 7.42417 7.42417L1.42417 13.4242C1.18985 13.6585 0.809953 13.6585 0.575638 13.4242C0.341324 13.1899 0.341324 12.81 0.575638 12.5756L6.15137 6.9999L0.575638 1.42417C0.341324 1.18985 0.341324 0.809953 0.575638 0.575638Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-16">
                    <Image src={ProductSlideImage1} alt="ProductSlide" className="mx-auto w-full" />
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-card-bg p-8 pb-0 rounded-32px max-h-560px">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <span className="uppercase text-base font-normal block">
                        STANDARDE
                      </span>
                      <h5 className="text-xl font-semibold"> POS platforms.</h5>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-2 h-3.5 fill-white"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.575638 0.575638C0.809953 0.341324 1.18985 0.341324 1.42417 0.575638L7.42417 6.57564C7.65848 6.80995 7.65848 7.18985 7.42417 7.42417L1.42417 13.4242C1.18985 13.6585 0.809953 13.6585 0.575638 13.4242C0.341324 13.1899 0.341324 12.81 0.575638 12.5756L6.15137 6.9999L0.575638 1.42417C0.341324 1.18985 0.341324 0.809953 0.575638 0.575638Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-16">
                    <Image src={ProductSlideImage2} alt="ProductSlide" className="mx-auto w-full" />
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-card-bg p-8 pb-0 rounded-32px max-h-560px">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <span className="uppercase text-base font-normal block">
                        STANDARDE
                      </span>
                      <h5 className="text-xl font-semibold">ERP platforms.</h5>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-2 h-3.5 fill-white"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.575638 0.575638C0.809953 0.341324 1.18985 0.341324 1.42417 0.575638L7.42417 6.57564C7.65848 6.80995 7.65848 7.18985 7.42417 7.42417L1.42417 13.4242C1.18985 13.6585 0.809953 13.6585 0.575638 13.4242C0.341324 13.1899 0.341324 12.81 0.575638 12.5756L6.15137 6.9999L0.575638 1.42417C0.341324 1.18985 0.341324 0.809953 0.575638 0.575638Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-16">
                    <Image src={ProductSlideImage1} alt="ProductSlide" className="mx-auto w-full" />
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-card-bg p-8 pb-0 rounded-32px max-h-560px">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <span className="uppercase text-base font-normal block">
                        STANDARDE
                      </span>
                      <h5 className="text-xl font-semibold">PARTNER</h5>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-2 h-3.5 fill-white"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.575638 0.575638C0.809953 0.341324 1.18985 0.341324 1.42417 0.575638L7.42417 6.57564C7.65848 6.80995 7.65848 7.18985 7.42417 7.42417L1.42417 13.4242C1.18985 13.6585 0.809953 13.6585 0.575638 13.4242C0.341324 13.1899 0.341324 12.81 0.575638 12.5756L6.15137 6.9999L0.575638 1.42417C0.341324 1.18985 0.341324 0.809953 0.575638 0.575638Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-16">
                    <Image src={ProductSlideImage4} alt="ProductSlide" className="mx-auto w-full" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* FIFTH SECTION */}
        <section className="text-white py-16 px-32">
          <div className="container mx-auto px-4">
            <div className="max-w-8xl pr-0 overflow-hidden mx-auto bg-black rounded-40px bg-radial px-16 pt-20 relative before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50">
              <div className="flex flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 z-10">
                  <h2 className="text-2xl !leading-3.25rem md:text-3xl xl:text-40px font-semibold mb-6">
                    Pizza ipsum dolor meat lovers buffalo.
                  </h2>
                  <ul className="flex flex-wrap  mb-6  gap-y-2 gap-x-4">
                    {[
                      "Free Trial",
                      "Consult API Expert",
                      "Robust Customer Support",
                      "Plug & Play API",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center   gap-2">
                        <svg
                          width="13"
                          height="14"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.5 0.5C5.21442 0.5 3.95772 0.881218 2.8888 1.59545C1.81988 2.30968 0.986756 3.32484 0.494786 4.51256C0.00281635 5.70028 -0.125905 7.00721 0.124899 8.26809C0.375703 9.52896 0.994767 10.6872 1.90381 11.5962C2.81285 12.5052 3.97104 13.1243 5.23192 13.3751C6.49279 13.6259 7.79972 13.4972 8.98744 13.0052C10.1752 12.5132 11.1903 11.6801 11.9046 10.6112C12.6188 9.54229 13 8.28558 13 7C12.9982 5.27665 12.3128 3.62441 11.0942 2.40582C9.87559 1.18722 8.22335 0.50182 6.5 0.5ZM9.35375 5.85375L5.85375 9.35375C5.80732 9.40024 5.75217 9.43712 5.69147 9.46228C5.63077 9.48744 5.56571 9.50039 5.5 9.50039C5.43429 9.50039 5.36923 9.48744 5.30853 9.46228C5.24783 9.43712 5.19269 9.40024 5.14625 9.35375L3.64625 7.85375C3.55243 7.75993 3.49972 7.63268 3.49972 7.5C3.49972 7.36732 3.55243 7.24007 3.64625 7.14625C3.74007 7.05243 3.86732 6.99972 4 6.99972C4.13268 6.99972 4.25993 7.05243 4.35375 7.14625L5.5 8.29312L8.64625 5.14625C8.69271 5.09979 8.74786 5.06294 8.80855 5.0378C8.86925 5.01266 8.93431 4.99972 9 4.99972C9.0657 4.99972 9.13075 5.01266 9.19145 5.0378C9.25215 5.06294 9.3073 5.09979 9.35375 5.14625C9.40021 5.1927 9.43706 5.24786 9.4622 5.30855C9.48734 5.36925 9.50028 5.4343 9.50028 5.5C9.50028 5.5657 9.48734 5.63075 9.4622 5.69145C9.43706 5.75214 9.40021 5.80729 9.35375 5.85375Z"
                            fill="white"
                          />
                        </svg>

                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-white rounded-full text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Try for Free
                    <svg
                      className="fill-white w-3 h-3 ml-3.5"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4242 0.575638C11.6585 0.809953 11.6585 1.18985 11.4242 1.42417L1.42417 11.4242C1.18985 11.6585 0.809953 11.6585 0.575638 11.4242C0.341324 11.1899 0.341324 10.81 0.575638 10.5756L10.5756 0.575638C10.81 0.341324 11.1899 0.341324 11.4242 0.575638Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.399902 0.999902C0.399902 0.668532 0.668532 0.399902 0.999902 0.399902H10.9999C11.3313 0.399902 11.5999 0.668532 11.5999 0.999902V10.9999C11.5999 11.3313 11.3313 11.5999 10.9999 11.5999C10.6685 11.5999 10.3999 11.3313 10.3999 10.9999V1.5999H0.999902C0.668532 1.5999 0.399902 1.33127 0.399902 0.999902Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>

                <div className="w-full lg:w-1/2 flex items-center z-10">
                  <div className="max-h-348px h-348px">
                    <Image
                      src={heroSlider}
                      alt="hero-mg"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
