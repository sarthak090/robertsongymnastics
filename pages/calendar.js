import Image from "next/image";

import React, { useState } from "react";
import AcademyHeader from "../components/Layout/Navigation/AcademyHeader";

import AccordionCard from "../components/UI/AccordianCard";
import Hero from "../components/UI/Hero";
import { NextSeo } from "next-seo";
import HeaderLogo from "@/components/UI/HeaderLogo";
import AcademyFooter from "@/components/Layout/Footer/AcademyFooter";

export default function Calendar() {
  const accordianCards = [
    {
      title: "ACRO COMPETITIONS",
      cards: [
        {
          title: "Acro SEQ Challenge 2 2022                ",
          date: "Sunday 29 May",
          location: "Location: Robertson Gymnastics Academy                ",
          msg: "",
        },
        {
          title: "Acro QLD Cup 2022                ",
          date: "Saturday 18 – Sunday 19 June",
          location: "Location: Robertson Gymnastics Academy                ",
          msg: "",
        },
        {
          title: "Acro SEQ Challenge 3 2022                ",
          date: "Sunday 17 July",
          location: "Location: Amain Gymnastics – Brendale                ",
          msg: "",
        },
        {
          title: "Acro State Championships 2022                ",
          date: "Friday 19 – Sunday 21 August",
          location:
            "Location: Logan Metro Sports and Events Centre               ",
          msg: "",
        },
        {
          title: "Acro National Club Carnival 2022               ",
          date: "Sunday 25 – Wednesday 28 September*",
          location:
            "Location: Gold Coast Sports and Leisure Centre               ",
          msg: "*Draft dates only. Dates subject to change",
        },
      ],
    },
    {
      title: "TUMBLING COMPETITIONS",
      cards: [
        {
          title: "Tumbling SEQ 2 2022               ",
          date: "Sunday 6 March",
          location: "Location: Robertson Gymnastics Centre              ",
          msg: "",
        },
        {
          title: "Tumbling SQIC 1 2022               ",
          date: "Sunday 20 March",
          location: "Location: Redcliffe PCYC              ",
          msg: "",
        },
        {
          title: "Tumbling State Championships 2022           ",
          date: "Saturday 26 – Sunday 27 March",
          location:
            "Location: Logan Metro Sports and Events Centre             ",
          msg: "",
        },
        {
          title: "Tumbling SQIC 2 2022           ",
          date: "Sunday 19 June",
          location: "Location: Redcliffe PCYC             ",
          msg: "",
        },
        {
          title: "Tumbling QLD Levels 2022           ",
          date: "Friday 19 – Sunday 21 August",
          location:
            "Location: Logan Metro Sports and Events Centre            ",
          msg: "",
        },
        {
          title: "Tumbling National Clubs Carnival 2022           ",
          date: "Thursday 15 – Sunday 18 September*",
          location: "Location: Gold Coast Sports and Leisure Centre           ",
          msg: "*Draft dates only. Dates subject to change",
        },
        {
          title: "Tumbling SQIC 3 2022         ",
          date: "Sunday 6 Nov",
          location: "Location: Carindale PCYC            ",
          msg: "",
        },
      ],
    },
    {
      title: "WOMEN'S ARTISTIC COMPETITIONS",
      cards: [
        {
          title: "WAG Robertson Club Championships 2022               ",
          date: "Saturday 14 – Sunday 15 May",
          location: "Location: Robertson Gymnastics Academy             ",
          msg: "",
        },
        {
          title: "WAG 360 Invitational 2022               ",
          date: "Saturday 28 – Sunday 29 May",
          location: "Location: 360 Gymnastics             ",
          msg: "",
        },
        {
          title: "WAG QLD Club Championships 2022               ",
          date: "Saturday 25 – Thursday 30 June",
          location: "Location: Caloundra Indoor Stadium            ",
          msg: "",
        },
        {
          title: "WAG Splitz Invitational 2022              ",
          date: "Saturday 23 – Sunday 24 July (Level 5-7) ",
          date2: "Saturday 30 – Sunday 31 July (Level 1-4) ",

          location: "Location: Splitz Gymnastics, Sumner           ",
          msg: "",
        },
        {
          title: "WAG BS Junior Regionals 2022               ",
          date: "Saturday 13 – Sunday 14 August",
          location: "Location: Premier Gymnastics, Somerville House          ",
          msg: "",
        },
        {
          title: "WAG Junior State Championships 2022               ",
          date: "Saturday 17 – Wednesday 21 September",
          location: "Location: TBA          ",
          msg: "",
        },
        {
          title: "WAG Toy Cup 2022          ",
          date: "TBA (Term 4)",
          location: "Location: Robertson Gymnastics Academy        ",
          msg: "",
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo title="Calendar &#8211; Robertson Gymnastics Academy" />
      <section
        className={` md:hero-height  bg-cover bg-fixed  md:py-4 bg-right-top text-white  bg-rg-robertson-calendar-bg`}
      >
        <AcademyHeader />
        <Hero
          title={"Calendar"}
          subtitle={" Important dates and events at RGA"}
        />
      </section>
      <div className="bg-gray-100 px-2 md:px-28">
        <section className="  flex flex-col justify-center items-center   gap-4 py-24">
          <div className="flex items-center justify-center py-4">
            <HeaderLogo />
          </div>

          <h1 className="text-4xl font-montserrat text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            Term & Event Dates
          </h1>
          <p className="text-center font-open_sans my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 md:px-64 ">
            Please take note of term commencement dates. Enrollment is
            automatically carried over from term-to-term and year-to-year unless
            we are informed otherwise. Terms are charged for in full. Make-up
            classes are expended once a member ceases regular, paid attendance.
            <p className="my-2">
              For further information around events, please reception or your
              coach.
            </p>
          </p>
        </section>
        <section className="grid md:grid-cols-2 p-4 my-16 gap-8 text-gray-500">
          <div>
            <h2 className="text-3xl text-center font-semibold font-montserrat ">
              Term Dates
            </h2>
            <p className="italic mt-4 text-xl text-center">
              (public holidays are not included on invoices)
            </p>
            <div className=" font-open_sans cards flex flex-col gap-16  py-16">
              <div className="card  text-white bg-blue-900 flex flex-col gap-4 items-center border py-8">
                <p className="text-3xl font-montserrat font-bold">
                  Term Four 2022
                </p>
                <p className="italic">(11 weeks)</p>
                <p className="font-semibold text-xl">
                  TERM 4 BEGIN – Tuesday 4 October
                </p>
                <p className="font-semibold text-xl">
                  TERM 4 FINISH – Saturday 17 December
                </p>
              </div>

              <div className="card text-white bg-blue-900 flex flex-col gap-4 items-center border py-8">
                <p className="text-3xl font-bold">Term One 2023</p>
                <p className="italic">(12 weeks)</p>
                <p className="font-semibold text-xl">
                  TERM 1 BEGIN – Monday 16 January
                </p>
                <p className="font-semibold text-xl">
                  TERM 1 FINISH – Thursday 6 April
                </p>
                <p className="italic">
                  (Closed on Australia Day – Thursday 26 January)
                </p>
              </div>

              <div className="card text-white bg-blue-600 flex flex-col gap-4 items-center border py-8">
                <p className="text-3xl font-bold">Term Two 2023</p>
                <p className="italic">(11 weeks)</p>
                <p className="font-semibold text-xl">
                  TERM 2 BEGIN – Monday 17 April
                </p>
                <p className="font-semibold text-xl">
                  TERM 2 FINISH – Saturday 1 July
                </p>
                <p className="italic">
                  (Closed on ANZAC Day – Tuesday 25 April)
                </p>

                <p className="italic">(Closed on Labour Day – Monday 1 May)</p>
              </div>

              <div className="card text-white bg-blue-500 flex flex-col gap-4 items-center border py-8">
                <p className="text-3xl font-bold">Term Three 2023</p>
                <p className="italic">(11 weeks)</p>
                <p className="font-semibold text-xl">
                  TERM 3 BEGIN – Monday 10 July
                </p>
                <p className="font-semibold text-xl">
                  TERM 3 FINISH – Saturday 23 September
                </p>
                <p className="italic">(Closed on EKKA – Wednesday 16 August)</p>
              </div>

              <div className="card text-white bg-blue-400 flex flex-col gap-4 items-center border py-8">
                <p className="text-3xl font-bold">Term Four 2023</p>
                <p className="italic">(11 weeks)</p>
                <p className="font-semibold text-xl">
                  TERM 4 BEGIN – Tuesday 3 October
                </p>
                <p className="font-semibold text-xl">
                  TERM 4 FINISH – Saturday 16 December
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-center font-semibold font-montserrat">
              Event Dates
            </h2>
            <p className="italic mt-4 font-open_sans text-xl text-center">
              (event dates and locations are subject to change)
            </p>
            <div className="accordian font-open_sans cards mt-8">
              <AccordionCard items={accordianCards} translatorNS="en" />
            </div>
          </div>
        </section>
      </div>
      <AcademyFooter />
    </>
  );
}
