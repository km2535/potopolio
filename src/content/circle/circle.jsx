import React, { useEffect, useState } from "react";
import style from "./circle.module.css";

function Circle({ gsap }) {
  const items = document.getElementsByClassName(style.item);
  const bg = document.getElementsByClassName(style.bg);
  const radius = 225;
  let [deg, setDeg] = useState(0);

  // props로 true를 전달받은 객체가 있으면 intaval를 실행한다.
  const onClickHandler = () => {
    intaval();
  };

  const intaval = () => {
    const iternal = setInterval(() => {
      setDeg((deg += 0.6));
      if (deg > 360 / items.length) {
        setDeg((deg = 0));
        clearInterval(iternal);
      }
    }, 0.5);
  };
  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      let degree =
        (360 / items.length) * i > 360
          ? 360 - (360 / items.length) * i
          : (360 / items.length) * i;
      let radian = (Math.PI / 180) * (degree + deg);
      circle(radian, radius, items[i]);
    }
    init(bg);
    function init(bg) {
      const x = window.innerWidth * 0.96;
      const y = window.innerHeight * 0.5;
      bg[0].style.transform = `translate3d(${x}px, ${-y}px, 0) translatex(-44%) translatey(56%)`;
    }

    function circle(radian, radius, item) {
      const x = Math.sin(radian) * radius + window.innerWidth * 0.96;
      const y = Math.cos(radian) * radius + window.innerHeight * 0.5;
      item.style.transform = `translate3d(${x}px, ${-y}px, 0)`;
    }
  }, [deg]);

  return (
    <>
      <div className={style.container}>
        <div className={style.bg} onClick={onClickHandler}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
        <div className={style.item}></div>
      </div>
    </>
  );
}

export default Circle;
