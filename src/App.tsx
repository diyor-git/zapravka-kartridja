import { Fragment, useEffect } from "react";
import BreadCrumb from "./component/BreadCrumb/BreadCrumb";
import FixedButtons from "./component/FixedButtons/FixedButtons";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import SideBar from "./component/SideBar/SideBar";
import AppRouter from "./pages/AppRouter/AppRouter";
import { useAppDispatch } from "./redux/hooks";
import {
  getCatalog,
  getCatalogCartridjes,
} from "./redux/reducers/productReducer";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCatalog());
    dispatch(getCatalogCartridjes());
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="mainBlock">
          <SideBar />
          <div className="block">
            <BreadCrumb />
            <AppRouter />
          </div>
        </div>
      </div>
      <FixedButtons />
      <Footer />
    </Fragment>
  );
};

export default App;
