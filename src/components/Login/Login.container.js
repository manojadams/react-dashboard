import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { PAGE_ROUTES } from "../../common/constants";

const LoginContainer = () => {
    const navigate = useNavigate();
    return (
        <Login onLogin={() => {
            navigate("/" + PAGE_ROUTES.DASHBOARD);
        }} />
    );
}

export default LoginContainer;
