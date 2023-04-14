import { ThemeProvider } from "@emotion/react";
import { WrapperSM } from "../common/styled";
import { PAGE_THEME } from "../../config/themes";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <WrapperSM>
            <ThemeProvider theme={PAGE_THEME}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const email = e.currentTarget.elements["email"];
                    const password = e.currentTarget.elements["password"];
                    props.onLogin(email.value, password.value);
                    return false;
                }}>
                    <h2 className="text-center">Login</h2>
                    <TextField
                        label="Email" 
                        size="small" 
                        type="email"
                        name="email"
                        required
                        />
                    <TextField label="Password" size="small" type="password"
                        name="password"
                        required
                    />
                    <Button type="submit" variant="contained" 
                        >Login</Button>
                    <Button variant="text">
                        <Link to="/register">
                            New user? Register here
                        </Link>
                    </Button>
                </form>
            </ThemeProvider>
        </WrapperSM>
    );
}

export default Login;
