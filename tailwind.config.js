module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myMainBlue: "#3163A2",
        myBlueDark: "#0A428F",
        myBlueLight: "#446DA8",
        myBlueLighter: "#7D97C1",
        myGrey: "#3F4C61",
        myBlack: "#000000",
        myPurPink: "#7B4E83",
        myPink: "#EB5A77",
        myRed: "#E32D4A",
        myLightPink: "#F5ADBB",
        myDullWhite: "#E8E8E8"
      },
      fontFamily: {
        poppins: "Poppins",
        openSans: "Open Sans"
      },
      boxShadow: {
        customOne: " 10px 10px 54px 0px rgba(0,0,0,0.83)",
        customTwo: " 25px 49px 90px -14px rgba(0,0,0,0.76)"
      },
      animation: {
        // none: "none",
        spin2: "spin 1s linear infinite"
        // ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        // pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // bounce: "bounce 1s infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
