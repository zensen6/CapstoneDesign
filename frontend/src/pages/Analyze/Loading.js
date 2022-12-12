import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
    return(
        <Background>
            <h2>감정 분석중...</h2>
            <img src={require("assets/images/spinner_200.gif")} alt="로딩중..." width="10%" />
        </Background>
        );
};

export default Loading;