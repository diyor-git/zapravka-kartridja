import React from "react";
import s from "./Rights.module.scss";

const Rights = () => {
  const year: number = new Date().getFullYear();

  return (
    <div className={s.root}>
      <div className="container">
        © 2021-{year} Данный сайт является собственностью компании ООО "Eco
        Print". Все материалы данного сайта являются объектами авторского права.
      </div>
      <div>
        Done by
        <a
          href="https://github.com/Veifario"
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "10px",
            fontSize: "17px",
          }}
        >
          Veifario
        </a>
      </div>
    </div>
  );
};

export default Rights;
