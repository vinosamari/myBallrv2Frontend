import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    // disable: window.innerWidth < 640,
    offset: 200,
    once: true
    // duration: 600,
    // easing: "ease-in-out-cubic"
  }); // or any other options you need
};
