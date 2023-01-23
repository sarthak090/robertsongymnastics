import Image from "next/image";
import Link from "next/link";

import Accordion from "../components/UI/accordion";

import React, { useState } from "react";
import AcademyHeader from "../components/Layout/Navigation/AcademyHeader";

import AccordionCard from "../components/UI/AccordianCard";
import Hero from "../components/UI/Hero";
import { NextSeo } from "next-seo";
import Form from "@/components/UI/Form";
import HeaderLogo from "@/components/UI/HeaderLogo";
import AcademyFooter from "@/components/Layout/Footer/AcademyFooter";
export default function ContactPage() {
  const shippingItems = [
    {
      title: "How do I do a trial class?		",
      content:
        " Please visit our <a href='http://academy.robertsongymnastics.com.au/howtostart/'> How To Start  </a> page for details on the trial process and all the trial class times.",
    },
    {
      title:
        "My child has previous gymnastics experience. Do I still come to a beginner class for a trial?	",
      content:
        "If your child has previous gymnastics experience, they may be able to skip past our beginner level classes. Please email us with details of your child’s age and previous experience and we will determine the most appropriate class for your child to trial.",
    },
    {
      title: "Do you operate on the same dates as state school terms?		",
      content:
        "We operate slightly different to the QLD State School calendar. Please visit our <a href='http://academy.robertsongymnastics.com.au/calendar/'>Calendar</a> page for all our term and public holiday closure dates",
    },
  ];
  return (
    <>
      <NextSeo title="Contact &#8211; Robertson Gymnastics Academy" />

      <section
        className={` md:hero-height  bg-cover bg-fixed  md:py-4 bg-right-top text-white  bg-rg-robertson-venue-header`}
      >
        <AcademyHeader />
        <Hero
          title={"Contact"}
          subtitle={"Get in touch with your questions about RGA"}
        />
      </section>
      <div className="bg-gray-100 px-2 md:px-32">
        <section className="  flex flex-col justify-center items-center   gap-4 py-24">
          <div className="flex items-center justify-center py-4">
            <HeaderLogo />
          </div>

          <h1 className="text-4xl text-gray-600 md:text-5xl text-center my-4 font-semibold font-montserrat">
            Get In Touch
          </h1>
          <p className="text-center my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 md:px-64 font-open_sans">
            Feel free to contact us - we would love to help you with your
            enquiries about Robertson Gymnastics Academy.
          </p>
          <p className="text-red-600  font-open_sans">
            We are currently closed for the holiday break - all classes and full
            admin will resume on Monday 16 January.
          </p>
        </section>
        <div className="text-2xl text-gray-500">
          <p className="my-4 text-3xl font-semibold font-open_sans text-black">
            FAQ
          </p>
          <Accordion items={shippingItems} translatorNS="en" />
        </div>
        <section className="grid md:grid-cols-2 gap-8 my-16 text-gray-600">
          <Form />
          <div className="flex font-open_sans text-xl flex-col gap-4 text-gray-500">
            <h3 className="  text-xl font-semibold font-raleway text-gray-900">
              TINGALPA
            </h3>
            <h5>Robertson Gymnastics Academy</h5>

            <div className="flex gap-2 text-sm lg:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-900 "
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              0417 223 981 - 10:00am - 1:00pm
            </div>

            <div className="flex gap-2 text-sm lg:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              (07) 3348 8844 - 2:30pm – 5:00pm
            </div>

            <div className="flex gap-2 text-sm lg:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  clipRule="evenodd"
                />
              </svg>
              academy@robertsongymnastics.com.au
            </div>
            <div className="flex gap-2 text-sm lg:text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              33 Proprietary Street, Tingalpa, QLD, 4173{" "}
            </div>
          </div>
        </section>

        <section className="lg:my-16 lg:py-16">
          <h4 className="text-3xl font-medium font-montserrat my-16">
            Our Locations
          </h4>
          <div className="flex flex-col items-center justify-center ">
            <Image src="/imgs/robertson-map.jpg" width={1400} height={700} />
          </div>
        </section>
      </div>

      <AcademyFooter />
    </>
  );
}
