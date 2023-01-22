import Activation from "./Activation";

function Stress({ height }) {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-0 text-center text-sm-start">
      <div className="container">
        {Activation({
          height: height,
          component: ({ toggleBtn }) => (
            <div
              className={
                "d-sm-flex align-items-center justify-content-between transition-smooth " +
                (toggleBtn ? "activate" : "deactivate")
              }
            >
              <div>
                <h1 className="quote">
                  오늘 하루
                  <br />
                  <span className="text-warning">스트레스</span>를<br />
                  날려보세요
                </h1>
              </div>
              <img
                className="img-fluid w-50 bg-secondary d-none d-sm-block"
                src="https://dy7glz37jgl0b.cloudfront.net/funnel/issue-test/helpme-hero-smaller.jpeg"
                alt=""
              />
            </div>
          ),
        })}
      </div>
    </section>
  );
}

export default Stress;
