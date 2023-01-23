import Image from "next/image";
import React from "react";

export default function AcademyFooter() {
  return (
    <footer className="bg-footer font-open_sans py-12 md:py-2 md:pt-36 text-white">
      <div className="grid md:grid-cols-2 gap-16 md:gap-8  px-2 md:px-36">
        <div className="flex flex-col gap-6">
          <p className="text-xl font-raleway tracking-wider md:text-2xl md:font-semibold">
            CONTACT US
          </p>
          <p className="text-xl   md:font-semibold">
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
  );
}
