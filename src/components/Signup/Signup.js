import { Button, TextField, ThemeProvider } from "@mui/material";
import { WrapperSM } from "../common/styled";
import { DASHBOARD_THEME } from "../../config/themes";

function Signup(props) {
    return (
        <WrapperSM>
            <ThemeProvider theme={DASHBOARD_THEME}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const email = e.currentTarget.elements["email"];
                    const pass = e.currentTarget.elements["password"];
                    props.onSignup(email, pass);
                    return false;
                }}>
                    <h2 className="text-center">Signup</h2>
                    <TextField label="Email" name="email" size="small" type="email" required />
                    <TextField label="Password" password="password" size="small" type="password" required />
                    <Button type="submit" variant="contained">Signup</Button>
                </form>
            </ThemeProvider>
        </WrapperSM>
    );
}

export default Signup;
