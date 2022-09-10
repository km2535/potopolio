import React, { useEffect, useRef } from "react";
import style from "./introduce.module.css";

function Introduce({ gsap }) {
  const titleRef = useRef();
  const subTitleRef = useRef();
  const subHead = useRef();
  useEffect(() => {
    gsap
      .timeline()
      .to(titleRef.current, { opacity: 1, x: 150, duration: 1 })
      .to(subTitleRef.current, { opacity: 1, x: 150, duration: 1 })
      .to(subHead.current, { opacity: 1, x: 150, duration: 1.5 });
  });
  return (
    <div className={style.content}>
      <div className={style.text}>
        <div className={style.head}>
          <div className={style.title} ref={titleRef}>
            다양한 프로젝트
          </div>
          <br></br>
          <div className={style.subTitle} ref={subTitleRef}>
            경험
          </div>
        </div>
        <div className={style.subHead} ref={subHead}>
          <span className={style.txt}>경력있는 신입을 원한다고요?</span>
          <br></br>
          <span className={style.subtxt}>그게 바로 접니다.</span>
        </div>
      </div>
      <div className={style.imgContent}>
        <img className={style.frame} src="images/frame.png" alt="img"></img>
        <img className={style.js} src="images/js.svg" alt="img"></img>
        <img className={style.node} src="images/node.svg" alt="img"></img>
        <img
          className={style.database}
          src="images/database.svg"
          alt="img"
        ></img>
        <img className={style.java} src="images/java.svg" alt="img"></img>
        <img className={style.react} src="images/react.svg" alt="img"></img>
        <img className={style.aws} src="images/aws.svg" alt="img"></img>
      </div>
    </div>
  );
}

export default Introduce;
