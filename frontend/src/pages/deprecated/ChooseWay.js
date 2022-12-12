import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Kogpt from "./AIChat";
const Styleddiv = styled.div`
  margin: 4rem;
`;

const StyleBody = styled.div`
  color: #fff;
  background: #7f52ff
    radial-gradient(
      89.53% 145.96% at 0.34% 100.79%,
      #ef4857 0,
      #de4970 17.58%,
      #b44db0 50.31%,
      #7f52ff 97.03%
    );
  background-color: #7f52ff;
`;

const ChooseWay = () => {
  return (
    <StyleBody className="d-flex flex-column min-vh-100">
      <Header />
      <Styleddiv>
        <Link to="./getvoice" style={{ textDecoration: "none" }}>
          <Button>말로 하기</Button>
        </Link>
        <Link to="./gettext" style={{ textDecoration: "none" }}>
          <Button>글로 적기</Button>
        </Link>
      </Styleddiv>
      <Kogpt />
      <Footer />
    </StyleBody>
  );
};
export default ChooseWay;
