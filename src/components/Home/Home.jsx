import React, { useEffect } from "react";
import Styles from "./Home.module.scss";
import { data } from "../Lottiedata";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/explore");
  };

  useEffect(() => {
    setTimeout(handleNavigation, 4000);
  }, []);

  return (
    <div className={Styles.home}>
      <Lottie
        animationData={data}
        loop={true}
        style={{ height: "500px", width: "600px" }}
      />
    </div>
  );
}

export default Home;
