"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Gridone from "../public/images/geidone.png";
import Gridtwo from "../public/images/geidtwo.png";
import Gridthree from "../public/images/gridthree.png";
import Gridfour from "../public/images/gridfour.png";
import Gridfive from "../public/images/gridsix.png";
import Gridsix from "../public/images/store.png";
import Grideight from "../public/images/shopping.png";

import Button from "@/components/Button/Button";
import Head from "next/head";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeatureList from "@/components/FeatureList/FeatureList";
import ProductListing from "@/components/ProductListing/ProductListing";
import Advertize from "@/components/Advertize/Advertize";

export default function Home() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        <link rel="canonical" href="https://standarde-cms.vercel.app/" />
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
          content="https://standarde-cms.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://standarde-cms.vercel.app/" />
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
            url: "https://standarde-cms.vercel.app/",
            image: "https://standarde-cms.vercel.app/og-image.jpg",
            publisher: {
              "@type": "Organization",
              name: "Your Company Name",
              logo: {
                "@type": "ImageObject",
                url: "https://standarde-cms.vercel.app//logo.png",
              },
            },
          }),
        }}
      />
      <div>
        <HeroSection />
        <FeatureList />
        <section className="text-white py-6 md:py-10 xl:py-16 px-5">
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
            <div className="l-ContentColumn w-full max-w-full xl:max-w-[1125px] mx-auto px-5 md:px-14 lg:px-0">
              <div className="main-container flex flex-wrap lg:grid w-full relative lg:gap-5">
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
                      <div className="relative">
                        <h5 className="text-80px text-text-fifth font-bold leading-none">
                          2.5x
                        </h5>
                        <span>Growth</span>
                      </div>
                      <div className="relative w-full lg:w-unset mt-8 lg:mt-0">
                        <Image
                          src={Gridthree}
                          alt="gridthree"
                          className="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="number-state !w-full">
                  <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px">
                    <div className="relative ">
                      <h5 className="text-80px text-text-fifth font-bold leading-none">
                        2.5x
                      </h5>
                      <span>Benefits for</span>
                    </div>
                    <div className="flex gap-5 mt-10 flex-wrap lg:flex-nowrap lg:mt-[114px]">
                      <div className="bg-bg-second w-full lg:w-unset rounded-xl p-6 text-center space-y-2 lg:space-y-0">
                        <div className="w-16 lg:w-unset h-16 mx-auto lg:h-28">
                          <Image
                            src={Gridsix}
                            alt="Gridsix"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h6 className="text-white text-base lg:text-xl font-medium">
                          Store
                        </h6>
                      </div>
                      <div className="bg-bg-second w-full lg:w-unset rounded-xl p-6 text-center space-y-2 lg:space-y-0">
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
                        New
                      </h5>
                      <span>Eco system</span>
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
                <div className="number-state ">
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
                <div className="number-state  !w-full">
                  <div className=" bg-white/5 w-full h-full pb-0 border border-white/10 p-8 pr-3 rounded-20px align-super flex-wrap space-y-3 lg:space-y-0">
                    <div className="relative block w-full">
                      <h5 className="text-xl text-white font-normal">
                        Foot fall
                      </h5>
                    </div>
                    <div className="relative w-full ml-2">
                      <Image
                        src={Gridfive}
                        alt="Gridfive"
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="number-state !w-full">
                  <div className=" bg-white/5 w-full h-full border border-white/10 p-8 rounded-20px flex  flex-wrap space-y-4 lg:space-y-0">
                    <div className="relative block w-full max-w-48">
                      <h5 className="text-base md:text-xl text-white font-normal">
                        Unified segment accross platforms.
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
        <ProductListing />
        <Advertize />
      </div>
    </>
  );
}
