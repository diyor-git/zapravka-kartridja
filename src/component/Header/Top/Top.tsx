import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { searchProduct } from "../../../redux/reducers/productReducer";
import { activeClasses } from "../../../utils/activeLink";
import SearchBar from "../../SearchBar";
import s from "./Top.module.scss";

const Top = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className={s.root}>
      <div className="container">
        <div className={s.inner}>
          <div onClick={() => setHamburger(!hamburger)} className={s.hamburger}>
            <i className="fa-solid fa-bars" />
          </div>

          <div className={s.nav}>
            <NavLink
              to="/about"
              onClick={() => setHamburger(false)}
              className={({ isActive }) => activeClasses(isActive, s)}
            >
              О компании
            </NavLink>
            <NavLink
              to="/article"
              onClick={() => setHamburger(false)}
              className={({ isActive }) => activeClasses(isActive, s)}
            >
              Статьи
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setHamburger(false)}
              className={({ isActive }) => activeClasses(isActive, s)}
            >
              Контакты
            </NavLink>
          </div>
          <SearchBar  from="top"/>
        </div>
      </div>
      <div
        style={{ display: hamburger ? "" : "none" }}
        className={s.responseNav}
      >
        <NavLink
          to="/refuel"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          заправка картриджей
        </NavLink>
        <NavLink
          to="/firmware"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          прошивка принтеров
        </NavLink>
        <NavLink
          to="/repair"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          ремонт принтеров
        </NavLink>
        <NavLink
          to="/recycle"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          рециклинг картриджей
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          контакты
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          О компании
        </NavLink>
        <NavLink
          onClick={() => setHamburger(false)}
          to="/article"
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          Статьи
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setHamburger(false)}
          className={({ isActive }) => activeClasses(isActive, s)}
        >
          Контакты
        </NavLink>
      </div>
    </div>
  );
};

export default Top;
