import React from "react";
import Companies from "../../component/Companies";
import UsefullLinks from "../../component/UsefullLinks";
import s from "./cartridgesalepage.module.scss";

const CartridgeSalePage = () => {
  return (
    <div className={s.root}>
      <h1>ПРОДАЖА КАРТРИДЖЕЙ В ТАШКЕНТЕ</h1>
      <p>
        Приоритетное направление нашей Компании OOO “ECO PRINT” являются продажа
        картриджей в г. Ташкенте по конкурентоспобным ценам.
      </p>
      <p>
        Мы можем доставить картриджей для принтеров по всему городу Ташкента за
        горячайшие сроки.
      </p>
      <p>
        Для этого вам не обходима заказать нужный модель картриджа по номеру
        +9989 777 65 58 , и наш курьер доставит его к вашему офису и установят
        его к вашему принтеру.
      </p>

      <Companies />
      <p>
        Бесплатная консультация по выбору картриджа и стоимости: + 998 97 777 65
        58
      </p>
      <b>Мы работаем для тех, кто ценит качество!</b>
      <UsefullLinks />
    </div>
  );
};

export default CartridgeSalePage;
