import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./config/routes";

const router = createBrowserRouter(ROUTES, {
    basename: "/"
});

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
