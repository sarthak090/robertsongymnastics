import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Raleway } from "@next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-open-raleway",
  weight: ["800"],
});
export default function Grid(props) {
  const { img, mainText, subText, href, bgImg } = props;
  return (
    <div
      className={`flex flex-col  px-16 md:px-0 text-white py-32 gap-8 ${bgImg} bg-cover	 items-center justify-center`}
    >
      <Image src={img} width="300" height={150} />
      <p className="text-center  text-gray-400 text-xl leading-8   md:px-36">
        {mainText}
      </p>
      <p className="text-xl text-center  md:text-left font-medium ">
        {subText}
      </p>

      <Link href={href}>
        {" "}
        <button
          className={`text-xl focus:outline-none hover:outline-none  py-5 px-16 font-semibold hover:bg-yellow-600 ${raleway.className} focus:border-yellow-400 bg-green-600 text-white tracking-widest	`}
        >
          Enter
        </button>
      </Link>
    </div>
  );
}
