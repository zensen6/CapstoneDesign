import React from 'react';

const Temp = () => {
    let youtube = ['dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ'];
    return(
        <div class="d-flex flex-column min-vh-100">
            <button
                onClick={()=>window.open('./counsel', '_blank')}
                class="button button_primary"
                style={{ textDecoration: "none" }}
                >
                심리상담소 찾아보기
            </button>
            <div class="videoWrapper">
                {youtube.map((item, index) => (
                <iframe src={`https://www.youtube.com/embed/${item}?controls=0&autoplay=1&autoplay=1&loop=1&playlist=${item}`}
                    allow="fullscreen"
                    title={"감정 분석 영상 "+index}>
                </iframe>
                ))}
            </div>
        </div>
    );
};

export default Temp;