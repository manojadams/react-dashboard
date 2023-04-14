import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user } from "../../states/user";

const PrivateRoute = (props) => {
    const userDetails = useRecoilValue(user);

    if (userDetails.isLoggedIn()) {
        return props.children;
    }
    return <Navigate to="/login" />
}

export default PrivateRoute;
