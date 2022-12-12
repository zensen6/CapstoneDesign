import Header from "components/Header";
import Footer from "components/Footer";
import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Loading from './Loading';
import axios from "axios";

const Analyze = () => {
    const [loading, setLoading] = useState(true);
    const [emote, setEmote] = useState("");
    const [score, setScore] = useState("");
    const [yt, setYt] = useState("");
    
    const location = useLocation();
    console.log(location);
    
    async function SendNodejs({ text }) {
        try{
            const response = axios
                .post("api/emotion", text)
                .then((res) => {
                    setLoading(false);
                    //console.log(res);
                    return res.data;
                })
                .catch((e) => {
                    console.error(e);
                    return e;
                });
            //console.log(response);
            return response;
            } catch(e) {
                console.log(e);
            }
    }

    useEffect(() => {
        SendNodejs({ text: location.state.data })
            .then((res)=>{
                setEmote(res.emotion.emotion);
                setScore(res.emotion.score);
                for (let i = 0; i < 9; i++) {
                    setYt(yt => [...yt, res.youtube[i].id.videoId]);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, [location.state.data]);

    return(
        <div class="d-flex flex-column min-vh-100">
            <Header />
            {loading ? <Loading /> : <>
            <div>
                <h1><br/>당신의 기분에 어울리는 컨텐츠를 준비해보았어요.</h1><br/>
            </div>
            {(emote === "상처" || emote === "슬픔" || emote === "불안" || emote === "분노") && score >= 0.9 ?
            <button
                onClick={()=>window.open('./counsel', '_blank')}
                class="button button_primary"
                style={{ textDecoration: "none" }}
                >
                심리상담소 찾아보기
            </button>:null}
            <div class="videoWrapper">
                {yt.map((item, index) => (
                <iframe src={`https://www.youtube.com/embed/${item}?controls=1&fullscreen=1&autoplay=${(index===0?1:0)}&loop=${(index===0?1:0)}&modestbranding=1&playlist=${item}`}
                    allow="fullscreen; controls; autoplay; loop; modestbranding; playlist;"
                    title={"감정 분석 영상 "+index}>
                </iframe>
                ))}
            </div>
            </>
            }
            <Footer />
        </div>
    );
};

export default Analyze;