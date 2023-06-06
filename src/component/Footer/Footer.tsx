import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.scss";
import Rights from "./Rights/Rights";

import logo from "../../assets/img/lightLogo.png";

const Footer = () => {
  return (
    <Fragment>
      <div className={s.root}>
        <div className="container">
          <div className={s.inner}>
            <a className={s.logo} href="/">
              <img src={logo} alt="" />
            </a>
            <div className={s.items}>
              <div className={s.item}>
                <a href="/repair">Ремонт принтеров в Ташкенте</a>
                <a href="/firmware">Прошивка принтеров в Ташкенте</a>
                <a href="/refuel">Заправка картриджей в Ташкенте</a>
                <a href="/recycle">Рециклинг картриджей в Ташкенте</a>
              </div>
              <div className={s.item}>
                <a href="/article/table">Таблица совместимости картриджей</a>
                <a href="/cartridge-sale">Продажа картриджей в Ташкенте</a>
                <a href="/pc-repair">Ремонт компьютеров в Ташкенте</a>
                <a href="/plotter-repair">Ремонт плоттеров и ризографов в Ташкенте</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rights />
    </Fragment>
  );
};

export default Footer;
