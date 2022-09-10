import "./App.css";
import Circle from "./content/circle/circle";
import Introduce from "./content/introduce/introduce";
import Scroll from "./content/scroll/scroll";
import Header from "./header/header";
import { gsap } from "gsap";

function App() {
  return (
    <>
      <Header />
      <Introduce gsap={gsap} />
      <Scroll />
      <Circle gsap={gsap} />
    </>
  );
}

export default App;
