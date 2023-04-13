import { createTheme } from "@mui/material";
import { ColorsStyles } from "./page.theme";

const DASHBOARD_THEME = createTheme({
    palette: {
        primary: {
            main: "#673ab7"
        }
    },
    typography: {
        fontFamily: "Poppins-Regular"
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: ColorsStyles
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: ColorsStyles
            }
        }
    }
});

export const TABLE_THEME = DASHBOARD_THEME;

export default DASHBOARD_THEME;
