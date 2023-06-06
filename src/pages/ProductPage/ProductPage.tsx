import React, { useEffect } from "react";
import s from "./ProductPage.module.scss";
import List from "../../component/List/List";
import product from "../../assets/img/product.png";
import { Link, useLocation, useParams } from "react-router-dom";
import UsefullLinks from "../../component/UsefullLinks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProductsByCatalog } from "../../redux/reducers/productReducer";
import {
  getLoadingSelector,
  getProductsByCatalogs,
} from "../../redux/selectors/productSelector";
import Loader from "../../component/Loader";
import SearchBar from "../../component/SearchBar";

const list = {
  list1: [
    {
      id: 0,
      text: "Выезжаем во все районы г. Ташкент;",
    },
    {
      id: 1,
      text: "Мастера с опытом работы более 2 года;",
    },
    {
      id: 2,
      text: "Гарантия на выполненные работы;",
    },
    {
      id: 3,
      text: "Бесплатная консультация по обслуживанию, работе с офисной техникой, приобретению офисной техники и расходных материалов к ней;",
    },
    {
      id: 4,
      text: "Наличный  и безналичный расчет. Оплата по факту выполненой работы. Отсрочка платежа.",
    },
  ],

  list2: [
    {
      id: 0,
      text: "Заправка картриджей HP ч/б - от 30 000 сум;",
    },
    {
      id: 1,
      text: "Заправка цветных картриджей HP - от 130 000 сум;",
    },
    {
      id: 2,
      text: "Замена чипа - от 50 000 сум;",
    },
    {
      id: 3,
      text: "Ремонт принтера - от 200 000 сум;",
    },
    {
      id: 4,
      text: "Прошивка принтера - от 75 000 сум.",
    },
  ],
};

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => getProductsByCatalogs(state));
  const getLoading = useAppSelector((state) => getLoadingSelector(state));
  const params: any = useParams();
  useEffect(() => {
    dispatch(getProductsByCatalog(params.catalog_id));
  }, [params.catalog_id]);

  if (getLoading || products == undefined) {
    return <Loader />;
  }

  return (
    <div className={s.productPage}>
      <h1>ЗАПРАВКА КАРТРИДЖЕЙ {products?.catalogs?.model.toUpperCase()}</h1>
      <div className={s.info}>
        <h3>
          Заправляем черно-белые и цветные лазерные картриджи{" "}
          {products?.catalogs?.model} в Ташкенте. Используем только качественные
          расходные материалы
        </h3>
        <List data={list.list1} />
        <h3>Наши цены:</h3>
        <List data={products?.catalogs?.price} />
      </div>

      <UsefullLinks />

      <div className={s.moreInfo}>
        <p>
          Чтобы узнать подробную информацию о заправке вашего картриджа найдите
          модель принтера из списка ниже или же воспользуясь поисковиком,
          подберите требуемый вам принтер или картридж.
        </p>
        <p>
          Или позвоните по телефону <b>+998 97 777-65-58</b>
        </p>
      </div>
      <SearchBar catalog_id={params.catalog_id} from="catalog" />
      <div className={s.chooseModel}>
        <h4>ВЫБЕРИТЕ МОДЕЛЬ ПРИНТЕРА:</h4>
        <div className={s.printers}>
          {!products.product || !products.product.length ? (
            <h4 className={s.notFound}>Не найдено</h4>
          ) : (
            products?.product?.map((el: any) => {
              return (
                <div key={el._id} className={s.printer}>
                  <img
                    src={`https://zapravka-kartridjey-back.pereplet.uz/${el.img}`}
                    alt=""
                  />
                  <div className={s.text}>
                    <h4>{el.title}</h4>
                    <Link to={el._id}>
                      <button>Подробнее</button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
