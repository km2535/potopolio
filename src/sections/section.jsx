import React from "react";
import Alum from "../content/alum/alum";
import Introduce from "../content/introduce/introduce";
import style from "./section.module.css";

function Section({ gsap, scrollInfo, setScrollInfo }) {
  return (
    <>
      <div id="fullpage" className={style.fullpage}>
        <div className="section fp-scrollable">
          <Introduce gsap={gsap} />
        </div>
        <div className="section alum">
          <Alum scrollInfo={scrollInfo} setScrollInfo={setScrollInfo} />
        </div>
      </div>
    </>
  );
}

export default Section;
