import React from "react";
import List from "../../component/List/List";
import s from "./about.module.scss";

import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import logo3 from "../../assets/img/logo3.png";
import logo4 from "../../assets/img/logo4.png";

const AboutPage = () => {
  const list = [
    {
      id: 0,
      text: "Нас выбрали в качестве партнеров по обслуживанию оргтехники - более 1000 организаций!",
    },
    {
      id: 1,
      text: "Заправили - более 110 000 картриджей!",
    },
    {
      id: 2,
      text: "Отремонтировали - более 5 000 принтеров!",
    },
    {
      id: 3,
      text: "Мастера с опытом работы - более 2 лет!",
    },
  ];

  return (
    <div className={s.root}>
      <h1>О КОМПАНИИ</h1>
      <p>
        Компания “Eco Print” существует на рынке с 2011 года. Мы оказываем
        услуги: заправка картриджей в городе Ташкент с выездом в офис клиента и
        ремонт принтеров а также доставка новых картриджей марки Canon, HP,
        Samsung, Kyocera.
      </p>
      <List data={list} />

      <h3>НАШИ ДРУГИЕ ПРОЕКТЫ</h3>

      <div className={s.cards}>
        <a href="http://it-shkola.uz/" className={s.card}>
          <img src={logo1} alt="" />
        </a>
        <a href="https://hddmaster.uz/" className={s.card}>
          <img src={logo2} alt="" />
        </a>
        <a href="https://ecoprint.uz/" className={s.card}>
          <img src={logo3} alt="" />
        </a>
        <a href="https://pereplet.uz/" className={s.card}>
          <img src={logo4} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
