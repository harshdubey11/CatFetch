import React from "react";
import Styles from "./topbar.module.scss";
import Lottie from "lottie-react";
import { data2 } from "../Lottiedata";

function Topbar(props) {
  return (
    <div className={Styles.topbar}>
      <div className={Styles.wrapper}>
        <div className={Styles.left}>
          <a href="" className={Styles.logo}>
            Catto
          </a>
        </div>
        <div className={Styles.right}>
          <Lottie
            animationData={data2}
            loop={true}
            style={{ height: "70px", width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
