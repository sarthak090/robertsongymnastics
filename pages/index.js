import Head from "next/head";
import Image from "next/image";
import { Raleway, Open_Sans, Montserrat } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Layout/Header";
import Grid from "@/components/Home/Grid";
import HeaderLogo from "@/components/UI/HeaderLogo";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const gridData = [
    {
      img: "/imgs/RG-academy-logo.png",
      mainText:
        "Robertson Gymnastics Academy runs programs from ages 2 and up,catering to beginners through to elite level gymnasts. We are also the Number 1 Acrobatic Gymnastic club in QLD.",
      subText: " (07) 3348 8844 | 33 PROPRIETARY ST TINGALPA",
      href: "/academy",
      bgImg: "bg-rg-academy-bg",
    },
    {
      img: "/imgs/RG-centre-logo.png",
      mainText:
        "Robertson Gymnastics Centre provides a holistic approach to gymnastics. Covering a wide range of skill-sets and classes, RGC has developed an approach that learning is for life.",

      subText: "(07) 3345 4294 | 200 BRADMAN ST SUNNYBANK HILLS",
      href: "/center",
      bgImg: "bg-rg-club-bg",
    },
  ];
  return (
    <>
      <Header />

      <div className={`grid md:grid-cols-2   mx-auto ${open_sans.className}`}>
        {gridData.map((data) => (
          <Grid {...data} />
        ))}
      </div>

      <section className="grid md:grid-cols-2   mx-auto">
        <div className="px-12 md:px-28 py-4 bg-white">
          <h1
            className={`${montserrat.className} font-medium   leading-9   my-6 text-5xl md:text-5xl text-gray-600`}
          >
            Welcome To Robertson Gymnastics
          </h1>
          <div className=" my-8 text-xl   flex flex-col gap-4 leading-8 text-gray-400   ">
            <p className=" ">
              To many people, gymnastics seems to be an impossible dream,
              something they could never do. However, gymnastics is a sport for
              everyone – toddlers, primary aged kids, teenagers, adults, and
              retirees.
            </p>
            <p>
              At Robertson Gymnastics, people of all ages, shapes, sizes and
              capabilities participate in and enjoy gymnastics. With two venues
              in Brisbane, Queensland, Robertson Gymnastics is the home of
              numerous National Team Members in Tumbling, Acrobatic Gymnastics
              and Trampoline Sports, supported by a number of international
              level coaches.
            </p>
            <p>
              We hope you will enjoy browsing our website through the Centre and
              Academy sections above. Please feel free to contact us for more
              information.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col  text-white py-60 gap-8 bg-rg-welcome-home bg-cover	 items-center justify-center`}
        ></div>
      </section>

      <section className="about-us px-3 text-xl font-thin text-center flex items-center justify-center flex-col bg-blue-900 text-white">
        <div className="flex items-center justify-center py-4">
          <HeaderLogo cn="bg-white" />
        </div>
        <h2 className="underline text-2xl font-bold">About Us</h2>
        <p className="my-2 leading-8">
          At Robertson Gymnastics, we believe that gymnastics is the complete
          sport - it offers many physical, emotional and intellectual
          opportunities that benefit every participant. It develops strength,
          agility, confidence and resilience, just to name a few! It also
          provides an excellent grounding for any other sporting pursuits, and
          the weight bearing activities involved in gymnastics have been shown
          to help prevent bone disease in later life. It is these principles
          that are at the core of our foundation. Robertson Gymnastics is one of
          the largest providers of gymnastics services in Australia and is
          usually the No.1 entity in the country as a multi‐discipline
          gymnastics club. Our programs cater from toddlers and beginners,
          through to elite athletes in Acrobatic Gymnastics, Tumbling,
          Trampoline, and Women's Artistic Gymnastics.
        </p>
      </section>

      <footer className="bg-footer py-24 md:py-36 text-white">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8  px-24 md:px-36">
          <div className="flex flex-col gap-10">
            <p
              className={` ${raleway.className} text-xl md:text-2xl md:font-semibold`}
            >
              ROBERTSON GYMNASTICS <br /> ACADEMY
            </p>
            <p className=" md:text-xl">
              <p className=" md:my-2"> (07) 3348 8844 </p>
              <p className=" md:my-2"> 0417 223 981</p>
              <p className="my-2"> academy@robertsongymnastics.com.au</p>
              <p className=" md:my-2"> 33 Proprietary Street </p>Tingalpa, QLD,
              4173{" "}
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p
              className={` ${raleway.className} text-xl md:text-2xl md:font-semibold`}
            >
              ROBERTSON GYMNASTICS <br /> CENTRE
            </p>
            <p className=" md:text-xl">
              <p className=" md:my-2"> (07) 3345 4294 </p>
              <p className=" md:my-2"> 0417 223 981</p>
              <p className=" md:my-2"> centre@robertsongymnastics.com.au</p>
              <p className=" md:my-2">200 Bradman </p>Sunnybank Hills, QLD, 4109
            </p>
          </div>
        </div>

        <hr className="mt-32 font-thin text-gray-600" />
      </footer>
    </>
  );
}
