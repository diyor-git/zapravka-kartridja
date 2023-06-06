import { useEffect } from "react";
import s from "./CartridjesPage.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCartridjesByCatalog } from "../../redux/reducers/productReducer";
import {
  getCartridjesByCatalogs,
  getLoadingSelector,
} from "../../redux/selectors/productSelector";
import Loader from "../../component/Loader";
import UsefullLinks from "../../component/UsefullLinks";

const CartridjesPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => getCartridjesByCatalogs(state));
  const location: any = useLocation();
  const params = useParams();
  useEffect(() => {
    dispatch(getCartridjesByCatalog(params.catalog_id));
  }, [params.catalog_id]);

  const loading = useAppSelector((state) => getLoadingSelector(state));
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={s.CartridjesPage}>
      <h1>КУПИТЬ КАРТРИДЖ {products?.catalogs?.model.toUpperCase()}</h1>
      <div className={s.info}>
        <h3>
          Продаем оригинальные картриджи и совместимые картриджи{" "}
          {products?.catalogs?.model} для лазерных принтеров и МФУ.
        </h3>
        <p>
          Мы можем доставить картриджей для принтеров по всему городу Ташкента
          за горячайшие сроки.
        </p>
        <p>Найдем любой картридж!</p>
        <h4>
          Для этого вам необходимо заказать требуемую модель картриджа по номеру
          <b> +9989 777 65 58</b>, и наш курьер доставит его к вашему офису и
          установят его к вашему принтеру.
        </h4>
      </div>

      <UsefullLinks />

      <div className={s.chooseModel}>
        <h4>ВЫБЕРИТЕ МОДЕЛЬ КАРТРИДЖА:</h4>
        <div className={s.printers}>
          {products?.product?.map((el: any) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default CartridjesPage;
