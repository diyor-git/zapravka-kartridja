import React from "react";
import { Link } from "react-router-dom";
import { StringLiteral } from "typescript";
import Article from "../../component/Article";
import s from "./ArticlesPage.module.scss";

const ArticlesPage = () => {
  interface Props {
    data: string;
    to: string;
  }

  const data = [
    {
      to: "/article/table",
      title: "Таблица совместимости",
      data: "15.07.2022",
      text: "Таблица совместимости картриджей",
    },
    {
      to: "/article/source-calculation",
      title: "Расчет ресурса картриджа",
      data: "08.08.2022",
      text: "Как считается ресурс картриджа в принтере",
    },
  ];

  const displayArticles = () =>
    data.map((e: Props) => <Article key={e.to} data={e} />);

  return (
    <div className={s.root}>
      <h1>СТАТЬИ</h1>

      <div className={s.articles}>{displayArticles()}</div>
    </div>
  );
};

export default ArticlesPage;
