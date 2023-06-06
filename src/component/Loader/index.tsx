import React from "react";
import s from "./loader.module.scss";
import loader from "../../assets/img/loader.svg";

const Loader = () => {
  return (
    <div className={s.root}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
