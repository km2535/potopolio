import React from "react";
import { useEffect } from "react";
import style from "./alum.module.css";
import { gsap } from "gsap";
import Chat from "./chat/chat";

function Alum() {
  useEffect(() => {
    gsap.set("#imgContent", {
      perspective: 500,
      force3D: true,
      transformStyle: "preserve-3d",
      zIndex: -1,
    });
    gsap.set("#model1", {
      y: 180,
      x: 320,
      z: 10,
      zIndex: 1,
    });
    gsap.set("#model2", {
      y: 200,
      x: 320,
      z: 30,
      zIndex: 1,
    });
    gsap.set("#txt1", {
      opacity: 0,
      y: 50,
      x: "500%",
    });
    gsap.set("#txt2", {
      opacity: 0,
      y: 50,
      x: "500%",
    });

    gsap
      .timeline()
      .to("#model1", {
        x: 650,
        y: 100,
        rotationX: 5,
        rotationY: 10,
        rotationZ: -10,
        scrollTrigger: {
          trigger: "#imgContent",
          toggleActions: "restart pause reverse pause",
          pin: true,
          scrub: true,
          start: "top 15%",
          end: "100% 15%",
        },
      })
      .to("#model2", {
        x: 800,
        z: 100,
        rotationX: 8,
        rotationY: 10,
        rotationZ: 10,
        scrollTrigger: {
          trigger: "#imgContent",
          toggleActions: "restart pause reverse pause",
          scrub: true,
          pin: true,
          start: "top 15%",
          end: "100% 15%",
        },
      })
      .to("#img", {
        x: 200,
        rotationX: 5,
        rotationY: 8,
        rotationZ: 0,
        scrollTrigger: {
          trigger: "#imgContent",
          toggleActions: "restart pause reverse pause",
          pin: true,
          scrub: true,
          start: "top 15%",
          end: "100% 15%",
        },
      });

    gsap.to("#txt1", {
      opacity: 1,
      x: "300%",
      scrollTrigger: {
        trigger: "#imgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });
    gsap.to("#txt2", {
      opacity: 1,
      x: "310%",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#imgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });
  }, []);
  return (
    <>
      <div className={style.container} id="container">
        <div className={style.imgContent} id="imgContent">
          <img
            src="images/alum.jpg"
            alt="alum"
            id="img"
            className={style.img}
          />
          <img
            src="images/model1.jpg"
            alt="alum"
            id="model1"
            className={style.model1}
          />
          <img
            src="images/model2.png"
            alt="alum"
            id="model2"
            className={style.model2}
          />
          <div className={style.title} id="title">
            <div className={style.txt1} id="txt1">
              인터렉브한
            </div>
            <br></br>
            <div className={style.txt2} id="txt2">
              효과 적용
            </div>
          </div>
        </div>
        <Chat />
      </div>
    </>
  );
}

export default Alum;
