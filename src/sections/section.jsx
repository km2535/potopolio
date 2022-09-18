import React from "react";
import Alum from "../content/alum/alum";
import Introduce from "../content/introduce/introduce";
import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import { useState } from "react";

function Section({ gsap }) {
  $(() => {
    $("#fullpage").fullpage({
      scrollOverflow: true,
      afterLoad: function () {
        if (this[0].className.includes("alum")) {
        }
      },
    });
  });

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
