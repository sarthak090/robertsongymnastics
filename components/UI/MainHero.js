import { useState } from "react";
import AcademyHeader from "../Layout/Navigation/AcademyHeader";
import CenterHeader from "../Layout/Navigation/CenterAcademy";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Raleway,
  Open_Sans,
  Montserrat,
  Source_Sans_Pro,
} from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

const source_Sans_Pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400"],
});
export default function MainHero(props) {
  const items = props.data;

  const [currentItemId, setCurrentId] = useState(0);

  return (
    <>
      <section
        className={`main-hero     md:hero-height  bg-cover  md:py-2 bg-right-top text-white ${items[currentItemId].bg} `}
      >
        {props.isCenter ? <CenterHeader /> : <AcademyHeader />}

        <div className="grid p-16 md:p-8 md:my-16 grid-cols-1   lg:grid-cols-2">
          <div className="flex  flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: "110px" }}
              animate={{ opacity: 1, x: "0px" }}
              className="flex my-4 items-center md:items-start  content-center flex-col gap-4  md:gap-16"
            >
              <h1
                className={`${montserrat.className} font-semibold md:pr-52   text-3xl md:text-6xl lg:text-8xl`}
              >
                <span
                  className="md:text-justify text-center"
                  dangerouslySetInnerHTML={{
                    __html: items[currentItemId].mainTitle,
                  }}
                ></span>
              </h1>
              <motion.div
                key={items}
                initial={{ opacity: 0, x: "110px" }}
                animate={{ opacity: 1, x: "0px" }}
                exit={{ opacity: 0 }}
              >
                <p
                  className={`${source_Sans_Pro.className} md:text-2xl mb-8 lg:text-3xl md:pr-16  text-center md:text-left `}
                >
                  {items[currentItemId].subTitle}
                </p>
                <Link href={items[currentItemId].href}>
                  <button
                    className={`${raleway.className} tracking-widest text-sm  max-w-fit px-4 py-2 md:py-6 md:px-20 md:text-xl bg-blue-900 font-semibold hover:bg-orange-700 text-white `}
                  >
                    {items[currentItemId].btn}
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div></div>
        </div>
        <div className="flex   items-center gap-3 justify-center">
          {[...Array(items.length).keys()].map((i) => (
            <>
              <div
                className={`flex items-center justify-center ${
                  i == currentItemId ? " border  p-2 rounded-full" : ""
                }`}
              >
                <div
                  onClick={() => {
                    setCurrentId(i);
                  }}
                  className={`${
                    i == currentItemId ? "w-2 h-2" : "w-3 h-3"
                  }  border  border-white  rounded-full cursor-pointer bg-gray-300`}
                ></div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
