import React from "react";
import MuiForms from "mui-forms";
// import schema from "./schema.json";
import schema from "@/componentsv2/fields/FormWithIcons/schema.json";
import { useClient } from "@/common/hooks";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { FORM_THEME } from "../ComponentWithCustomTheme/ComponentWithCustomTheme";
import styled from "@emotion/styled";
import { axios } from "@/common/Util";
import { useRouter } from "next/router";

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
    const router = useRouter();

    return shouldRender && (
        <ThemeProvider theme={FORM_THEME}>
            <Box sx={{backgroundColor: "#fff", margin: "auto", marginBottom: "60px", "borderRadius": "20px"}}>
                <FormBox>
                    <MuiForms
                        config={{
                            loader: {
                                enabled: true
                            }
                        }}
                        schema={schema}
                        onNext={async (data) => {
                            const response = await axios.post("/submit", data);
                            return true;
                        }}
                        onSubmit={async (data) => {
                            const response = await axios.post("/submit", data);
                            router.push("/examples/form-with-basic-details")
                        }} 
                    />
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
