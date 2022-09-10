/* eslint-disable no-useless-concat */
import React from "react";
import style from "./scroll.module.css";

const Scroll = (props) => (
  <>
    <div className={style.scrollContent}>
      <span className={style.txt}>scroll me</span>
      <i className={"fa-solid fa-computer-mouse" + " " + style.icon}></i>
    </div>
  </>
);

export default Scroll;
