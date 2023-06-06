import React from "react";
import Companies from "../../component/Companies";
import List from "../../component/List/List";
import UsefullLinks from "../../component/UsefullLinks";
import s from "./repairPage.module.scss";

const RepairPage = () => {
  const list = {
    list1: [
      {
        id: 0,
        text: "Мастера с большим опытом ремонта принтеров и картриджей;",
      },
      {
        id: 1,
        text: "Работаем с поставщиками оригинальных и совместимых запчастей;",
      },
      { id: 2, text: "Возможен выезд мастера для ремонта к вам в офис;" },
      { id: 3, text: "Мы работаем более 11 лет!;" },
      {
        id: 4,
        text: "Нас выбрали в качестве партнеров по обслуживанию оргтехники -  более 1000 организаций!;  ",
      },
    ],
    list2: [
      {
        id: 0,
        text: "Диагностика в нашем СЦ - бесплатно;",
      },
      {
        id: 1,
        text: "Забор/доставка техники в ремонт курьером – от 50 000 сум в одну строну;",
      },
      {
        id: 2,
        text: "Диагностика на выезде - (при согласии на ремонт, оплату за диагностику не берем);",
      },
      {
        id: 3,
        text: "Ремонт картриджа;",
      },
      {
        id: 4,
        text: "Принтер плохо захватывает бумагу;",
      },
      {
        id: 5,
        text: "Устранение замятия бумаги;",
      },
      {
        id: 6,
        text: "Ремонт узла закрепления (печки);",
      },
      {
        id: 7,
        text: "Прошивка принтера;",
      },
      {
        id: 8,
        text: "И другие виды ремонта;",
      },
    ],
  };

  return (
    <div className={s.root}>
      <h1>РЕМОНТ ПРИНТЕРОВ В ТАШКЕНТЕ</h1>
      <h3>Сервисный Центр Eco Print:</h3>
      <List data={list.list1} />
      <h3>Стоимость и виды ремонта:</h3>
      <List data={list.list2} />
      <div style={{ marginTop: "20px" }}>
        <Companies />
      </div>
      <UsefullLinks />
    </div>
  );
};

export default RepairPage;
