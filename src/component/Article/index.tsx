import React from "react";
import { Link } from "react-router-dom";
import s from "./article.module.scss";

interface Props {
  data: any;
}

const Article = ({ data }: Props) => {
  return (
    <div className={s.root}>
      <h3>{data.title}</h3>
      <h5>{data.data}</h5>
      <p>{data.text}</p>
      <Link to={data.to}>
        <h4>Подробнее</h4>
      </Link>
    </div>
  );
};

export default Article;
