import React, { useEffect, useState } from "react";
import s from "./ProductDetailPage.module.scss";
import product from "../../assets/img/product.png";
import { HashLink } from "react-router-hash-link";
import List from "../../component/List/List";
import Table from "../../component/Table/Table";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getCartridjesDetail,
  getProductDetail,
} from "../../redux/reducers/productReducer";
import {
  getLoadingSelector,
  getProductDetails,
} from "../../redux/selectors/productSelector";
import Loader from "../../component/Loader";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    text: "Разборка и очистка картриджа;",
  },
  {
    id: 2,
    text: "Заправка картриджа с тонером;",
  },
  {
    id: 3,
    text: "Проверка качества печати;",
  },
];
const ProductDetailPage = () => {
  const params: any = useParams();
  const dispatch = useAppDispatch();
  const location: any = useLocation();
  const [state, setState] = useState(false);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    if (location.pathname.includes("refuel")) {
      setState(true);
      dispatch(getProductDetail(params.model_id));
    }
    if (location.pathname.includes("cartridjes")) {
      dispatch(getCartridjesDetail(params.model_id));
    }
  }, [params.model_id]);
  const productDetail = useAppSelector((state) => getProductDetails(state));
  const loading = useAppSelector((state) => getLoadingSelector(state));
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={s.ProductDetailPage}>
      <h2>
        {" "}
        {state ? <>{productDetail.model}</> : productDetail.brand}{" "}
        {productDetail.cartridgeName}
      </h2>
      <div className={s.detail}>
        <div className={s.img}>
          <img src={`https://zapravka-kartridjey-back.pereplet.uz/${productDetail.img}`} alt="" />
        </div>
        <div className={s.info}>
          <div className={s.characters}>
            <div className={s.desc}>
              <h5>Код</h5>
              <div></div>
              <h5>{productDetail.code}</h5>
            </div>
            {!state && (
              <>
                <div className={s.desc}>
                  <h5>Бренд</h5>
                  <div></div>
                  <h5>{productDetail.brand}</h5>
                </div>
                <div className={s.desc}>
                  <h5>Тип</h5>
                  <div></div>
                  <h5>{productDetail.type}</h5>
                </div>
              </>
            )}
            <div className={s.desc}>
              <h5>Ресурс черного картриджа, стр.</h5>
              <div></div>
              <h5>{productDetail.resource}</h5>
            </div>
            {state && (
              <>
                <div className={s.desc}>
                  <h5>Требуется замена чипа</h5>
                  <div></div>
                  <h5>{productDetail.chipReplace ? "Да" : "Нет"}</h5>
                </div>
                <div className={s.desc}>
                  <h5>Нужна прошивка принтера при первой заправке</h5>
                  <div></div>
                  <h5>{productDetail.needFirware ? "Да" : "Нет"}</h5>
                </div>
              </>
            )}
            <div className={s.desc}>
              <h5>Форма оплаты</h5>
              <div></div>
              <h5>Наличный и безналичный расчет </h5>
            </div>
            <HashLink smooth to="#morecharacters">
              <h4>Посмотреть все характеристики</h4>
            </HashLink>
          </div>
          <div className={s.description}>
            <h4>Заправка картриджа с выездом в офис клиента</h4>
            <List data={list} />
            <h5>
              Возможен безналичный расчет и доставка (условия уточняйте у
              менеджера).
            </h5>
            <h5>Гарантия!*</h5>
            <h5>
              *(В случае выявления брака, бесплатно отремонтируем картридж или
              заменим картридж, если ремонт невозможен).
            </h5>
            <Link to="/article/source-calculation">
              Как считается ресурс картриджа в принтере
            </Link>
          </div>
        </div>
      </div>
      <div className={s.table}>
        <h4>Описание и характеристики</h4>
        <Table product={productDetail} state={state} />
        <p>
          {productDetail.title} восстановленный оригинальный: 7 лет на рынке.
          Выезд на дом/офис. Опытные мастера. Качественные материалы. Гарантия.
          Наличный и безналичный расчет. Оплата по факту выполненной работы.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
