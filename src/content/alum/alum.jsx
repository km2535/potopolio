import React from "react";
import { useEffect } from "react";
import style from "./alum.module.css";
import { gsap } from "gsap";
import Chat from "./chat/chat";
import Goalum from "./goAlum/goalum";
import { Elastic } from "gsap/all";

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
      y: 180,
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
    gsap.set("#chat1", {
      x: "320%",
      y: -250,
      opacity: 0,
    });
    gsap.set("#chat2", {
      x: "200%",
      y: -200,
      opacity: 0,
    });
    gsap.set("#chatImg", {
      y: 100,
      x: "48%",
    });
    gsap.set("#goImgContent", {
      y: 500,
      x: "80%",
      perspective: 1000,
      force3D: true,
      transformStyle: "preserve-3d",
      zIndex: -1,
    });
    gsap.set("#goTxt1", {
      x: "-500%",
      y: 50,
    });
    gsap.set("#goTxt2", {
      x: "-500%",
      y: 100,
    });
    gsap.set("#goTxt3", {
      x: "-500%",
      y: 150,
    });
    gsap.set(".Typewriter", {
      x: "40%",
      y: 335,
      z: 100,
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
          scrub: true,
          start: "top 15%",
          end: "bottom 15%",
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
          start: "top 15%",
          end: "bottom 15%",
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
          end: "bottom 15%",
        },
      });

    gsap.to("#txt1", {
      opacity: 1,
      x: "300%",
      scrollTrigger: {
        trigger: "#imgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
        end: "+=" + window.innerHeight * 1.5,
      },
    });
    gsap.to("#txt2", {
      opacity: 1,
      x: "310%",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#imgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
        end: "+=" + window.innerHeight * 1.5,
      },
    });
    gsap.to("#chatImg", {
      scrollTrigger: {
        trigger: "#chatContainer",
        toggleActions: "play pause play pause",
        pin: true,
      },
    });
    gsap
      .timeline()
      .to("#chat1", {
        y: -300,
        opacity: 1,
        scrollTrigger: {
          trigger: "#chatContainer",
          toggleActions: "play pause play pause",
          pin: true,
          scrub: true,
        },
      })
      .to("#chat2", {
        y: -250,
        opacity: 1,
        scrollTrigger: {
          trigger: "#chatContainer",
          toggleActions: "play pause play pause",
          pin: true,
          scrub: true,
        },
      });
    gsap.to("#goImg", {
      x: -100,
      rotationX: 10,
      rotationY: -30,
      rotationZ: 0,
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play pause play pause",
        pin: true,
        scrub: true,
        start: "top 15%",
        end: "bottom 15%",
      },
    });
    gsap.to("#goTxt1", {
      x: -300,
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });
    gsap.to("#goTxt2", {
      x: -389,
      delay: 0.3,
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });

    gsap.to("#goTxt3", {
      x: -350,
      delay: 0.5,
      ease: Elastic.easeOut.config(0.5, 0.4, 0.2),
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });
    gsap.to("#goTxt3", {
      delay: 1.0,
      scale: 1.5,
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play reverse play reverse",
        start: "top 15%",
      },
    });
    gsap.to(".Typewriter", {
      x: "20%",
      y: 355,
      z: 400,
      rotationX: 10,
      rotationY: -42,
      rotationZ: 2,
      scrollTrigger: {
        trigger: "#goImgContent",
        toggleActions: "play pause play pause",
        pin: true,
        scrub: true,
        start: "top 15%",
        end: "bottom 15%",
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
        <Goalum />
      </div>
    </>
  );
}

export default Alum;
