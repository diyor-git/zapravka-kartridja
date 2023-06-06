import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
  getCartridjesCatalog,
  getCatalogs,
} from "../../redux/selectors/productSelector";
import { activeClasses } from "../../utils/activeLink";
import Loader from "../Loader";
import s from "./SideBar.module.scss";

const SideBar = () => {
  const [response, setResponse] = useState(false);
  const catalog = useAppSelector((state) => getCatalogs(state));
  const cartridjesCatalog = useAppSelector((state) =>
    getCartridjesCatalog(state)
  );
  if (
    !catalog ||
    !catalog.length ||
    !cartridjesCatalog ||
    !cartridjesCatalog.length
  ) {
    return <Loader />;
  }
  return (
    <>
      <div className={s.root}>
        <div className={s.head}>Каталог</div>
        <div className={s.body}>
          <div className={s.item}>
            <h5>заправка картриджей</h5>
            {catalog?.map((el: any) => {
              return (
                <NavLink
                  key={el._id}
                  to={`refuel/${el._id}`}
                  className={({ isActive }) => activeClasses(isActive, s)}
                >
                  <p>
                    <span>{el.title}</span>
                  </p>
                </NavLink>
              );
            })}

            <NavLink
              to="/recycle"
              className={({ isActive }) => activeClasses(isActive, s)}
            >
              <p>Рециклинг картриджей</p>
            </NavLink>
          </div>
          <hr />
          <div className={s.item}>
            <h5>Продажа картриджей</h5>
            {cartridjesCatalog.map((el: any) => {
              return (
                <NavLink
                  key={el._id}
                  to={`cartridjes/${el._id}`}
                  className={({ isActive }) => activeClasses(isActive, s)}
                >
                  <p>
                    <span>{el.title}</span>
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className={s.root2}>
        <div className={s.body}>
          <div className={s.item}>
            <h5>заправка картриджей</h5>
            {catalog?.map((el: any) => {
              return (
                <NavLink
                  key={el._id}
                  to={`refuel/${el._id}`}
                  className={({ isActive }) => activeClasses(isActive, s)}
                >
                  <p>
                    <span>{el.title}</span>
                  </p>
                </NavLink>
              );
            })}

            <NavLink
              to="/recycle"
              className={({ isActive }) => activeClasses(isActive, s)}
            >
              <p>Рециклинг картриджей</p>
            </NavLink>
          </div>
          <div className={s.item}>
            <h5>Продажа картридж</h5>
            {cartridjesCatalog?.map((el: any) => {
              return (
                <NavLink
                  key={el._id}
                  to={`cartridjes/${el._id}`}
                  className={({ isActive }) => activeClasses(isActive, s)}
                >
                  <p>
                    <span>{el.title}</span>
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
