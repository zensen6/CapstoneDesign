import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechRec({ isListen, toggleListen, handleKeyPress }) {
  const toggleListening = () => {
    toggleListen(!isListen);
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    console.log({ transcript });
  }, [transcript]);

  useEffect(() => {
    if (isListen === true) {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko-KR",
      });
    } else {
      SpeechRecognition.stopListening();
    }
  }, [isListen]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <>
        <textarea
          type="text"
          class="message-input"
          placeholder="문장을 입력하세요..."
          onKeyUpCapture={handleKeyPress}
        ></textarea>
      </>
    );
  }

  return isListen ? (
    <>
      <textarea
        type="text"
        class="message-input"
        placeholder="인식한 문장이 출력됩니다."
        value={transcript}
        onKeyUpCapture={handleKeyPress}
      ></textarea>
      <button type="button" class="message-listen" onClick={toggleListening}>
        듣는 중...
      </button>
    </>
  ) : (
    <>
      <textarea
        type="text"
        class="message-input"
        placeholder="문장을 입력하세요..."
        onKeyUpCapture={handleKeyPress}
      ></textarea>
      <button type="button" class="message-listen" onClick={toggleListening}>
        음성인식
      </button>
    </>
  );
}
export default SpeechRec;
