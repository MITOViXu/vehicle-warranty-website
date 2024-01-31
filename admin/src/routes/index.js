import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import BookPage from "../pages/BookPage/BookPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import News from "../pages/News/News";
import SchedulePage from "../pages/SchedulePage/SchedulePage";
import AccountPage from "../pages/AccountPage/AccountPage";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '/bookpage',
        page: BookPage,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '/schedulepage',
        page: SchedulePage,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '/news',
        page: News,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '/accountpage',
        page: AccountPage,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '/contactpage',
        page: ContactPage,
        isNavbar: true,
        isFooter: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isNavbar: false,
        isFooter: false
    }
]