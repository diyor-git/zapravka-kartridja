import { useState } from "react";
import Modal from "react-modal";

import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Model from "./Modal/Modal";
import { Controller, useForm } from "react-hook-form";

import { useAppDispatch } from "../../../redux/hooks";
import { toTelegram } from "../../../redux/reducers/productReducer";
import s from "./Middle.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",

    minWidth: "400px",

    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root") || "");

const Middle = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }
  let [error, setError] = useState("");

  function closeModal() {
    setIsOpen(false);
  }
  const foo = () => {
    setIsOpen2(!isOpen2);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: any) => {
    dispatch(toTelegram(data));
    setError("");
    reset();
    closeModal();
    reset();
  };

  return (
    <div className="container">
      <div className={s.root}>
        <div className={"modal"}>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h3>Заполните данные</h3>
            <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="label">
                {errors.name && <span className="error">*</span>}
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      placeholder="Введите имя"
                      type={"text"}
                      className={s.input}
                      onChange={(e: any) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </div>
              <div className="label">
                {errors.phone && <span className="error">*</span>}
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      className={s.input}
                      placeholder="Введите номер телефона"
                      type={"text"}
                      onChange={(e: any) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </div>
              <button type="submit">Отправить</button>
            </form>
          </Modal>
        </div>

        <div className={s.left}>
          <div className={s.header}>
            <div className={s.logo}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className={s.item}>
              <i className="fa-solid fa-phone"></i>
              <p id="#call" onClick={openModal}>
                Заказать звонок
              </p>
            </div>
          </div>
          <div className={s.desc}>
            <b>11 лет успешной работы</b>
            <p>Нас выбрали более</p>
            <p>1000 организации</p>
          </div>
        </div>
        <div className={s.contact}>
          <i className="fa-solid fa-mobile-screen-button"></i>
          <a href="tel:+998 97 777 65 58" className={s.number}>
            +998 97 777-65-58
          </a>
        </div>
        <div className={s.group}>
          <div className={s.item}>
            <i className="fa-solid fa-phone"></i>
            <p id="#call" onClick={openModal}>
              Заказать звонок
            </p>
          </div>
          <div className={s.item}>
            <Model open={isOpen2} foo={foo} />
          </div>
          <div className={s.item}>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@ecoprint.uz">info@ecoprint.uz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
