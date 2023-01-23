import Image from "next/image";
import Hero from "../components/UI/Hero";
import React from "react";
import AcademyHeader from "../components/Layout/Navigation/AcademyHeader";
import { NextSeo } from "next-seo";
import HeaderLogo from "@/components/UI/HeaderLogo";
import AcademyFooter from "@/components/Layout/Footer/AcademyFooter";

export default function VenuePage() {
  return (
    <>
      <NextSeo title="Venue &#8211; Robertson Gymnastics Academy" />
      <section
        className={` md:hero-height  bg-cover bg-fixed  md:py-4 bg-right-top text-white  bg-rg-robertson-venue-header`}
      >
        <AcademyHeader />
        <Hero
          title={"Venue"}
          subtitle={"A world-class facility for all ages and skill levels"}
        />
      </section>
      <div className="bg-gray-100 px-8 md:px-32">
        <section className="  flex flex-col justify-center items-center   gap-4 py-24">
          <div className="flex items-center justify-center py-4">
            <HeaderLogo />
          </div>

          <h1 className="text-4xl font-montserrat text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            Our Venue
          </h1>
          <p className="text-center font-open_sans my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 md:px-64 ">
            Robertson Gymnastics Academy is one of the largest gymnastics venues
            in Australia, situated in 1600 square metres of designated
            gymnastics area. The Academy is fully equipped for a large variety
            of gymnastics disciplines, from KinderGym through to the competitive
            streams. In addition to this, the Academy has air-conditioning
            facilities and undercover parking for up to 75 vehicles at any one
            time. Together, ''The Academy' and ''The Centre'' venues make
            Robertson Gymnastics one of the largest and most comprehensive
            providers of gymnastics sports in Australia.
          </p>
        </section>
        <section>
          <div className="grid">
            <Image
              src="/imgs/robertson-gymnastocs-academy-1-col-1.jpg"
              width={1500}
              height={700}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 my-12">
            <Image src="/imgs/gymnasium-bars.jpg" width={1500} height={700} />
            <Image
              src="/imgs/robertson-gymnastocs-academy-2-col-2.jpg"
              width={1500}
              height={700}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 my-12">
            <Image
              src="/imgs/robertson-gymnastocs-academy-3-col-3.jpg"
              width={1500}
              height={700}
            />
            <Image
              src="/imgs/bars-e1563330273200.jpg"
              width={1500}
              height={700}
            />
            <Image
              src="/imgs/robertson-gymnastocs-academy-3-col-1.jpg"
              width={1500}
              height={700}
            />
          </div>
        </section>
      </div>
      <AcademyFooter />
    </>
  );
}
