import { createTheme } from "@mui/material";
import { ColorsStyles } from "./page.theme";

const DASHBOARD_THEME = createTheme({
    palette: {
        primary: {
            main: "#673ab7"
        }
    },
    typography: {
        fontFamily: "Comfortaa"
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

export const FORM_THEME = createTheme({
    palette: {
        primary: {
            main: "#673ab7"
        }
    },
    typography: {
        fontFamily: "Comfortaa",
        fontSize: 12
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
