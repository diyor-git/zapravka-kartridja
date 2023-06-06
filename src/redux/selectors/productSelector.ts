import { RootState } from "../store";

export const getCatalogs = (state: RootState) => {
  return state.productSlice.catalogs;
};
export const getCartridjesCatalog = (state: RootState) => {
  return state.productSlice.cartridjesCatalogs;
};
export const getProductsByCatalogs = (state: RootState) => {
  return state.productSlice.products;
};
export const getCartridjesByCatalogs = (state: RootState) => {
  return state.productSlice.cartridjes;
};
export const getProductDetails = (state: RootState) => {
  return state.productSlice.productDetail;
};
export const searchProductSelector = (state: RootState) => {
  return state.productSlice.searchProduct;
};
export const getLoadingSelector = (state: RootState) => {
  return state.productSlice.loading;
};
