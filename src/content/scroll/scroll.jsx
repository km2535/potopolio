/* eslint-disable no-useless-concat */
import React from "react";
import style from "./scroll.module.css";

const Scroll = ({ scrollInfo, setScrollInfo }) => (
  <>
    <div className={scrollInfo ? style.scrollContent : style.scrollHidden}>
      <span className={style.txt}>scroll down </span>
      <i className={"fa-solid fa-computer-mouse" + " " + style.icon}></i>
    </div>
  </>
);

export default Scroll;
