import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className=" lg:w-full mx-0 px-15px md:px-8  lg:px-14  xl:px-32">
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start md:items-center">
          <div className="flex flex-col  space-y-4 md:space-y-9">
            <a href="#" className="uppercase font-semibold text-3xl text-white">
              standarde
            </a>
            <div className="flex space-x-4 md:space-x-6">
              <Link
                href={"#"}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  viewBox="0 0 33 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9894 0H31.0496L19.9946 12.7077L33 30H22.8153L14.8395 19.5123L5.71339 30H0.650118L12.4746 16.4077L0 0H10.4401L17.6496 9.58615L25.9864 0H25.9894ZM24.2135 26.9538H27.0174L8.91809 2.88615H5.90919L24.2135 26.9538Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5477 0H3.51041C2.14233 0 0.947021 0.984375 0.947021 2.33638V27.4292C0.947021 28.7886 2.14233 30 3.51041 30H28.5403C29.9158 30 30.947 28.7806 30.947 27.4292V2.33638C30.9551 0.984375 29.9158 0 28.5477 0ZM10.2464 25.0065H5.94858V11.6437H10.2464V25.0065ZM8.24613 9.61205H8.21532C6.83988 9.61205 5.94925 8.58817 5.94925 7.30647C5.94925 6.00134 6.86332 5.00156 8.26957 5.00156C9.67582 5.00156 10.5363 5.99397 10.5671 7.30647C10.5664 8.58817 9.67582 9.61205 8.24613 9.61205ZM25.9535 25.0065H21.6557V17.7C21.6557 15.9496 21.0303 14.7536 19.4754 14.7536C18.2874 14.7536 17.5843 15.5571 17.2716 16.34C17.1544 16.6212 17.1229 17.0042 17.1229 17.3953V25.0065H12.8251V11.6437H17.1229V13.5033C17.7484 12.6127 18.7254 11.331 20.9988 11.331C23.82 11.331 25.9542 13.1906 25.9542 17.1998L25.9535 25.0065Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 9.4C18.0927 9.4 20.6 11.9072 20.6 15C20.6 18.0927 18.0927 20.6 15 20.6C11.9072 20.6 9.4 18.0927 9.4 15C9.4 13.98 9.67271 13.0236 10.1492 12.2M23.4 6.6C23.4 6.9866 23.0865 7.3 22.7 7.3C22.3135 7.3 22 6.9866 22 6.6M23.4 6.6C23.4 6.2134 23.0865 5.9 22.7 5.9C22.3135 5.9 22 6.2134 22 6.6M23.4 6.6H22M12.2 29H17.8C21.7204 29 23.6806 29 25.178 28.237C26.4951 27.566 27.566 26.4951 28.237 25.178C29 23.6806 29 21.7204 29 17.8V12.2C29 8.27964 29 6.31945 28.237 4.82207C27.566 3.50494 26.4951 2.43406 25.178 1.76296C23.6806 1 21.7204 1 17.8 1H12.2C8.27964 1 6.31945 1 4.82207 1.76296C3.50494 2.43406 2.43406 3.50494 1.76296 4.82207C1 6.31945 1 8.27964 1 12.2V17.8C1 21.7204 1 23.6806 1.76296 25.178C2.43406 26.4951 3.50494 27.566 4.82207 28.237C6.31945 29 8.27964 29 12.2 29Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-footer-primary/40 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0C18.4535 0 19.9444 0.0412502 21.3894 0.10875L23.0962 0.19875L24.7299 0.305625L26.2599 0.42L27.6573 0.54C29.1738 0.668021 30.6008 1.38178 31.6872 2.5557C32.7736 3.72962 33.4499 5.28851 33.5971 6.95812L33.6651 7.755L33.7926 9.46125C33.9116 11.2294 34 13.1569 34 15C34 16.8431 33.9116 18.7706 33.7926 20.5388L33.6651 22.245C33.643 22.5188 33.6209 22.7831 33.5971 23.0419C33.4499 24.7118 32.7733 26.2709 31.6866 27.4449C30.5998 28.6188 29.1724 29.3324 27.6556 29.46L26.2616 29.5781L24.7316 29.6944L23.0962 29.8012L21.3894 29.8912C19.9271 29.9613 18.4637 29.9976 17 30C15.5363 29.9976 14.0729 29.9613 12.6106 29.8912L10.9038 29.8012L9.2701 29.6944L7.7401 29.5781L6.3427 29.46C4.82622 29.332 3.39924 28.6182 2.3128 27.4443C1.22637 26.2704 0.550076 24.7115 0.4029 23.0419L0.3349 22.245L0.2074 20.5388C0.0774138 18.6959 0.00823483 16.8484 0 15C0 13.1569 0.0884 11.2294 0.2074 9.46125L0.3349 7.755C0.357 7.48125 0.3791 7.21687 0.4029 6.95812C0.550019 5.28881 1.22607 3.73015 2.31216 2.55627C3.39824 1.38238 4.82482 0.668442 6.341 0.54L7.7367 0.42L9.2667 0.305625L10.9021 0.19875L12.6089 0.10875C14.0718 0.0386868 15.5358 0.00242866 17 0ZM17 3.75C15.5975 3.75 14.1542 3.79125 12.75 3.855L11.0874 3.94313L9.4911 4.04625L7.9917 4.15875L6.6181 4.27688C5.89616 4.33337 5.21568 4.66996 4.69726 5.22699C4.17884 5.78401 3.85598 6.52549 3.7859 7.32C3.587 9.58687 3.4 12.4087 3.4 15C3.4 17.5912 3.587 20.4131 3.7859 22.68C3.9304 24.315 5.1068 25.5862 6.6181 25.7231L7.9917 25.8394L9.4911 25.9519L11.0874 26.0569L12.75 26.145C14.1542 26.2088 15.5975 26.25 17 26.25C18.4025 26.25 19.8458 26.2088 21.25 26.145L22.9126 26.0569L24.5089 25.9537L26.0083 25.8412L27.3819 25.7231C28.1038 25.6666 28.7843 25.33 29.3027 24.773C29.8212 24.216 30.144 23.4745 30.2141 22.68C30.413 20.4131 30.6 17.5912 30.6 15C30.6 12.4087 30.413 9.58687 30.2141 7.32C30.144 6.52549 29.8212 5.78401 29.3027 5.22699C28.7843 4.66996 28.1038 4.33337 27.3819 4.27688L26.0083 4.16062L24.5089 4.04812L22.9126 3.94313L21.25 3.855C19.8341 3.78781 18.4172 3.7528 17 3.75ZM13.6 10.4531C13.5999 10.2699 13.6404 10.0894 13.7179 9.92729C13.7955 9.76522 13.9077 9.6265 14.045 9.52319C14.1822 9.41988 14.3403 9.35511 14.5054 9.33451C14.6705 9.31392 14.8376 9.33811 14.9923 9.405L15.13 9.48L22.27 14.025C22.4122 14.1155 22.5325 14.2425 22.6206 14.3952C22.7088 14.5479 22.7622 14.7218 22.7764 14.9022C22.7906 15.0826 22.7651 15.2641 22.7021 15.4313C22.6391 15.5984 22.5404 15.7464 22.4145 15.8625L22.27 15.975L15.13 20.5219C14.9861 20.6138 14.824 20.6655 14.6579 20.6725C14.4918 20.6795 14.3266 20.6416 14.1767 20.5621C14.0269 20.4827 13.897 20.364 13.7982 20.2164C13.6995 20.0689 13.6349 19.897 13.6102 19.7156L13.6 19.5469V10.4531Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-sm text-left md:text-center sm:text-right ">
            <div className="flex items-center justify-start md:justify-end mb-3 xl:mb-6">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <Link
                href="tel:+91-8805520651"
                className="text-footer-primary/40 font-montserrat transition-all font-montserrat ease-in-out duration-300 hover:text-footer-primary text-lg font-normal "
              >
                +91-8805520651
              </Link>
            </div>
            <div className="flex items-center justify-start md:justify-center sm:justify-end">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <Link
                href="mailto:info@neuralnextsystems.com"
                className="text-footer-primary/40 transition-all ease-in-out duration-300 hover:text-footer-primary text-lg font-normal font-montserrat"
              >
                info@neuralnextsystems.com
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 py-6 pb-2.5 hidden  border-t border-white/20  md:flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <ul className="flex items-center ">
              <li>
                <Link
                  href={
                    "https://www.standarde.in/_files/ugd/8b717c_52e3110ade944b21811d5cadf779cc07.docx?dn=HIGHLiGHT%20Privacy%20Policy.docx"
                  }
                  className="text-footer-primary/60 font-manrope font-normal hover:text-footer-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <p className="text-footer-primary/60 text-sm font-normal font-m px-3.5">
                  .
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="text-footer-primary/60 font-manrope hover:text-footer-primary hover:underline text-sm font-normal"
                >
                  Terms of Conditions
                </a>
              </li>
            </ul>
          </div>
          <p className="text-footer-primary/60 text-sm font-normal font-montserrat">
            Attentions Data Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
