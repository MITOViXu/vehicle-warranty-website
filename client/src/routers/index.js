import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import About from "../pages/About/About";
import FindcarNow from "../pages/FindcarNow/FindcarNow";
import Detail from "../pages/Detail/Detail";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignIn from "../pages/SignIn/SignIn";
import AdminPage from "../components/AdminPage/AdminPage";
import SignUp from "../pages/SignUp/SignUp";
import VehicleByType from "../pages/VehicleByType/VehicleByType";

export const routes = [
  {
    path: "/",
    page: Home,
    isShowHeader: true,
  },
  {
    path: "/home",
    page: Home,
    isShowHeader: true,
  },
  {
    path: "/admin",
    page: AdminPage,
    isShowHeader: true,
  },
  {
    path: "/about",
    page: About,
    isShowHeader: true,
  },
  {
    path: "/findcar",
    page: FindcarNow,
    isShowHeader: true,
  },
  {
    path: "/detail/:plate",
    page: Detail,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignIn,
    isShowHeader: false,
  },
  {
    path: "/vehicle-type/:name",
    page: VehicleByType,
    isShowHeader: true,
  },
  {
    path: "/sign-up",
    page: SignUp,
    isShowHeader: false,
  },
  // {
  //   path: "/sign-in-new",
  //   page: SigninNew,
  //   isShowHeader: false,
  // },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
