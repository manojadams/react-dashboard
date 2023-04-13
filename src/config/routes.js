import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import DashboardHome from "../pages/DashboardPage/Home";

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
      path: "login",
      Component: LoginPage
    },
    {
      path: "sign-up",
      Component: SignupPage
    },
    {
      path: "dashboard",
      Component: DashboardPage,
      children: [
        {
          path: "home",
          Component: DashboardHome
        }
      ]
    }
];

export default ROUTES;
