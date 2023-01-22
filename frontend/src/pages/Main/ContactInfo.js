import Activation from "./Activation";

function ContactInfo({ height }) {
  return (
    <section className="p-1" style={{ backgroundColor: "white" }}>
      <div className="container">
        {Activation({
          height: height,
          component: ({ toggleBtn }) => (
            <div
              className={
                "row g-4 transition-smooth " +
                (toggleBtn ? "activate" : "deactivate")
              }
            >
              <div className="col-md">
                <div id="map">
                  <img
                    src={require("assets/images/sogang2.png")}
                    style={{
                      width: "700px",
                      height: "400px",
                    }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md pt-lg-5 inform-text">
                <h2 className="text-center mb-4">Contact Info</h2>
                <ul className="list-group-flush lead">
                  <li className="list-group-item">
                    <span className="fw-bold">Team Name: </span>팀명이 없는 팀
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Main Location: </span>서강대학교
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Call: </span>010-1234-5678
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">E-Mail: </span>
                    nonamedteam@google.com
                  </li>
                </ul>
              </div>
            </div>
          ),
        })}
      </div>
    </section>
  );
}

export default ContactInfo;
