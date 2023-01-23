import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MainHero from "@/components/UI/MainHero";
import Form from "@/components/UI/Form";
import { motion } from "framer-motion";
import HeaderLogo from "@/components/UI/HeaderLogo";
import { Raleway, Open_Sans, Montserrat } from "@next/font/google";
import AcademyFooter from "@/components/Layout/Footer/AcademyFooter";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const open_sans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
export default function Academy({ posts }) {
  const hero = [
    {
      mainTitle: "A sport for life",
      subTitle: "Gymnastics has lifelong benefits,no matter when you start!",
      btn: "CONTACT US",
      href: "/contact",
      bg: "bg-rg-slide-robertson-compete-left2.jpg",
    },
    {
      mainTitle: "From ages two & up",
      subTitle:
        "We offer recreational and competitive programs for all levels ",
      bg: "bg-rg-bg-rob-gym-green.jpg",
      btn: "LEARN MORE",
      href: "/how-to-start",
    },
    {
      mainTitle: "Number <br/> One",

      subTitle:
        "We are one of the top Acrobatic Gymnastics clubs in Australia and top in QLD ",
      btn: "CONTACT US",
      bg: "bg-rg-slide-acro",
      href: "/contact",
    },
  ];

  return (
    <>
      <MainHero data={hero} isCenter={false} />
      <div className="bg-gray-100 px-8 md:px-32">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo />
          </div>

          <h1
            className={`${montserrat.className} text-4xl text-gray-600 md:text-5xl text-center my-4 font-semibold font-mono`}
          >
            Welcome
          </h1>
          <p
            className={`text-center ${open_sans.className} leading-8 my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12  lg:px-64  `}
          >
            Welcome to Robertson Gymnastics Academy! We cater for athletes of
            all ages and athletic abilities, from true beginners to
            international level athletes. We aim to present quality programs
            which enable individuals to progress at their own rate and achieve
            their maximum potential.
          </p>
        </section>
      </div>
      <section className="grid bg-center bg-cover gap-8 py-24 lg:py-36 text-white bg-rg-getstarted md:grid-cols-2">
        <div className=""></div>
        <div className="flex flex-col gap-4 md:gap-10 py-4 px-16 md:px-10 ">
          <h4 className={`${montserrat.className} text-3xl font-semibolds `}>
            How To Get Started
          </h4>
          <div className="w-16 h-1 bg-white"></div>
          <p className="md:text-xl leading-8  lg:pr-32  ">
            At Robertson Gymnastics Academy, we provide a wide range of classes
            to suit all skill levels. If you wish for your child to start their
            journey in gymnastics with us, simply come in for a trial lesson.
            For more information, click the link below.
          </p>
          <button
            className={` ${raleway.className} tracking-widest  max-w-fit p-3 px-8 bg-blue-900 font-semibold hover:bg-orange-700 text-white `}
          >
            MORE INFORMATION
          </button>
        </div>
      </section>
      <div className="bg-gray-100 px-8 md:px-24">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo />
          </div>

          <h1
            className={`${montserrat.className} text-4xl text-gray-600 md:text-5xl text-center  font-semibold font-mono`}

            // className="text-4xl text-gray-600 md:text-5xl text-center  font-semibold font-mono"
          >
            Our Programs
          </h1>
          <p className="text-center leading-10 my-8 text-xl px-6 md:text-2xl text-gray-400  md:px-56 ">
            Our programs cater to children from entry level through to our
            competitive teams in a range of gymnastics disciplines. Coached by
            decorated instructors, Robertson Gymnastics Academy is the perfect
            place for your child to grow in this life long sport.
          </p>
          <section className="grid  gap-2 md:grid-cols-3">
            <div className="flex flex-col gap-6">
              <div className="hidden md:flex items-center ">
                <Image src="/imgs/kids-gym2.jpg" width={420} height={400} />
              </div>
              <div className="flex md:hidden justify-center items-center ">
                <Image src="/imgs/kids-gym2.jpg" width={600} height={400} />
              </div>
              <h3
                className={` ${raleway.className} font-semibold tracking-widest text-gray-700 text-xl`}
              >
                BEGINNER CLASSES
              </h3>
              <p className="text-gray-400 text-xl leading-10">
                From Kindergym to General Gymnastics, our beginner level classes
                ready children for more challenging style classes by teaching
                them valuable gymnastics basics.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="hidden md:flex items-center ">
                <Image
                  src="/imgs/robertson-gym-advanced.jpg"
                  width={420}
                  height={400}
                />
              </div>
              <div className="flex md:hidden justify-center items-center ">
                <Image
                  src="/imgs/robertson-gym-advanced.jpg"
                  width={420}
                  height={400}
                />
              </div>
              <h3
                className={` ${raleway.className} font-semibold tracking-widest text-gray-700 text-xl`}
              >
                ADVANCED CLASSES
              </h3>
              <p className="text-gray-400 text-xl">
                Our advanced classes cater to children who are ready to learn
                National and International level skills in Acrobatic Gymnastics,
                Tumbling and Artistic Gymnastics.
              </p>
            </div>
            <div className="flex flex-col text-white text-xl justify-center bg-blue-900 px-12 py-8 gap-4">
              <h3 className={`font-semibold text-4xl ${montserrat.className} `}>
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
          <button
            className={`${raleway.className} bg-blue-900 px-16 my-8 text-xl py-4 tracking-wider text-white font-semibold hover:bg-orange-400`}
          >
            FIND OUT MORE ABOUT OUR CLASSES
          </button>
        </section>
        <section className="bg-white px-8 py-16 grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className={`  ${montserrat.className} text-3xl mb-4 `}>
              Top In Australia And QLD.
            </h3>
            <div className="w-12 h-1 bg-blue-900"></div>
            <p className="my-8 text-gray-500 leading-8   text-xl">
              We are currently one of the top Acrobatic Gymnastics clubs in
              Australia and the top in QLD. The Academy is also home to a World
              Silver Medal winning trio in Acrobatic Gymnastics – the highest
              ranking Australian placing at a world level in this discipline.
            </p>
            <p className="mt-8 text-gray-500  leading-8  text-xl">
              The Academy gives athletes the opportunity to develop to the
              maximum of their potential, including National representation for
              those with the talent and personal drive to achieve elite
              performance. Check out our Hall of Fame to see all our success
              stories!
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src={"/imgs/robertson-gymnastics-academy-compete-1.jpg"}
                width={850}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="grid md:grid-cols-2 gap-8 py-40 bg-rg-rob-gym-blue5 bg-fixed px-10  ">
        <div className="text-white text-xl flex flex-col gap-6">
          <h4
            className={`text-3xl font-semibold leading-loose ${montserrat.className}`}
          >
            World Class Facilities
          </h4>
          <div className="w-12 h-1 bg-white"></div>
          <p className="leading-relaxed   mt-8">
            Robertson Gymnastics Academy is one of the largest gymnastics venues
            in Australia, situated in 1600 square metres of designated
            gymnastics area. The Academy is fully equipped for a large variety
            of gymnastics disciplines and has air-conditioning facilities.
            Together, our combined venues make Robertson Gymnastics one of the
            largest and most comprehensive providers of Gymnastics Sports in
            Australia.
          </p>
          <button className="font-raleway tracking-widest font-semibold text-sm  max-w-fit bg-blue-900 px-8 my-8 py-4 text-white  hover:bg-orange-400">
            MORE INFORMATION
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <Image src={"/imgs/gym-image.jpg"} width={600} height={400} />
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="bg-gray-100">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo />
          </div>

          <h1 className="font-montserrat text-4xl text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            Latest RGA News
          </h1>
          <p className="text-center my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 md:px-64 font-thin">
            Keep up to date with all our club news. To see more, click news in
            the menu.
          </p>
        </section>
        <div className="px-12 md:px-28  py-16  ">
          <div className="hidden md:block">
            {" "}
            <Swiper spaceBetween={50} slidesPerView={3} navigation={true}>
              {posts.map((post) => (
                <>
                  <SwiperSlide>
                    <div className="bg-white">
                      <div>
                        <Image
                          src={post.x_featured_media_large}
                          style={{ maxHeight: "380px", objectFit: "cover" }}
                          height={380}
                          width={500}
                        />
                      </div>

                      <div className="p-12">
                        {" "}
                        <h4 className="font-raleway text-xl h-6 overflow-hidden font-medium my-4 uppercase">
                          {post.title.rendered}...
                        </h4>
                        <p className="text-gray-500   text-xl excerpt">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          ></div>
                        </p>
                        <hr className="mt-8 mb-2" />
                        <div className="flex justify-between">
                          <div>
                            {" "}
                            <div>{post.x_categories}</div>
                          </div>
                          <div>social</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
          <div className="md:hidden block">
            {" "}
            <Swiper spaceBetween={50} slidesPerView={1} navigation={true}>
              {posts.map((post) => (
                <SwiperSlide>
                  <div className="bg-white">
                    <div className="flex md:hidden ">
                      <Image
                        src={post.x_featured_media_large}
                        height={380}
                        width={680}
                      />
                    </div>
                    <div className="hidden md:flex justify-center">
                      <Image
                        src={post.x_featured_media_large}
                        height={380}
                        width={600}
                      />
                    </div>

                    <div className="p-12">
                      {" "}
                      <h4 className="text-xl font-raleway font-semibold my-4 uppercase">
                        {post.title.rendered}
                      </h4>
                      <p className="text-gray-500 text-xl excerpt">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></div>
                      </p>
                      <hr className="mt-8 mb-2" />
                      <div className="flex justify-between">
                        <div>{post.x_categories}</div>
                        <div>social</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 px-8 md:px-32">
        <section className="  flex flex-col justify-center items-center   gap-4 py-12">
          <div className="flex items-center justify-center ">
            <HeaderLogo />
          </div>

          <h1 className="font-montserrat text-4xl text-gray-600 md:text-5xl text-center my-4 font-semibold ">
            Contact Us
          </h1>
          <p className="text-center my-4 text-xl px-6 md:text-2xl text-gray-500 leading-12 md:px-64  ">
            Thinking about joining Robertson Gymnastics and have a specific
            question? Contact us using one of the methods below.
          </p>
        </section>
        <section className="grid md:grid-cols-2 gap-8 my-2 py-8 text-gray-600">
          <Form />
          <div className="flex text-xl flex-col gap-4 text-gray-500">
            <div className="my-8">
              <h3 className="font-raleway lg:mb-4  text-xl font-semibold text-gray-900">
                LET’S CONNECT!
              </h3>
              <h5>
                Contact either of our locations to gain more information about
                your gymnastics journey.
              </h5>
            </div>

            <h3 className=" font-raleway lg:mb-4 text-xl font-semibold text-gray-900">
              TINGALPA
            </h3>
            <h5>Robertson Gymnastics Academy</h5>

            <div className="flex gap-2 lg:text-xl text-sm">
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

            <div className="flex gap-2 lg:text-xl text-sm">
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

            <div className="flex gap-2 lg:text-xl text-sm">
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
            <div className="flex gap-2 lg:text-xl text-sm">
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

            <div className="my-8">
              <h3 className="font-raleway lg:mb-4  text-xl font-semibold text-gray-900">
                SUNNYBANK HILLS
              </h3>
              <h5>Robertson Gymnastics Centre</h5>
            </div>
            <div className="flex gap-2 lg:text-xl text-sm">
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
              (07) 3345 4294
            </div>

            <div className="flex gap-2 lg:text-xl text-sm">
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
              centre@robertsongymnastics.com.au
            </div>
            <div className="flex gap-2 lg:text-xl text-sm">
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
              200 Bradman Street, Sunnybank Hills, QLD, 4109
            </div>
          </div>
        </section>
      </div>

      <AcademyFooter />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://academy.robertsongymnastics.com.au/wp-json/wp/v2/posts"
  ).then((r) => r.json());

  return {
    props: {
      posts: data,
    },
  };
};
