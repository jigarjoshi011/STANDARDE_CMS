import Image from "next/image";
import React, { FC } from "react";
// import heroSlider from "../../public/images/AI search result mockup.svg";
import heroSlider from "../../public/images/ai-search.png";
import Link from "next/link";

const Advertize: FC = () => {
  return (
    <section className="text-white ">
      <div className="containerlg:w-full mx-0 py-10 md:py-16 px-15px lg:px-14 md:px-8 xl:px-32">
        <div className="max-w-8xl pr-0 md:pr-0 lg:pr-0 overflow-hidden mx-auto bg-black rounded-20px  md:h-unset md:rounded-40px bg-radial px-8 lg:px-10 pt-10 lg:pt-10 relative before:contents-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50 ">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 z-10 xl:pt-6 xl:pl-4">
              <h2 className="text-xl md:text-2xl lg:!leading-3.25rem lg:mb-3 lg:text-3xl xl:text-40px font-semibold mb-4 md:mb-6">
                Want to give your Brand an edge?
              </h2>
              <ul className="flex flex-wrap  mb-6  gap-y-2 gap-x-4">
                {[
                  "Free Trial",
                  "Enterprise-Ready",
                  "Robust Customer Support",
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
              <Link
                href={"https://www.highlight.standarde.in"}
                className="inline-flex items-center px-6 py-3 border border-white rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
              >
                Learn More
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
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex items-center z-10 ml-16">
              <div className="xl:max-h-[300px] md:max-h-64 md:h-64 xl:h-348px mt-6 ">
                <Image
                  src={heroSlider}
                  alt="hero-mg"
                  className="w-full h-full rounded-t-2xl md:ml-24 3xl:ml-48 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertize;
