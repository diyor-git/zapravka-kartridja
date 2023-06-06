import React from "react";
import { Link } from "react-router-dom";
import s from "./refuelPage.module.scss";
import List from "../../component/List/List";
import Companies from "../../component/Companies";

const RefuelPage = () => {
  const list = [
    {
      id: 0,
      text: "Заправка картриджей HP Canon Kyosera Samsung в Ташкенте   - от 30 000 сум",
    },
    {
      id: 1,
      text: "Заправка цветных картриджей - от 130 000 сум",
    },
    {
      id: 3,
      text: "Прошивка принтера - от 75 000 сум",
    },
    {
      id: 4,
      text: "Ремонт принтера - от 150 000 сум",
    },
    {
      id: 5,
      text: "Диагностика поломки мастером на выезде - от 50 000 сум",
    },
    {
      id: 6,
      text: "Чтобы узнать стоимость заправки Вашего картриджа выберите 'Модель принтера' из списка ниже",
    },
    {
      id: 7,
      text: "Или позвоните по телефону +998 97 777-65-58",
    },
  ];

  return (
    <div className={s.root}>
      <h1>ЗАПРАВКА КАРТРИДЖЕЙ В ТАШКЕНТЕ</h1>
      <h3>НАШИ ЦЕНЫ</h3>
      <List data={list} />
      <h3>ЗАПРАВЛЯМ КАРТРИДЖИ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ</h3>

      <Companies />
    </div>
  );
};

export default RefuelPage;
