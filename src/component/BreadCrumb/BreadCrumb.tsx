import React, { Fragment } from "react";
import s from "./BreadCrumb.module.scss";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routes } from "../../routes/routes";
import { activeClasses } from "../../utils/activeLink";

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={s.root}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <NavLink
            to={match.pathname}
            className={({ isActive }) => activeClasses(isActive, s)}
          >
            {breadcrumb}
          </NavLink>
          {index !== breadcrumbs.length - 1 ? (
            <span className={s.slash}>/</span>
          ) : null}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
