"use client";
import { NextPage } from "next";
import Highlight from "../../public/images/highlight.png"
import Highlight01 from "../../public/images/hight-img.png"
import Highlight02 from "../../public/images/hight-img-01.png"
import Highlight03 from "../../public/images/hight-img-03.png"
import AixsBank from "../../public/images/aixs-bank.png"
import IciciBank from "../../public/images/icici-bank.png"
import Velocity from "../../public/images/velocity.png"
import NanoBank from "../../public/images/nano-bank.png"
import RelieanceBank from "../../public/images/relieance-bank.png"
import Image from "next/image";


const Highlights: NextPage = () => {
  return <>
  <section className="px-10 pt-100px">
    <div className="bg-bg-dark rounded-40px px-15px lg:px-14 pt-20 overflow-hidden">
      <div className="relative text-center">
        <h1 className="text-40px font-normal text-white leading-8">This is </h1>
       <Image src={Highlight} alt="highlight" className="mx-auto"/>
       </div>
       <div className="flex gap-60px justify-center">
        <div className="relative group cursor-pointer">
          <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
          <h3 className="text-white font-bold   text-40px text-center mt-16">Marketplace</h3>
          </div>
          <div className="h-298px relative duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
          <Image src={Highlight01} alt="highlight" className="mx-auto"/>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
          <h3 className="text-white font-bold   text-40px text-center mt-16">Retail App</h3>
          </div>
          <div className="relative h-298px duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
          <Image src={Highlight02} alt="highlight" className="mx-auto"/>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <div className="group-hover:opacity-100 transition-all duration-500 ease-in-out opacity-0 translate-y-10">
          <h3 className="text-white font-bold   text-40px text-center mt-16">Retail App</h3>
          </div>
          <div className="relative h-298px duration-700 transition-all ease-in-out translate-y-28 group-hover:translate-y-14">
          <Image src={Highlight03} alt="highlight" className="mx-auto"/>
          </div>
        </div>
       </div>
    </div>
  </section>
  <section className=" px-15px lg:px-14 xl:px-40 py-5">
    <div className="flex items-center justify-between">
      <div className="relative">
      <Image src={AixsBank} alt="AixsBank" className="mx-auto"/>
      </div>
      <div className="relative">
      <Image src={IciciBank} alt="AixsBank" className="mx-auto"/>
      </div>
      <div className="relative">
      <Image src={Velocity} alt="AixsBank" className="mx-auto"/>
      </div>
      <div className="relative">
      <Image src={NanoBank} alt="AixsBank" className="mx-auto"/>
      </div>
      <div className="relative">
      <Image src={RelieanceBank} alt="AixsBank" className="mx-auto"/>
      </div>
    </div>
  </section>
  <section className=" px-15px lg:px-14 xl:px-40 py-5">
    <div className="flex -mx-5">
      <div className="w-1/4 px-15px">
          <div className=" rounded-3xl bg-highlight-primary p-10">
            <h3>Scale 10x in offline retail by precisely targeting the right consumers.</h3>
          </div>
      </div>
    </div>
  </section>
  </>;
};

export default Highlights;
