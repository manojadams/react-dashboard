import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { PAGE_ROUTES } from "../../common/constants";
import Gateway from "../../services/Gateway";
import { useState } from "react";
import { toast } from "react-hot-toast";

const LoginContainer = () => {
    const navigate = useNavigate();
    return (
        <Login onLogin={(email, password) => {
            if (email === "demo@demo" && password === "demo") {
                Gateway.login(email, password);
                navigate("/" + PAGE_ROUTES.DASHBOARD);
            } else {
                toast.error("Username or password is not correct");
            }
        }} />
    );
}

export default LoginContainer;
