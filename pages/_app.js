import "@/styles/globals.css";
import "@/styles/main.css";
import { NextSeo } from "next-seo";
import DefaultSeo from "next-seo.config";
import {
  Open_Sans,
  Montserrat,
  Raleway,
  Source_Sans_Pro,
} from "@next/font/google";
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-open-montserrat",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-open-raleway",
});
// const source_sans_pro = Source_Sans_Pro({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "700", "900"],
//   variable: "--font-open-source-sans-pro",
// });
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --montserrat-font: ${montserrat.style.fontFamily};
          --open_sans-font: ${open_sans.style.fontFamily};
        }
      `}</style>
      <NextSeo
        title="Robertson Gymnastics &#8211; Brisbane&#039;s Premier Gymnastics Venues"
        {...DefaultSeo}
      />
      <main className={`${open_sans.className}  font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
