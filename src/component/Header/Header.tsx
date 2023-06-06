import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/img/logo.webp";
import Top from "./Top/Top";
import Middle from "./Middle/Middle";
import Bottom from "./Bottom/Bottom";
import Advantages from "./Advantages/Advantages";

const Header = () => {
  return (
    <div className={s.root}>
      <Top />
      <Middle />
      <Bottom />
      <Advantages />
    </div>
  );
};

export default Header;
