import { createTheme } from "@mui/material";

export const ColorsStyles = {
    ".MuiOutlinedInput-root": {
        "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)"
            }
        },
        "&.Mui-error": {
            "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d32f2f"
                }
            }
        },
        "&.Mui-focused": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)"
            }
        }
    },
    ".MuiFormLabel-root": {
        "&.Mui-focused": {
            color: "var(--primary-color)"
        },
        "&.Mui-error": {
            color: "#d32f2f"
        }
    }
};

const PAGE_THEME = createTheme({
    palette: {
        primary: {
            main: "#58355E"
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

export default PAGE_THEME;