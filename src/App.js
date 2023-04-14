import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./config/routes";
import Loader from "./components/Loader/Loader";

const router = createBrowserRouter(ROUTES, {
    basename: "/"
});

const App = () => {
    return <RouterProvider router={router} fallbackElement={Loader} />
}

export default App;
