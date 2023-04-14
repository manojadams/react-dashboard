import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary(props) {
    const error = useRouteError();
    console.error(error);
    
}

export default ErrorBoundary;
