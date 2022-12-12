import React from "react";
import { Link } from "react-router-dom";
import "pages/Main/Main.css";

const Header = () => {
  return (
    <header>
      <div className="header-div">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="header-logo"
            href="/"
            aria-label="Stress-Free Home Page"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
