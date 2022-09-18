import "./App.css";
import Circle from "./content/circle/circle";
import Scroll from "./content/scroll/scroll";
import Header from "./header/header";
import { gsap } from "gsap";
import Section from "./sections/section";

function App() {
  return (
    <>
      <Header />
      <Scroll />
      <Section gsap={gsap} />
      <Circle gsap={gsap} />
    </>
  );
}

export default App;
