import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { ColorsStyles } from "./styles";
import { useClient } from "@/common/hooks";

const FORM_THEME = createTheme({
    palette: {
        primary: {
            main: "rgb(46,51,54)"
        }
    },
    typography: {
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

const ComponentWithCustomTheme = () => {
    const render = useClient();

    return render && (
        <ThemeProvider theme={FORM_THEME}>
            <MuiForms
                config={{
                    gapY: 2
                }}
                schema={schema} 
                onSubmit={(data) => {
                    // handle submit
                }}
            />
        </ThemeProvider>
    )
};

export default ComponentWithCustomTheme;

