import React from "react";
import style from "./chat.module.css";

function Chat(props) {
  return (
    <div className={style.container} id="chatContainer">
      <div className={style.chatContent} id="chatImgContent">
        <img
          className={style.img}
          src="images/chat.svg"
          alt="chat"
          id="chatImg"
        />
      </div>
      <div className={style.chatTitle} id="chatTitle">
        <div className={style.chat1} id="chat1">
          웹 소켓을 통한 1:1 채팅 구현
        </div>
        <div className={style.chat2} id="chat2">
          채팅을 통해 자만남을 추구해보자
        </div>
      </div>
    </div>
  );
}

export default Chat;
