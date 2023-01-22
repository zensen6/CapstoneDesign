const Features = () => {
  return (
    <div className="main-features">
      <div className="main-feature-item main-feature_ai">
        <h3 className="main-feature-title">AI 분석 모델</h3>
        <p className="text main-feature-description">
          기존의 수 많은 데이터를 통해 감정 분석 모델을 만들었습니다. 이를 통한
          여러분의 스트레스 해소 방안을 모색합니다.
        </p>
      </div>
      <div className="main-feature-item main-feature_video">
        <h3 className="main-feature-title">스트레스 해소용 영상 추천</h3>
        <p className="text main-feature-description">
          우울증 및 스트레스 해소 목적 개인 맞춤형 영상을 추천드립니다. 개인화된
          심리 안정제의 역할을 해드립니다.
        </p>
      </div>
      <div className="main-feature-item main-feature_counsel">
        <h3 className="main-feature-title">심리 상담소 안내 서비스</h3>
        <p className="text main-feature-description">
          현재 감정 상태에 따른 인근의 심리 상담소를 알려드립니다. 심리치료에
          대한 인식 개선을 위해 노력합니다.
        </p>
      </div>
    </div>
  );
};

export default Features;
