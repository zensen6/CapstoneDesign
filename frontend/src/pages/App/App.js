import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "pages/App/App.css";
import Main from "pages/Main/Main";
import ChatbotPage from "pages/Chatbot/ChatbotPage";
import CounselFind from "pages/Counsel/CounselFind";
import VideoRec from "pages/VideoRecommend/Videorec";
import Contributor from "pages/Contributor/Contributor";
import NotFound from "pages/NotFound/NotFound";
import Analyze from "pages/Analyze/Analyze";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/chat/*" element={<ChatbotPage />}></Route>
          <Route path="/counsel/*" element={<CounselFind />}></Route>
          <Route path="/video/*" element={<VideoRec />}></Route>
          <Route path="/contributor/*" element={<Contributor />}></Route>
          <Route path="/analyze/*" element={<Analyze />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
