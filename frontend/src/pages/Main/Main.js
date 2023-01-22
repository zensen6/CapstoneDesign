import "bootstrap/dist/css/bootstrap.min.css";

import Header from "components/Header";
import Footer from "components/Footer";
import Quote from "./Quote";
import ActionButtons from "./ActionButtons";
import Features from "./Features";
import Emotion from "./Emotion";
import Stress from "./Stress";
import ContactInfo from "./ContactInfo";
import SideButton from "./SideButton";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className="main-section dark-mode">
        <div className="margin-auto">
          <Quote />
          <ActionButtons />
          <Features />
        </div>
      </section>
      <Emotion />
      <Stress height="800" />
      <ContactInfo height="1300" />
      <SideButton height="200" />
      <Footer />
    </>
  );
};
export default Main;
