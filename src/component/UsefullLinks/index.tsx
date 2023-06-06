import React from "react";
import { HashLink } from "react-router-hash-link";
import s from "./usefullLinks.module.scss";

const UsefullLinks = () => {
  return (
    <div className={s.root}>
      <h3>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h3>
      <HashLink smooth to="/article/table/#table">
        Таблица совместимости картриджей
      </HashLink>
      <br />
      <HashLink smooth to="/article/source-calculation">
        Как считается ресурс картриджа в принтере
      </HashLink>
    </div>
  );
};

export default UsefullLinks;
