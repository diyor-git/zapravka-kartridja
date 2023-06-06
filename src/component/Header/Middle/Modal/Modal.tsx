import React, { Fragment } from "react";
import s from "./Modal.module.scss";

type Props = {
  open: Boolean;
  foo: () => void;
};

const Modal = ({ open, foo }: Props) => {
  if (open)
    return (
      <Fragment>
        <div onClick={foo} className="overlay"></div>
        <div className={s.root1}>
          <div onClick={foo} className={s.inner}>
            <i className="fa-solid fa-clock" />
            <p>Время работы</p>
          </div>
          <div className={s.text}>
            <div>
              <p>
                <b>Пн-Пт:</b>
                <br /> 9:00 - 18:00
              </p>
            </div>
            <div>
              <p>
                <b>Сб:</b>
                <br />
                10:00 - 14:00
              </p>
            </div>
            <div>
              <p>
                <b>Приём заказов:</b>
                <br />
                круглосуточно
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );

  return (
    <div className={s.root}>
      <div onClick={foo} className={s.inner}>
        <i className="fa-solid fa-clock"></i>
        <p>Время работы</p>
      </div>
    </div>
  );
};

export default Modal;
