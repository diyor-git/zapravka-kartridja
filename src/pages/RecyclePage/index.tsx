import React from "react";
import UsefullLinks from "../../component/UsefullLinks";
import s from "./recyclePage.module.scss";

import steps from "../../assets/img/recycleSteps.jpg";

const RecyclePage = () => {
  return (
    <div className={s.root}>
      <h1>РЕЦЕКЛИНГ КАРТРИДЖА В ТАШКЕНТЕ</h1>
      <p className={s.text}>
        Процедура рециклинга представляет собой комплекс мер направленных на
        восстановление картриджа. Технология рециклинга позволяет продлить срок
        эксплуатации картриджа без потери в качестве печати.
      </p>
      <h3>Этапы рецеклинга картриджа</h3>
      <img src={steps} alt="" />
      <p>
        Для заказа рецеклинга картриджей вам не обходимо позвонить нам
        <b> +998 97 777 65 58 </b> заключив с нами договор.
      </p>
      <UsefullLinks />
    </div>
  );
};

export default RecyclePage;
