import React from "react";
import s from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <div className={s.root}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.advance}>
            <i className="fa-solid fa-location-dot"></i>
            <p>Выезд мастера/курьера</p>
          </div>
          <div className={s.advance}>
            <i className="fa-solid fa-business-time"></i>
            <p>Ср. срок выполнения заказа – 1 день</p>
          </div>
          <div className={s.advance}>
            <i className="fa-solid fa-wallet"></i>
            <p>Оплата по факту</p>
          </div>
          <div className={s.advance}>
            <i className="fa-solid fa-circle-check"></i>
            <p>Материалы высокого качества</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
