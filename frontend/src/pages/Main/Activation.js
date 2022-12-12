import { useEffect, useState } from "react";

function Activation({ height, component }) {
  const [toggleBtn, setToggleBtn] = useState(false);
  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > height ? setToggleBtn(true) : setToggleBtn(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return component({ toggleBtn, MoveTop });
}

export default Activation;
