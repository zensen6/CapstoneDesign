import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "pages/Main/Main.css";
const Contributor = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div>
        <h1 className="quote">
          <br />
          <br />
          <br />
          Developed by 팀명이 없는 팀
          <br />
          <br />
        </h1>
        <h3>2022-2학기</h3>
        <h2>서강대학교 캡스톤디자인 1조</h2>
        <br />
        <h1>윤기웅 하건영 임보성 김준희</h1>
      </div>
      <Footer />
    </div>
  );
};
export default Contributor;
