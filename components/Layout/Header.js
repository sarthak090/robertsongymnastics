import {
  Open_Sans,
  Montserrat,
  Raleway,
  Source_Sans_Pro,
} from "@next/font/google";
const open_sans = Open_Sans({ subsets: ["latin"] });

export default function Header() {
  return (
    <div className="  bg-black py-7 flex flex-col items-center justify-center ">
      <img src="/imgs/logo.png" />
      <p
        className={`${open_sans.className}  text-2xl font-bold  text-center underline text-white`}
      >
        2021 QLD Club of the Year <br /> Home of two 2022 World Champion
        Gymnasts
      </p>
    </div>
  );
}
