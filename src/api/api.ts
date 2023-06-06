import axios from "axios";

const API_URL = "https://zapravka-kartridjey-back.pereplet.uz/";
// const API_URL = "http://localhost:5000/";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const api = {
  getCatalog() {
    return instance.get("/get-catalog").then((res) => {
      return res;
    });
  },
  getCatalogCartridjes() {
    return instance.get("/get-catalog-cartridjes").then((res) => {
      return res;
    });
  },
  getCartridjes(id: any) {
    return instance.get(`/get-cartridjes/${id}`).then((res) => {
      return res;
    });
  },
  getProductsByCatalog(id: any) {
    return instance.get(`/search-product-bycatalog/${id}`).then((res) => {
      return res;
    });
  },
  getProductDetail(id: any) {
    return instance.get(`/get-products/${id}`).then((res) => {
      return res;
    });
  },
  getCartridjesByCatalog(id: any) {
    return instance.get(`/search-cartridjes-bycatalog/${id}`).then((res) => {
      return res;
    });
  },
  searchProduct(model: any) {
    return instance.post(`/search-product/`, { model }).then((res) => {
      return res;
    });
  },
  searchWithCatalog(id: any, model: any) {
    return instance
      .post(`/search-product-with-catalog/${id}`, { model })
      .then((res) => {
        return res;
      });
  },
  toTelegram(msg: any) {
    return axios
      .post(
        `https://api.telegram.org/bot${"5554025379:AAEsjXv2owf8R_pHSwRLlBOR3-K3hDcdzLk"}/sendMessage`,
        {
          chat_id: "-1001768478805",
          parse_mode: "html",
          text: `<b>Имя: ${msg.name}</b>
<b>Номер: ${msg.phone}</b>`,
        }
      )
      .then((res) => {
        return res;
      });
  },
};
