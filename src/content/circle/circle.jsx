import React, { useEffect, useState } from "react";
import style from "./circle.module.css";

function Circle({ gsap }) {
  //console.log(gsap);
  const body = document.body;
  const items = document.getElementsByClassName(style.item);
  const bg = document.getElementsByClassName(style.bg);
  const radius = 170;
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
      //console.log(degree);
      let radian = (Math.PI / 180) * (degree + deg);
      circle(radian, radius, items[i]);
    }
    init(bg);

    function init(bg) {
      const x = 1800;
      const y = 300;
      bg[0].style.transform = `translate3d(${x}px, ${-y}px, 0) translatex(-42%) translatey(58%)`;
    }

    function circle(radian, radius, item) {
      const x = Math.sin(radian) * radius + 1800;
      const y = Math.cos(radian) * radius + 300;
      item.style.transform = `translate3d(${x}px, ${-y}px, 0)`;
    }
  }, [deg]);
  //console.log(body.clientWidth + radius);
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
