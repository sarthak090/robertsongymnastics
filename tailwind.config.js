const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["--font-open"],
        montserrat: ["var(--montserrat-font)"],
        raleway: ["var(--raleway-font)"],
        open_sans: ["var(--open_sans-font)"],
      },

      backgroundImage: {
        "rg-academy-bg": "url('/imgs/RG-academy-bg.jpg')",
        "rg-club-bg": "url('/imgs/RG-club-bg.jpg')",
        "rg-welcome-home": "url('/imgs/home-landing-welcome.jpg')",
        footer: "url('/imgs/footer.jpg')",
        "rg-getstarted": "url('/imgs/robertson-bg-getstarted.jpg')",
        "rg-rob-gym-blue5": "url('/imgs/bg-rob-gym-blue5.jpg')",
        "rg-slide-acro": "url('/imgs/slide-acro-robertson2.jpg')",
        "rg-bg-rob-gym-green.jpg": "url('/imgs/bg-rob-gym-green.jpg')",
        "rg-slide-robertson-compete-left2.jpg":
          "url('/imgs/slide-robertson-compete-left2.jpg')",
        "rg-howtostart-banner-robertson2":
          "url('/imgs/howtostart-banner-robertson2.jpg')",
        "rg-robertson-classes-bg": "url('/imgs/robertson-classes-bg.jpg')",
        "rg-robertson-calendar-bg": "url('/imgs/robertson-calendar-bg.jpg')",
        "rg-robertson-venue-header": "url('/imgs/robertson-venue-header.jpg')",
        "rgc-slider-1": "url('/imgs/rgc-slider-1.jpg')",
        "rgc-slider-2": "url('/imgs/rgc-slider-2.jpg')",
        "rgc-slider-3": "url('/imgs/rgc-slider-3.jpg')",
        "rgc-slider-4": "url('/imgs/rgc-slider-4.jpg')",
      },
    },
  },
  plugins: [],
};
