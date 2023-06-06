import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ArticlesPage from "../pages/ArticlesPage/ArticlesPage";
import TablePage from "../pages/ArticlesPage/TablePage/TablePage";
import AboutPage from "../pages/AboutPage";
import RefuelPage from "../pages/RefuelPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import RepairPage from "../pages/RepairPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import FirmwarePage from "../pages/FirmwarePage";
import RecyclePage from "../pages/RecyclePage";
import CartridjesPage from "../pages/CartridjesPage/CartridjesPage";
import { DynamicBreadCrumb, DynamicBreadCrumbCartridge, DynamicBreadCrumbSecond } from "../component/BreadCrumb/DynamicBreadCrumb/DynamicBreadCrumb";
import SearchPage from "../pages/SearchPage/SearchPage";
import SourcePage from "../pages/ArticlesPage/SourcePage";
import ComputerRepairPage from "../pages/ComputerRepairPage";
import PlotterRepairPage from "../pages/PlotterRepairPage";
import CartridgeSalePage from "../pages/CartridgeSalePage";

export const routes = [
  { path: "/", element: <Home />, breadcrumb: "Главная" },
  { path: "/about", element: <AboutPage />, breadcrumb: "О компании" },
  { path: "/article", element: <ArticlesPage />, breadcrumb: "Статьи" },
  {
    path: "/article/table",
    element: <TablePage />,
    breadcrumb: "Таблица совместимости",
  },
  {
    path: "/article/source-calculation",
    element: <SourcePage />,
    breadcrumb: "Расчет ресурса",
  },
  {
    path: "/search-page/",
    element: <SearchPage />,
    breadcrumb: "Поиск",
  },
  {
    path: "/refuel/:catalog_id/:model_id",
    element: <ProductDetailPage />,
    breadcrumb: DynamicBreadCrumbSecond,
  },
  {
    path: "/cartridjes/:catalog_id",
    element: <CartridjesPage />,
    breadcrumb: DynamicBreadCrumbCartridge,
  },
  {
    path: "/cartridjes/:catalog_id/:model_id",
    element: <ProductDetailPage />,
    breadcrumb: DynamicBreadCrumbSecond,
  },
  {
    path: "/cartridjes",
    element: <CartridjesPage />,
    breadcrumb: "Продажа картриджей",
  },

  {
    path: "/refuel/:catalog_id",
    element: <ProductPage />,
    breadcrumb: DynamicBreadCrumb,
  },

  { path: "/contact", element: <ContactPage />, breadcrumb: "Контакты" },

  {
    path: "/refuel",
    element: <RefuelPage />,
    breadcrumb: "Заправка картриджей",
  },
  {
    path: "/firmware",
    element: <FirmwarePage />,
    breadcrumb: "Прошивка принтеров",
  },
  { path: "/repair", element: <RepairPage />, breadcrumb: "Ремонт принтеров" },
  {
    path: "/recycle",
    element: <RecyclePage />,
    breadcrumb: "Рецеклинг картриджей",
  },
  {
    path: "/pc-repair",
    element: <ComputerRepairPage />,
    breadcrumb: "Ремонт компьютеров",
  },
  {
    path: "/plotter-repair",
    element: <PlotterRepairPage />,
    breadcrumb: "Ремонт Плоттеров и Ризографов",
  },
  {
    path: "/cartridge-sale",
    element: <CartridgeSalePage />,
    breadcrumb: "Продажа картриджей",
  },

  { path: "*", element: <ErrorPage /> },
];
