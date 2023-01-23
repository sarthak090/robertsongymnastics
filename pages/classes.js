import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BeginnerClass from "../constant/classes/Beginner.json";
import AdvancedClass from "../constant/classes/Advanced.json";
import AcademyHeader from "../components/Layout/Navigation/AcademyHeader";
import Hero from "@/components/UI/Hero";
import { NextSeo } from "next-seo";
import HeaderLogo from "@/components/UI/HeaderLogo";

export default function Classes() {
  const [selectedCls, setSelectedCls] = useState("0");

  return (
    <>
      <NextSeo
        // canonical={process.env.NEXT_PUBLIC_DOMAIN + "/classes"}
        title="Classes &#8211; Robertson Gymnastics Academy"
      />
      <section
        className={` md:hero-height bg-cover bg-fixed  lg:pb-44 bg-right-top text-white  bg-rg-robertson-classes-bg`}
      >
        <AcademyHeader />
        <Hero
          title="Classes"
          subtitle="View our range of classes by skill and age level
"
        />
      </section>
      <div className="bg-gray-100 px-2 lg:px-28">
        <section className="  flex flex-col justify-center items-center   gap-4 py-24">
          <div className="flex items-center justify-center py-4">
            <HeaderLogo />
          </div>

          <h1 className="text-4xl font-montserrat text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            Our Classes
          </h1>
          <p className="text-center font-open_sans my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 lg:px-64  ">
            Gymnastics is a sport that is not just for a year, but for your
            whole life. What do we mean by that? Gymnastics is known to not only
            improve physical aspects associated with sport, but also enhance
            many aspects used in everyday life. Benefits include flexibility,
            coordination, body awareness, physical strength, balance,
            self-motivation, discipline, cognitive learning, social skills and
            work ethic. Each program aims to give your child the most of the
            benefits associated with gymnastics, specific to that age and level.
          </p>
          <div>
            {/* <button className=" py-2 md:py-3 px-14 text-xl hover:bg-yellow-500 focus:border-yellow-400 bg-blue-800 text-white font-semibold">
              <Link href={"3"}>
                {" "}
                Click here to contact us to book your trial
              </Link>
            </button> */}
          </div>
        </section>
        <section className="grid lg:grid-cols-2 p-4 my-16 lg:gap-8">
          <div>
            <Image
              src={"/imgs/robertson-gym-selection-beginner.jpg"}
              width={700}
              height={200}
            />
          </div>
          <div>
            <Image
              src={"/imgs/robertson-gym-selection-advanced.jpg"}
              width={700}
              height={200}
            />
          </div>
        </section>

        <section className="lg:my-16 lg:py-20">
          <h3 className="text-4xl  font-montserrat my-16 text-center font-semibold">
            Beginner Gymnastics
          </h3>

          <section className="grid    lg:grid-cols-8 my-8 lg:gap-8">
            <div className="lg:col-span-2 font-open_sans">
              {BeginnerClass.map((cls) => (
                <div
                  onClick={() => setSelectedCls(cls.id)}
                  className="bg-white p-6 border-b-2 border-l-4 cursor-pointer hover:border-l-blue-500"
                >
                  <p className="text-xl font-thin   mb-2">{cls.title}</p>
                  <p className="text-gray-400">{cls.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-6 mt-4 lg:mt-0 flex">
              <div className="lg:px-8">
                <h4 className="font-semibold font-montserrat mb-8 text-2xl lg:text-3xl">
                  {BeginnerClass.filter((c) => c.id === selectedCls)[0].title}
                </h4>
                <div className="lg:text-xl font-open_sans grid grid-cols-8 items-center justify-center justify-items-center   lg:leading-loose  text-gray-500">
                  <p className="col-span-6">
                    {" "}
                    {
                      BeginnerClass.filter((c) => c.id === selectedCls)[0]
                        .content
                    }
                  </p>
                  <div className="col-span-2 flex items-center">
                    <Image
                      src={
                        "/imgs/" +
                        BeginnerClass.filter((c) => c.id === selectedCls)[0]
                          .imgSrc
                      }
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="lg:col-span-2  flex items-center">
              <Image
                src={
                  "/imgs/" +
                  BeginnerClass.filter((c) => c.id === selectedCls)[0].imgSrc
                }
                width={250}
                height={250}
              />
            </div> */}
          </section>

          <div className="flex flex-col items-center justify-center">
            <div className="lg:mb-20">
              <Link href={"/how-to-start"}>
                <button className="p-3 px-6 font-raleway bg-blue-900 hover:bg-yellow-600 text-white font-medium">
                  FIND OUT HOW TO TRIAL
                </button>
              </Link>
            </div>

            <hr className="my-4 w-44  bg-gray-300 h-1" />
          </div>
        </section>

        <section>
          <h3 className="text-4xl  font-montserrat my-16 text-center font-semibold">
            Advanced Gymnastics
          </h3>

          <section className="grid    lg:grid-cols-8 my-8 lg:gap-8">
            <div className="lg:col-span-2 font-open_sans">
              {AdvancedClass.map((cls) => (
                <div
                  onClick={() => setSelectedCls(cls.id)}
                  className="bg-white p-6 border-b-2 border-l-4 cursor-pointer hover:border-l-blue-500"
                >
                  <p className="text-xl font-thin    mb-2">{cls.title}</p>
                  <p className="text-gray-400 font-open_sans">{cls.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-6 mt-4 lg:mt-0 flex">
              <div className="lg:px-8  font-open_sans">
                <h4 className="font-semibold  mb-8 text-2xl lg:text-3xl">
                  {AdvancedClass.filter((c) => c.id === selectedCls)[0].title}
                </h4>
                <div className="lg:text-xl grid grid-cols-8 items-center justify-center justify-items-center   lg:leading-loose  text-gray-500">
                  <p className="col-span-6  font-open_sans">
                    {" "}
                    {
                      AdvancedClass.filter((c) => c.id === selectedCls)[0]
                        .content
                    }
                  </p>
                  <div className="col-span-2 flex items-center">
                    <Image
                      src={
                        "/imgs/" +
                        AdvancedClass.filter((c) => c.id === selectedCls)[0]
                          .imgSrc
                      }
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="lg:col-span-2  flex items-center">
              <Image
                src={
                  "/imgs/" +
                  BeginnerClass.filter((c) => c.id === selectedCls)[0].imgSrc
                }
                width={250}
                height={250}
              />
            </div> */}
          </section>
          {/* <section className="grid grid-cols-8 my-8 gap-8">
            <div className="col-span-2">
              {AdvancedClass.map((cls) => (
                <div
                  onClick={() => setSelectedCls(cls.id)}
                  className="bg-white p-6 border-b-2 border-l-4 cursor-pointer hover:border-l-blue-500"
                >
                  <p className="text-xl font-thin mb-2">{cls.title}</p>
                  <p className="text-gray-400">{cls.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="col-span-4 flex">
              <div className="px-8">
                <h4 className="font-semibold mb-8 text-3xl">
                  {AdvancedClass.filter((c) => c.id === selectedCls)[0].title}
                </h4>
                <p className="text-xl leading-loose  text-gray-500">
                  {AdvancedClass.filter((c) => c.id === selectedCls)[0].content}
                </p>
              </div>
            </div>
            <div className="col-span-2  flex items-center">
              <Image
                src={
                  "/imgs/" +
                  AdvancedClass.filter((c) => c.id === selectedCls)[0].imgSrc
                }
                width={250}
                height={250}
              />
            </div>
          </section> */}
          <div className="flex flex-col items-center justify-center">
            <div className="lg:mb-20">
              <Link href={"/contact"}>
                <button className="p-3 font-raleway px-6 bg-blue-900 hover:bg-yellow-600 text-white font-medium">
                  Contact Us
                </button>
              </Link>
            </div>

            <hr className="my-4 w-44  bg-gray-300 h-1" />
          </div>
        </section>
      </div>
      <footer className="bg-footer py-12 md:py-2 md:pt-36 text-white">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8  px-8 lg:px-36">
          <div className="flex  font-open_sans flex-col gap-6">
            <p className="text-xl md:text-2xl font-montserrat md:font-semibold">
              CONTACT US
            </p>
            <p className="text-xl font-open_sans  md:font-semibold">
              ROBERTSON GYMNASTICS <br /> ACADEMY
            </p>
            <p className=" md:text-xl">
              <p className="md:my-2">0417 223 981 - 10:00am - 1:00pm</p>
              <p className="md:my-2">(07) 3348 8844 - 2:30pm to 5:00pm</p>
              <p className="my-2"> academy@robertsongymnastics.com.au</p>
              <p className=" md:my-2"> 33 Proprietary Street </p>Tingalpa, QLD,
              4173{" "}
            </p>
          </div>
        </div>

        <hr className="mt-32 font-thin text-gray-600" />
        <div className="px-28 py-4 md:my-8 flex items-center justify-center md:justify-start  ">
          <Image src={"/imgs/RG-academy-logo.png"} width={200} height={50} />
        </div>
      </footer>
    </>
  );
}
