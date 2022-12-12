import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "pages/Main/Main.css";

const Inform = () => {
  return (
    <section className="inform-section">
      <h3 class="inform-title">확인 가능한 감정 60가지</h3>
      <p class="inform-text">
        입력받은 문장으로부터 60가지의 감정을 분석해드립니다.
        <br />
        <br />한 번 해보세요! 1분만에 감정을 분석해드립니다.
      </p>

      <p></p>

      <p className="margin-button" style={{ marginTop: "0px" }}>
        <Link to="./choose" style={{ textDecoration: "none" }}>
          <Button class="inform-button">분석하러 가기 ➔</Button>
        </Link>
      </p>
      <div class="inform-content">
        <img
          class="inform-content-image"
          alt="서강대학교 지도"
          src={require("assets/images/sogang2.png")}
          width="100%"
        />
      </div>
    </section>
  );
};
export default Inform;
