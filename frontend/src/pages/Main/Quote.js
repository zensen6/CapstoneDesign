import React from "react";
import "pages/Main/Main.css";
import styled from "styled-components";

const Sources = styled.div`
  font-size: 30px;
  color: #ccc;
  margin-bottom: -30px;
  font-style: italic;
`;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Quote = () => {
  var random = getRandom(1, 14);
  return (
    <h1 className="quote rainbow-mode">
      <div>
        {
          {
            1: (
              <span>
                다람쥐 헌<br />
                쳇바퀴에 타고파.
                <Sources>- 한국다람쥐</Sources>
              </span>
            ),
            2: (
              <span>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit
                <Sources>- Lorem ipsum</Sources>
              </span>
            ),
            3: (
              <span>
                int main(void)
                <br />
                printf("hello, world\n");
                <Sources>- All Programmers</Sources>
              </span>
            ),
            4: (
              <span>
                어둠은 영원하지 않다.
                <br />
                그리고, 그런 어둠 속에도 별은 존재한다.
                <Sources>- Ursula K. Le Guin</Sources>
              </span>
            ),
            5: (
              <span>
                너에게 있어 가장 불편한 시기는
                <br />너 자신을 가장 많이 배우는 시기이다.
                <Sources>- Mary Louise Bean</Sources>
              </span>
            ),
            6: (
              <span>
                이것 또한 지나가리라.
                <Sources>- 솔로몬</Sources>
              </span>
            ),
            7: (
              <span>
                사막이 아름다운 이유는
                <br />
                어딘가에 샘이 숨겨져 있기 때문이다.
                <Sources>- Le Petit Prince</Sources>
              </span>
            ),
            8: (
              <span>
                역경 속에서 피어난 꽃이
                <br />
                가장 흔치 않고 아름다운 꽃이다.
                <Sources>- 뮬란 Mulan</Sources>
              </span>
            ),
            9: (
              <span>
                나는 나를 믿는다.
                <br />
                나는 나를 사랑한다.
                <Sources>- 나 자신</Sources>
              </span>
            ),
            10: (
              <span>
                인생은 살아가는 것이 아니라
                <br />
                찾아가는 것이다.
                <Sources>- 빈센트 반 고흐</Sources>
              </span>
            ),
            11: (
              <span>
                한 번의 실패와 영원한 실패를 혼동하지 마라.
                <Sources>- F. 스콧 핏제랄드</Sources>
              </span>
            ),
            12: (
              <span>
                행복은 습관이다.
                <br />
                그것을 몸에 지니라.
                <Sources>- 허버트 제임스</Sources>
              </span>
            ),
            13: (
              <span>
                인생은 행복을 위해 만들어진 것이 아니다.
                <br />
                행복을 위해 인생이 만들어진 것이다.
                <Sources>- 알베르트 아인슈타인</Sources>
              </span>
            ),
            14: (
              <span>
                눈물은 우리를 강하게 만든다.
                <Sources>- 케네스 그레이</Sources>
              </span>
            ),
          }[random]
        }
      </div>
    </h1>
  );
};
export default Quote;
