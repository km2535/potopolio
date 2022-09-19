import React from "react";
import Alum from "../content/alum/alum";
import Introduce from "../content/introduce/introduce";

function Section({ gsap }) {
  return (
    <>
      <div id="fullpage">
        <div className="section fp-scrollable">
          <Introduce gsap={gsap} />
        </div>
        <div className="section alum">
          <Alum gsap={gsap} />
        </div>
      </div>
    </>
  );
}

export default Section;
