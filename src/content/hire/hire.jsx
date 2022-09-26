import React from "react";
import style from "./hire.module.css";
import { ScrollContainer } from "react-nice-scroll";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { useEffect } from "react";
import { useState } from "react";
import Hiremodal from "./hiremodal/hiremodal";
function Hire({ gsap, scrollInfo, setScrollInfo }) {
  const lastpage = useRef();
  const lastpageDiv = useRef();
  const lastpageTxt = useRef();
  const [myinfo, setInfo] = useState(false);

  window.addEventListener("wheel", (e) => {
    let num = 0;
    if (lastpage.current.getBoundingClientRect().y < 950 && e.deltaY > 50) {
      const intaval = setInterval(() => {
        num++;
        window.scrollBy(0, num);
        setScrollInfo(false);
        if (lastpage.current.getBoundingClientRect().y < 100 || e.deltaY < 50) {
          clearInterval(intaval);
        }
      }, 10);
    }
    if (e.deltaY < 50) {
      setScrollInfo(true);
    }
  });
  // swiperCore 가져오기
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    if (myinfo) {
      lastpageDiv.current.style.filter = "blur(10px)";
      lastpageTxt.current.style.filter = "blur(10px)";
    } else {
      lastpageDiv.current.style.filter = "blur(0px)";
      lastpageTxt.current.style.filter = "blur(0px)";
    }
  });
  //gsap
  useEffect(() => {
    gsap.set("#hireTxt1", {
      y: 50,
      x: "500%",
    });
    gsap.set("#hireTxt2", {
      y: 80,
      x: "500%",
    });
    gsap.set("#hireTxt3", {
      y: -80,
      x: "-500%",
    });
    gsap.to("#hireTxt1", {
      x: "100%",
      scrollTrigger: {
        trigger: "#hireTitle",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to("#hireTxt2", {
      x: "140%",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#hireTitle",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to("#hireTxt3", {
      x: "25%",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#hireTitle",
        toggleActions: "play reverse play reverse",
      },
    });
  });
  return (
    <ScrollContainer>
      <div className={style.container} ref={lastpage} id="lastpage">
        {myinfo ? <Hiremodal myinfo={myinfo} setInfo={setInfo} /> : ""}
        <div className={style.lastpage} ref={lastpageDiv}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={50}
            scrollbar={{ draggable: true }}
            speed={1500}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            loopAdditionalSlides={1}
          >
            <div className={style.slides}>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide1.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide2.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide3.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide4.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide5.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide6.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.slide}>
                  <img
                    className={style.img}
                    src="./images/slide7.svg"
                    alt="slide"
                  ></img>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className={style.title} id="hireTitle" ref={lastpageTxt}>
          <div className={style.txt1} id="hireTxt1">
            독창적이고 다양한
          </div>
          <div className={style.txt2} id="hireTxt2">
            프로젝트 경험
          </div>
          <div className={style.txt3} id="hireTxt3">
            <button
              id="hireBtn"
              className={style.btn}
              onClick={() => {
                setInfo(!myinfo);
              }}
            >
              hire me
            </button>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default Hire;
