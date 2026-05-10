import React from "react";
import MuiForms from "mui-forms";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useClient } from "@/common/hooks";
import schema from "./schema.json";

const roundedInputTheme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 24
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        }
    }
});

const RoundedButtonForm = () => {
    const render = useClient();

    return render && (
        <ThemeProvider theme={roundedInputTheme}>
            <Box sx={{ maxWidth: 520 }}>
                <MuiForms
                    schema={schema}
                    onSubmit={() => {
                        // handle submit
                    }}
                />
            </Box>
        </ThemeProvider>
    );
};

export default RoundedButtonForm;
