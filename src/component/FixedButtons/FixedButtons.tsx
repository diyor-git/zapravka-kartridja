import React from "react";
import s from "./FixedButtons.module.scss";

const FixedButtons = () => {
  return (
    <div className={s.root}>
      <a href="tel: +99890 910 84 24">
        <div className={s.call} title="Позвонить">
          <i className="fa-solid fa-phone"></i>
        </div>
      </a>
      <a href="https://t.me/ecoprintservis" target="_blank">
        <div className={s.telegram} title="Telegram">
          <i className="fa-brands fa-telegram"></i>
        </div>
      </a>
    </div>
  );
};

export default FixedButtons;
