import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/router";

export default function CenterHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { href: "how-to-start", name: "How To Start" },
    { href: "classes", name: "Classes" },
    { href: "venue", name: "Venue" },
    { href: "calendar", name: "Calendar" },
    { href: "contact", name: "Contact" },
  ];
  return (
    <>
      <nav className="flex py-2 font-montserrat bg-white gap-2  px-2  md:flex-row  justify-between   items-center lg:px-16 md:bg-transparent">
        <div className="hidden md:block">
          <Image
            src={"/imgs/RGC-logo-WhiteText-sml-transparent.png"}
            width={240}
            height={80}
          />
        </div>
        <div className="md:hidden">
          <Image
            src={"/imgs/RGC-logo-GreenText-sml-transparent.png"}
            width={240}
            height={80}
          />
        </div>

        <div
          className="md:hidden "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
          className={`my-2 ${
            isOpen ? "block" : "hidden"
          }  md:top-0 justify-end px-8 py-4 lg:font-semibold text-gray-200   lg:px-12 gap-2 absolute md:relative md:flex  flex-col left-0 bg-white md:bg-transparent w-full text-sm   top-24 md:flex-row md:text-xl md:gap-8`}
        >
          {navigation.map((nav) => (
            <>
              <div
                className={` ${
                  router.asPath === "/" + nav.href
                    ? "   md:border-b-4 md:border-blue-600 "
                    : "md:border-0"
                }  border   border-t-0 border-r-0 border-l-0 border-gray-200 md:text-gray-400 md:text-white   pb-1`}
              >
                <Link href={nav.href}>{nav.name}</Link>
              </div>
            </>
          ))}
        </div>
      </nav>
    </>
  );
}
