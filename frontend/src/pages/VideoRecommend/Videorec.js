import React, { useEffect, useState } from "react";
import Header from "components/Header";
import "pages/App/App.css";
function VideoRec() {
  // 영상을 추천하는 !!!
  const samplevideos = [
    "https://www.youtube.com/watch?v=6rmJb_6Vx18&ab_channel=SNU",
    "https://www.youtube.com/watch?v=UeFVhKeMb3o&ab_channel=Lofi%EC%BD%94%EB%94%A9",
  ];

  const [videos, setVideos] = useState([]);

  return (
    <div>
      <Header />

      <div className="video-container">{/* {videos.map(()=>)} */}</div>
    </div>
  );
}
export default VideoRec;
