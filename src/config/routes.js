import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import DashboardHome from "../pages/DashboardPage/Home";
import { PAGE_ROUTES } from "../common/constants";

const ROUTES = [
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "about",
      Component: AboutPage,
    },
    {
      path: "contact-us",
      Component: ContactUsPage
    },
    {
      path: PAGE_ROUTES.LOGIN,
      Component: LoginPage
    },
    {
      path: PAGE_ROUTES.SIGN_UP,
      Component: SignupPage
    },
    {
      path: PAGE_ROUTES.DASHBOARD,
      Component: DashboardPage,
      children: [
        {
          path: PAGE_ROUTES.HOME,
          Component: DashboardHome
        }
      ]
    }
];

export default ROUTES;
