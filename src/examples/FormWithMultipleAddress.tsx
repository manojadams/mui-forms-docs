import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-multiple-address.json";
import { useClient } from "@/common/hooks";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import { axios } from "@/common/Util";
import { useRouter } from "next/router";
import { FORM_THEME } from "@/components/ComponentWithCustomTheme/ComponentWithCustomTheme";

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

const Footer = () => {
    return (
        <div>
            <button>Hi</button>
        </div>
    )
}

const FormWithMultipleAddress = () => {
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
                            router.push("/examples/form-with-multiple-address")
                        }} 
                    />
                </FormBox>
            </Box>
        </ThemeProvider>
    )
}

export default FormWithMultipleAddress;

const FormBox = styled.div`
    .footer {
        padding-bottom: 24px;
    }
`;
