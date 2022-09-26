import "./App.css";
import Scroll from "./content/scroll/scroll";
import Header from "./header/header";
import { gsap } from "gsap";
import Section from "./sections/section";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

function App() {
  const [scrollInfo, setScrollInfo] = useState(true);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Header />
      <Scroll scrollInfo={scrollInfo} setScrollInfo={setScrollInfo} />
      <Section
        gsap={gsap}
        scrollInfo={scrollInfo}
        setScrollInfo={setScrollInfo}
      />
    </>
  );
}

export default App;
