import React from "react";
import style from "./hire.module.css";
import { ScrollContainer } from "react-nice-scroll";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
function Hire(props) {
  const lastpage = useRef();

  window.addEventListener("wheel", (e) => {
    let num = 0;
    if (lastpage.current.getBoundingClientRect().y < 950 && e.deltaY > 50) {
      const intaval = setInterval(() => {
        num++;
        window.scrollBy(0, num);
        if (lastpage.current.getBoundingClientRect().y < 100 || e.deltaY < 50) {
          clearInterval(intaval);
        }
      }, 10);
    }
  });
  // 아래 부터 gsap 작성
  SwiperCore.use([Autoplay]);
  return (
    <ScrollContainer>
      <div className={style.container} ref={lastpage} id="lastpage">
        <div className={style.lastpage}>
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
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide1.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide2.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide3.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide4.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide5.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide6.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={style.slide} id={isActive ? "activeDiv" : ""}>
                    <img
                      className={style.img}
                      src="./images/slide7.svg"
                      id={isActive ? "active" : ""}
                      alt="slide"
                    ></img>
                  </div>
                )}
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default Hire;
