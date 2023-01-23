import React from "react";

export default function Hero(props) {
  const { title, subtitle } = props;
  return (
    <div className="grid p-4 lg:p-16 md:p-8 md:my-16 grid-cols-1   ">
      <div className="flex py-8 flex-col items-center justify-center">
        <div className="flex my-4 items-center md:items-center  content-center flex-col gap-4  md:gap-16">
          <h1 className="font-montserrat font-semibold  text-center  text-3xl md:text-5xl   lg:text-8xl">
            {title}
          </h1>
          <p className="hidden font-open_sans lg:block md:text-3xl  text-center   ">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
