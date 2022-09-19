import "./App.css";
import Scroll from "./content/scroll/scroll";
import Header from "./header/header";
import { gsap } from "gsap";
import Section from "./sections/section";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Header />
      <Scroll />
      <Section gsap={gsap} />
    </>
  );
}

export default App;
