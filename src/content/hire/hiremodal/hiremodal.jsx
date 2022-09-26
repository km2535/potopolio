import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./hiremodal.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Hiremodal({ myinfo, setInfo }) {
  const email = useRef();
  const emailContainer = useRef();
  function copyEmail() {
    navigator.clipboard.writeText(email.current.innerHTML);
    const div = document.createElement("div");
    if (emailContainer.current.children.length === 1) {
      div.innerHTML = "이메일을 클립보드에 복사하였습니다.";
      emailContainer.current.appendChild(div);
    }
  }
  function closeModal() {
    setInfo(!myinfo);
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.btnDiv}>
            <button className={style.btn} onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className={style.sns}>
            <div
              className={style.github}
              onClick={() => window.open("https://github.com/km2535", "_blank")}
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div
              className={style.blog}
              onClick={() => window.open("https://velog.io/@km2535", "_blank")}
            >
              <FontAwesomeIcon icon={faBlog} />
            </div>
          </div>
          <div className={style.email} ref={emailContainer} onClick={copyEmail}>
            <div ref={email}>km2535@naver.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiremodal;
