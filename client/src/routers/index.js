
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import About from "../pages/About/About";
import FindcarNow from "../pages/FindcarNow/FindcarNow";
import Detail from "../pages/Detail/Detail";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AdminPage from "../components/AdminPage/AdminPage";
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
    path: "/detail",
    page: Detail,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignIn,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUp,
    isShowHeader: false,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
