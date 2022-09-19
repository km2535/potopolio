import React from "react";
import style from "./chat.module.css";
import { gsap } from "gsap";
import { useEffect } from "react";
function Chat(props) {
  useEffect(() => {
    gsap.set("#chatImgContent", {
      x: 450,
    });
    gsap.set("#chat1", {
      opacity: 0,
      y: 350,
      x: 580,
    });
    gsap.set("#chat2", {
      opacity: 0,
      y: 400,
      x: 180,
    });
    gsap.to("#chat1", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#chatImgContent",
        toggleActions: "play pause play pause",
        start: "top 15%",
      },
    });
    gsap.to("#chat2", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#chatImgContent",
        toggleActions: "play pause play pause",
        start: "top 15%",
      },
    });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.chatContent} id="chatImgContent">
        <img
          className={style.img}
          src="images/chat.svg"
          alt="chat"
          id="chatImg"
        />
        <div className={style.chatTitle} id="chatTitle">
          <div className={style.chat1} id="chat1">
            웹 소켓을 통한 1:1 채팅 구현
          </div>
          <div className={style.chat2} id="chat2">
            채팅을 통해 자만남을 추구해보자
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
