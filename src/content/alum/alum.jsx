import React from "react";
import { useRef } from "react";
import style from "./alum.module.css";

function Alum({ gsap }) {
  const imgRef = useRef();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: imgRef.current,
      pin: true,
      start: "top top",
      end: "+=500",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 3 },
        delay: 0.2,
        ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
      },
    },
  });
  return (
    <>
      <div className={style.container}>
        <div className={style.img} ref={imgRef}>
          <img src="images/alum.jpg" alt="alum" />
        </div>
      </div>
    </>
  );
}

export default Alum;
