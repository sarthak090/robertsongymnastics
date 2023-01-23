import Image from "next/image";
import React from "react";
import MainHero from "@/components/UI/MainHero";
import Form from "@/components/UI/Form";
import HeaderLogo from "@/components/UI/HeaderLogo";

export default function Center() {
  const hero = [
    {
      id: 0,
      mainTitle: "Begin Here",
      subTitle:
        "Your child's journey to a bright and healthy future can begin here. ",
      btn: "GET STARTED",
      bg: "bg-rgc-slider-1",
      href: "/how-to-start",
    },
    {
      id: 1,

      mainTitle: "Number One",
      subTitle:
        "Home of the number one Multisport Gymnastics Club in Australia. ",
      bg: "bg-rgc-slider-2",
      btn: "LEARN MORE",
      href: "/how-to-start",
    },
    {
      id: 2,

      mainTitle: "Whole of life",

      subTitle:
        "Gymnastics doesn't have to stop when you're young. See more about our programs. ",
      btn: "SEE OUR CLASSES",
      bg: "bg-rg-slide-acro",
      href: "/classes",
    },
    {
      id: 3,

      mainTitle: "Dance classes",

      subTitle:
        "Enquire here to receive more information about our dance programs. ",
      btn: "ENQUIRE NOW",
      bg: "bg-rgc-slider-4",
      href: "/how-to-start",
    },
  ];
  return (
    <>
      <MainHero isCenter={true} data={hero} />

      <div className="bg-gray-100 px-8 md:px-32">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo isCenter />
          </div>

          <h1 className="text-4xl text-gray-600 md:text-5xl text-center my-4 font-semibold font-montserrat">
            Welcome
          </h1>
          <p className="text-center my-4 text-xl   md:text-2xl text-gray-500 leading-12 md:px-64 font-open_sans">
            Welcome to Robertson Gymnastics Centre! We cater for athletes of all
            ages and athletic abilities, from true beginners to international
            level athletes. We aim to present quality programs which enable
            individuals to progress at their own rate and achieve their maximum
            potential.
          </p>
        </section>
      </div>
      <section className="grid bg-center bg-cover gap-8 py-36 text-white bg-rg-getstarted md:grid-cols-2">
        <div className=""></div>
        <div className="flex flex-col gap-4 md:gap-10 py-4 px-16 md:px-10 ">
          <h4 className="text-3xl font-semibolds font-montserrat">
            How To Get Started
          </h4>
          <div className="w-16 h-1 bg-white"></div>
          <p className="md:text-xl  md:pr-32 leading-relaxed font-open_sans">
            At Robertson Gymnastics Centre, we provide a wide range of classes
            to suit all skill levels. If you wish for your child to start their
            journey in gymnastics with us, simply come in for a trial lesson.
            For more information, click the link below.
          </p>
          <button className="font-raleway  max-w-fit p-3 px-8 bg-green-900 font-semibold hover:bg-orange-700 text-white ">
            MORE INFORMATION
          </button>
        </div>
      </section>
      <div className="bg-gray-100 px-2 md:px-24">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo isCenter />
          </div>

          <h1 className="text-4xl  font-montserrat text-gray-600 md:text-5xl text-center  font-semibold ">
            Our Programs
          </h1>
          <p className="text-center my-16 font-open_sans text-xl  md:text-2xl text-gray-500 leading-12 md:px-64 font-thin">
            Welcome to our new facility! This latest venue continues to enable
            Robertson Gymnastics to bring the joy of participation in gymnastics
            to new generations of participants. To date, over tens of thousands
            of children have experienced gymnastics the Robertson way through a
            program of holistic development.
          </p>
          <section className="grid gap-2 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <Image src="/imgs/kids-gym2.jpg" width={420} height={400} />
              </div>
              <h3 className="text-gray-900 font-raleway text-xl">
                BEGINNER CLASSES
              </h3>
              <p className="text-gray-400 font-open_sans lg:text-xl">
                From Kindergym to General Gymnastics, our beginner level classes
                ready children for more challenging style classes by teaching
                them valuable gymnastics basics.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <Image
                  src="/imgs/robertson-gym-advanced.jpg"
                  width={420}
                  height={400}
                />
              </div>
              <h3 className="text-gray-900 font-raleway text-xl">
                ADVANCED CLASSES
              </h3>
              <p className="text-gray-400 font-open_sans text-xl">
                Our advanced classes cater to children who are ready to learn
                National and International level skills in Acrobatic Gymnastics,
                Tumbling and Artistic Gymnastics.
              </p>
            </div>
            <div className="flex font-open_sans flex-col text-white text-xl justify-center bg-green-900 px-12 py-8 gap-4">
              <h3 className="font-semibold font-montserrat text-3xl">
                Our Hours
              </h3>
              <p>We are open the following hours:</p>
              <p className="mt-8 py-2 flex justify-between border-b-2">
                Monday - Friday: <p> 9-11am, 3-8pm</p>
              </p>
              <p className="flex py-2 justify-between border-b-2">
                Saturday:<p>8am-12pm</p>
              </p>
              <p className="flex py-2 justify-between border-b-2">
                Sunday:<p>Closed</p>
              </p>
            </div>
          </section>
          <button className="font-raleway bg-green-900 px-6 my-8 py-3 text-white font-semibold hover:bg-orange-400">
            FIND OUT MORE ABOUT OUR CLASSES
          </button>
        </section>
      </div>
      <section className="grid md:grid-cols-2 gap-8 py-40 bg-rg-rob-gym-blue5 bg-fixed px-10  ">
        <div className="text-white text-xl flex flex-col gap-6">
          <h4 className="text-3xl  font-montserrat font-semibold leading-loose ">
            World Class Facilities
          </h4>
          <div className="w-12 h-1 bg-white"></div>
          <p className="leading-relaxed font-thin font-open_sans mt-8">
            Robertson Gymnastics Academy is one of the largest gymnastics venues
            in Australia, situated in 1600 square metres of designated
            gymnastics area. The Academy is fully equipped for a large variety
            of gymnastics disciplines and has air-conditioning facilities.
            Together, our combined venues make Robertson Gymnastics one of the
            largest and most comprehensive providers of Gymnastics Sports in
            Australia.
          </p>
          <button className="max-w-fit font-raleway bg-green-900 px-6 my-8 py-3 text-white font-semibold hover:bg-orange-400">
            MORE INFORMATION
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <Image
              src={"/imgs/robertson-gym-venue-home.jpg"}
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <div className="bg-gray-200 px-2 md:px-32">
        <section className="grid md:grid-cols-2 gap-8  py-8 text-gray-600">
          <Form />
          <div className="flex lg:text-xl flex-col gap-4 text-gray-500">
            <div className="my-8">
              <h3 className="font-raleway  text-xl font-semibold text-gray-900">
                LET’S CONNECT!
              </h3>
              <h5>
                Contact either of our locations to gain more information about
                your gymnastics journey.
              </h5>
            </div>

            <h3 className="  text-xl font-semibold font-raleway text-gray-900">
              TINGALPA
            </h3>
            <h5>Robertson Gymnastics Academy</h5>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900 "
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              0417 223 981 - 10:00am - 1:00pm
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              (07) 3348 8844 - 2:30pm – 5:00pm
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  clipRule="evenodd"
                />
              </svg>
              academy@robertsongymnastics.com.au
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              33 Proprietary Street, Tingalpa, QLD, 4173{" "}
            </div>

            <div className="my-8">
              <h3 className=" font-raleway text-xl font-semibold text-gray-900">
                SUNNYBANK HILLS
              </h3>
              <h5>Robertson Gymnastics Centre</h5>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              (07) 3345 4294
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  clipRule="evenodd"
                />
              </svg>
              centre@robertsongymnastics.com.au
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-900"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              200 Bradman Street, Sunnybank Hills, QLD, 4109
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-footer font-open_sans py-12 md:py-2 md:pt-36 text-white">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8  px-2 md:px-36">
          <div className="flex flex-col gap-6">
            <p className="text-xl md:text-2xl md:font-semibold font-montserrat">
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
    </>
  );
}
