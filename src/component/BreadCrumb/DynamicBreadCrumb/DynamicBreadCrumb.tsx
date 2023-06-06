import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCartridjesByCatalog } from "../../../redux/reducers/productReducer";
import {
  getCartridjesByCatalogs,
  getProductDetails,
  getProductsByCatalogs,
} from "../../../redux/selectors/productSelector";

export const DynamicBreadCrumb = ({ match }: any) => {
  const productDetail = useAppSelector((state) => getProductsByCatalogs(state));
  return <div>{productDetail?.catalogs?.model}</div>;
};

export const DynamicBreadCrumbSecond = ({ match }: any) => {
  const productDetail = useAppSelector((state) => getProductDetails(state));

  return <div>{productDetail?.model || productDetail.cartridgeName}</div>;
};

export const DynamicBreadCrumbCartridge = ({ match }: any) => {
  const productDetail = useAppSelector((state) =>
    getCartridjesByCatalogs(state)
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartridjesByCatalog(match.pathname.split("/")[2]));
  }, [match.pathname]);
  return <div>{productDetail?.catalogs?.model}</div>;
};
