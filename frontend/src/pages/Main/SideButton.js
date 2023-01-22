import Activation from "./Activation";

function SideButton({ height }) {
  return Activation({
    height: height,
    component: ({ toggleBtn, MoveTop }) => (
      <div
        className={
          "side-button transition-smooth " +
          (toggleBtn ? "activate" : "deactivate")
        }
        onClick={MoveTop}
      >
        <img
          src={require("assets/images/logo.png")}
          alt="Top"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    ),
  });
}

export default SideButton;
