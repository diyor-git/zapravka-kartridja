import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  searchProduct,
  searchWithCatalog,
} from "../../redux/reducers/productReducer";
import s from "./searchBar.module.scss";

const SearchBar = ({ from, catalog_id }: any) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const search = () => {
    if (text.trim() == "") return;
    if (from == "catalog") {
      dispatch(searchWithCatalog({ id: catalog_id, model: text }));
      // navigate("/search-page");
    } else {
      dispatch(searchProduct(text));
      navigate("/search-page");
    }
  };

  const searchOnEnter = (key: string) => {
    if (key == "Enter") search();
  };
  return (
    <div className={from == "catalog" ? s.root1 : s.root}>
      <input
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => searchOnEnter(e.key)}
        value={text}
        type="text"
        placeholder={
          from == "catalog" ? "Поиск по модели принтера" : "Поиск по каталогу"
        }
      />
      <div className={s.searchIcon} onClick={search}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;
