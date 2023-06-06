import { Link } from "react-router-dom";
import Loader from "../../component/Loader";
import { useAppSelector } from "../../redux/hooks";
import {
  getLoadingSelector,
  searchProductSelector,
} from "../../redux/selectors/productSelector";
import s from "./SearchPage.module.scss";

const SearchPage = () => {
  const result = useAppSelector((state) => searchProductSelector(state));
  const loading = useAppSelector((state) => getLoadingSelector(state));

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      <h2>РЕЗУЛЬТАТЫ ПОИСКА</h2>
      {!result || result.length <= 0 ? (
        <h3>Не найдено</h3>
      ) : (
        <div className={s.printers}>
          {result?.map((el: any) => {
            return (
              <div key={el._id} className={s.printer}>
                <img
                  src={`https://zapravka-kartridjey-back.pereplet.uz/${el.img}`}
                  alt=""
                />
                <div className={s.text}>
                  <h4>{el.title}</h4>
                  <Link
                    to={`/refuel/${el?.brand?.toLowerCase()}/${el?._id?.toLowerCase()}`}
                    state={{ id: el._id }}
                  >
                    <button>Подробнее</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
