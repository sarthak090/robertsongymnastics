import AcademyFooter from "@/components/Layout/Footer/AcademyFooter";
import HeaderLogo from "@/components/UI/HeaderLogo";
import Hero from "@/components/UI/Hero";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AcademyHeader from "../components/Layout/Navigation/AcademyHeader";
import { motion } from "framer-motion";
import Process from "@/components/UI/Process";
export default function HowToStart() {
  const process = [
    {
      title: "CHOOSE TRIAL TIME",
      mainText:
        "Pick a class time from those listed below and contact us to book in.",
      imgSrc: "/imgs/woman-phone.jpg",
    },
    {
      title: "WHAT TO WEAR?",
      mainText:
        "Any activewear. A t-shirt and shorts are perfectly fine (no school uniforms). Leotards are also acceptable (no tutus).",
      imgSrc: "/imgs/girl-gym-new.jpg",
    },
    {
      title: "WHEN YOU ARRIVE      ",
      mainText:
        "Arrive 5-10 minutes before your chosen trial class and check in at the front desk.      ",
      imgSrc: "/imgs/gym-instructor.jpg",
    },
    {
      title: "TIME TO BEGIN!",
      mainText:
        "You will be advised to a program that best suits your child's level and age group.      ",
      imgSrc: "/imgs/gym-class.jpg",
    },
  ];
  return (
    <>
      <NextSeo
        // canonical={process.env.NEXT_PUBLIC_DOMAIN + "/how-to-start"}
        title="How to Start &#8211; Robertson Gymnastics Academy"
      />
      <section
        className={` md:hero-height  bg-cover bg-fixed  md:py-4 bg-right-top text-white  bg-rg-howtostart-banner-robertson2`}
      >
        <AcademyHeader />
        <Hero
          title={"   How To Start"}
          subtitle="  Your child's journey in gymnastics begins at RGA"
        />
      </section>
      <div className="bg-gray-100 px-2 lg:px-16 font-open_sans">
        <section className="  flex flex-col justify-center items-center   gap-4 py-24">
          <div className="flex items-center justify-center py-4">
            <HeaderLogo />
          </div>

          <h1 className="text-4xl font-montserrat text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            New To Robertson Gymnastics?
          </h1>
          <p className="text-center my-4 text-xl px-6 md:text-2xl text-gray-500 leading-10 md:px-32 lg:px-64  ">
            No matter if your child has had previous gymnastics experience or is
            a true beginner, they are welcome to come join Robertson Gymnastics
            Academy. To get started, simply contact us and let us know which
            class you would like to trial from those listed below. If your child
            has previous gymnastics experience, please advise us as they may be
            able to skip past our beginner level classes. If, after the trial,
            we feel your child excels past the skill-level of their particular
            trial class, we will offer other class options that will best suit
            them.
          </p>
          <div>
            <button className="font-raleway py-2 md:py-3 px-14 text-xl hover:bg-yellow-500 focus:border-yellow-400 bg-blue-800 text-white font-semibold">
              <Link href={"/contact"}>
                Click here to contact us to book your trial
              </Link>
            </button>
          </div>
        </section>
        <Process process={process} />

        <h4 className="text-center font-montserrat text-2xl md:text-3xl mt-20 mb-16 font-medium text-gray-600">
          Trial Class Times
        </h4>
        <section className="my-8 px-4 lg-px-0 trial-class grid md:grid-cols-5">
          <div className="px-4 font-semibold bg-red-600 text-xl text-center text-white py-16">
            <h6 className="my-3 font-raleway">KINDERGYM (AGES 2-5)</h6>
            <p className="italic my-3">(Boys, Girls)</p>
            <p className="my-3">
              Monday – Saturday: <p> 9:00am – 9:45am</p>
            </p>
            <p className="my-3">Monday – Saturday: 10:00am – 10:45am</p>
            <p className="my-3"> Saturday:8:15am – 9:00am</p>
          </div>

          <div className="px-4 font-semibold bg-blue-400 text-xl text-center text-white py-16">
            <h6 className="my-3 font-raleway">PRE-PREP (AGES 4-5)</h6>
            <p className="italic my-3">(Boys, Girls)</p>
            <p className="my-3">
              Monday – Friday: <p> 9:00am – 9:45am</p>
            </p>
            <p className="my-3">Monday – Friday: 10:00am – 10:45am</p>
          </div>

          <div className="px-4 font-semibold bg-orange-500 text-xl text-center text-white py-16">
            <h6 className="my-3 font-raleway">PREP GYM (AGES 5-6)</h6>
            <p className="italic my-3">(Boys, Girls)</p>
            <p className="my-3">
              Monday – Friday:<p> 3:30pm – 4:30pm</p>
            </p>
            <p className="my-3">
              Monday – Friday:<p> 4:30pm – 5:30pm</p>
            </p>
            <p className="my-3">
              Saturday: <p> 9:30am – 10:30am</p>
            </p>
            <p className="my-3">
              Saturday: <p>10:30am – 11:30am</p>
            </p>
          </div>

          <div className="px-4 font-semibold bg-red-900 text-xl text-center text-white py-16">
            <h6 className="my-3 font-raleway">AFTER PREP (AGES 6-7)</h6>
            <p className="italic my-3">(Boys, Girls)</p>
            <p className="my-3">
              Monday – Friday:<p> 3:30pm – 4:30pm</p>
            </p>
            <p className="my-3">
              Monday – Friday:<p> 4:30pm – 5:30pm</p>
            </p>
            <p className="my-3">
              Saturday: <p> 8:30am – 9:30am</p>
            </p>
            <p className="my-3">
              Saturday: <p>10:30am – 11:30am</p>
            </p>
          </div>

          <div className="px-4 font-semibold bg-purple-900 text-xl text-center text-white py-16">
            <h6 className="my-3">GENERAL GYM (AGES 7-13)</h6>
            <p className="italic my-3">(Boys, Girls)</p>
            <p className="my-3">
              Monday – Friday: <p>3:30pm – 4:30pm</p>
            </p>
            <p className="my-3">
              Saturday: <p> 8:30am – 9:30am</p>
            </p>
          </div>
        </section>
      </div>
      <AcademyFooter />
    </>
  );
}
