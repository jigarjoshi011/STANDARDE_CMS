import Image from "next/image";
import ProductSlideImage1 from "../../public/images/product_01.png";
import ProductSlideImage2 from "../../public/images/product_02.png";
import ProductSlideImage4 from "../../public/images/product_04.png";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
const ProductListing: FC = () => {
  return (
    <section className="text-white py-10 lg:py-14 pb-8 xl:py-100px overflow-hidden">
      <div className="container mx-0 pr-0 lg:px-24 md:px-10 xl:px-32 sm:px-4">
        <h2 className="text-16px md:text-32px text-text-primary font-semibold mb-10">
          Our products
        </h2>
      </div>
      <div className="mx-0 swiper-products">
        <Swiper
        
        slidesPerView={5.2}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          modules={[FreeMode, Pagination]}
          pagination={{
            enabled: false,
            clickable: false,
            bulletClass: "swiper-pagination-bullet",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            650: {
              slidesPerView: 2.1,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            800: {
              slidesPerView: 2.5,
              pagination: {
                enabled: true,
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
              },
            },
            1024: {
              slidesPerView: 3,
              pagination: {
                enabled: false,
              },
            },
            1240: {
              slidesPerView: 3.5,
              pagination: {
                enabled: false,
              },
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-card-bg p-8 pb-0 rounded-20px md:rounded-20px lg:rounded-32px h-560px overflow-hidden">
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
                <Image
                  src={ProductSlideImage1}
                  alt="ProductSlide"
                  className="mx-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-card-bg p-8 pb-0 rounded-20px md:rounded-32px h-560px overflow-hidden">
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
                <Image
                  src={ProductSlideImage2}
                  alt="ProductSlide"
                  className="mx-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-card-bg p-8 pb-0 rounded-20px md:rounded-32px h-560px overflow-hidden">
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
                <Image
                  src={ProductSlideImage1}
                  alt="ProductSlide"
                  className="mx-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-card-bg p-8 pb-0 rounded-20px md:rounded-32px h-560px overflow-hidden">
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
                <Image
                  src={ProductSlideImage4}
                  alt="ProductSlide"
                  className="mx-auto w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProductListing;
