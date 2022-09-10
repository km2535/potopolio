import React from "react";
import style from "./header.module.css";

const Header = (props) => (
  <div className={style.container}>
    <div className={style.header}>
      <span className={style.upper}>
        L&nbsp;<span className={style.deco}>ee</span>
      </span>
      <span className={style.upper + " " + style.k}>
        K<span>ang</span>
      </span>
      <span className={style.upper + " " + style.m}>
        M<span>in</span>
      </span>
    </div>
  </div>
);

export default Header;
