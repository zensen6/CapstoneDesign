import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Modal from "components/Modal";
import styled from "styled-components";
import { CiMicrophoneOn } from "react-icons/ci";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { red } from "@mui/material/colors";
import { style } from "@mui/system";
// import Chatbot from "react-chatbot-kit";
// import config from "./chatbot/config";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";
const Styleddiv = styled.div`
  margin: 4rem;
`;
const Newimg = styled.img`
  width: 100px;
`;
const Textbox = styled.p`
  border-radius: 1rem;
  background-color: skyblue;
  margin: 0 auto 10px auto;
  width: 360px;
  padding: 10px;
`;
const Speechrecog = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <CiMicrophoneOn
        style={{ backgroundColor: red }}
        onClick={SpeechRecognition.startListening({
          continuous: true,
          language: "ko",
        })}
      ></CiMicrophoneOn>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
function Speechmodal() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <React.Fragment>
      {/* <button onClick={openModal}>모달팝업</button> */}
      <CiMicrophoneOn onClick={openModal}></CiMicrophoneOn>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="  당신의 이야기를 들려주세요"
      >
        <p>듣는 중....</p>
        <main alt="loading..." style={{ width: 100 }} />
      </Modal>
    </React.Fragment>
  );
}

// function Textareachange=(event)=>();

//////////////////////////메인 사이트 ////////////////////////////////
const Gettext = (props) => {
  const [listen, setListen] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div>
        <Textbox>
          Lorem Ipsum is simply dummsy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Textbox>
        <Textbox>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Textbox>
      </div>
      <form>
        <Styleddiv>
          <p>
            <textarea cols="48" rows="5" value="hihi">
              {transcript}
            </textarea>
          </p>
          <Newimg
            src={
              listen
                ? require("assets/images/onmic.png")
                : require("assets/images/blackmic.png")
            }
            alt=""
            onClick={() => {
              if (listen === false) {
                alert("speak now");
                SpeechRecognition.startListening({
                  continuous: true,
                  language: "ko",
                });
                setListen(true);
              }
              if (listen === true) {
                SpeechRecognition.stopListening();
                resetTranscript();
                setListen(false);
              }
            }}
          />
        </Styleddiv>
        <Styleddiv>
          <Link to="" style={{ textDecoration: "none" }}>
            <Button type="submit" color="primary" variant="contained">
              분석하기
            </Button>
          </Link>
        </Styleddiv>
      </form>
      {/* <Speechrecog />    */}
      <Footer />
    </div>
  );
};

export default Gettext;
