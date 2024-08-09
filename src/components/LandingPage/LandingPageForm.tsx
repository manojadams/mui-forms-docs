import React from "react";
import MuiForms from "mui-forms";
// import schema from "./schema.json";
import schema from "@/componentsv2/fields/FormWithIcons/schema.json";
import { useClient } from "@/common/hooks";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { FORM_THEME } from "../ComponentWithCustomTheme/ComponentWithCustomTheme";
import styled from "@emotion/styled";

const landingPageTheme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        }
    },
    typography: {
        fontSize: 12
    }
});

const LandingPageForm = () => {
    const shouldRender = useClient();

    return shouldRender && (
        <ThemeProvider theme={FORM_THEME}>
            <Box sx={{backgroundColor: "#fff", maxWidth: "800px", margin: "auto", marginBottom: "60px", "borderRadius": "20px"}}>
                <FormBox>
                    <MuiForms schema={schema} onSubmit={() => {}} />
                </FormBox>
            </Box>
        </ThemeProvider>
    )
}

export default LandingPageForm;

const FormBox = styled.div`
    .footer {
        padding-bottom: 24px;
    }
`;
