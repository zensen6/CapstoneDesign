import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import "pages/Main/Main.css";
const NotFound = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div>
        <h1 className="quote">
          <br />
          <br />
          <br />
          현재 페이지는 존재하지 않습니다.
          <br />
          <br />
          404 Not Found
        </h1>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
