import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routes/routes";

const AppRouter = () => {
  const displayRoutes = () =>
    routes.map(({ path, element }: any) => (
      <Route path={path} element={element} key={path} />
    ));

  return <Routes>{displayRoutes()}</Routes>;
};

export default AppRouter;
