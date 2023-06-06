import React from "react";
import { Link } from "react-router-dom";
import s from "./companies.module.scss";

import hp from "../../assets/img/hp.png";
import canon from "../../assets/img/canon.png";
import samsung from "../../assets/img/samsung.png";
import kyocera from "../../assets/img/kyocera.png";

const Companies = () => {
  return (
    <div className={s.root}>
      <Link to="/refuel/62fa1375f509fa4489581299">
        <img src={hp} alt="Hp" />
      </Link>
      <Link to="/refuel/62fa13ddf509fa448958129b">
        <img src={canon} alt="Canon" />
      </Link>
      <Link to="/refuel/62fa1562f509fa448958129f">
        <img src={samsung} alt="Samsung" />
      </Link>
      <Link to="/refuel/62fa151cf509fa448958129d">
        <img src={kyocera} alt="Kyocera" />
      </Link>
    </div>
  );
};

export default Companies;
