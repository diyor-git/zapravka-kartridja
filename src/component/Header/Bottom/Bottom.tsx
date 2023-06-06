import React from "react";
import { NavLink } from "react-router-dom";
import { activeClasses } from "../../../utils/activeLink";
import s from "./Bottom.module.scss";

const Bottom = () => {
  return (
    <div className={s.root}>
      <div className="container">
        <div className={s.nav}>
          <NavLink
            to="/refuel"
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            заправка картриджей
          </NavLink>
          <NavLink
            to="/firmware"
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            прошивка принтеров
          </NavLink>
          <NavLink
            to="/repair"
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            ремонт принтеров
          </NavLink>
          <NavLink
            to="/recycle"
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            рециклинг картриджей
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            контакты
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
