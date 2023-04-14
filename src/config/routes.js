import DashboardHome from "../pages/DashboardPage/Home";
import { PAGE_ROUTES } from "../common/constants";
import ErrorBoundary from "../components/common/ErrorBoundary";
import IndexPage from "../pages/IndexPage";

const ROUTES = [
    {
      path: "/",
      Component: IndexPage,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          index: true,
          async lazy() { 
            const HomePage = await import("../pages/HomePage"); 
            return { 
              Component: HomePage.default
            }; 
          }
        },
        {
          path: "about",
          lazy: () => import("../pages/AboutPage")
        },
        {
          path: "contact-us",
          lazy: () => import("../pages/ContactUsPage")
        },
        {
          path: PAGE_ROUTES.LOGIN,
          async lazy() { 
            const LoginPage = await import("../pages/LoginPage"); 
            return { 
              Component: LoginPage.default
            }; 
          }
        },
        {
          path: PAGE_ROUTES.SIGN_UP,
          lazy: () => import("../pages/SignupPage")
        },
        {
          path: PAGE_ROUTES.DASHBOARD,
          async lazy() { 
            const DashboardPage = await import("../pages/DashboardPage"); 
            return { 
              Component: DashboardPage.default
            }; 
          },
          children: [
            {
              path: PAGE_ROUTES.HOME,
              async lazy() { 
                const DashboardHome = await import("../pages/DashboardPage/Home"); 
                return { 
                  Component: DashboardHome.default
                }; 
              }
            }
          ]
        }
      ]
    }
];

export default ROUTES;
