import React from "react";
import style from "./goalum.module.css";
import Typewriter from "typewriter-effect";

function Goalum(props) {
  return (
    <>
      <div className={style.container} id="goContainer">
        <div className={style.imgContent} id="goImgContent">
          <img
            src="images/goAlum.svg"
            alt="goAlum"
            className={style.img}
            id="goImg"
          />
          <Typewriter
            options={{
              strings: ["Welcome", "Always Love yoUr Meeting"],
              autoStart: true,
              loop: true,
            }}
            id="typer"
          />

          <div className={style.title} id="goTitle">
            <div className={style.txt1} id="goTxt1">
              사이트
            </div>
            <div className={style.txt2} id="goTxt2">
              보러가기
            </div>
            <div className={style.txt3} id="goTxt3">
              <button
                id="goBtn"
                className={style.btn}
                onClick={() =>
                  window.open("https://jaimemin.tistory.com/1449", "_blank")
                }
              >
                click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goalum;