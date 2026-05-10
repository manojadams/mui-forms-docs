import MuiForms from "mui-forms";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack, ThemeProvider, Typography } from '@mui/material';
import schema from "@/components/LandingPage/schema.json";
import CUSTOM_FOOTER_THEME from "./custom-footer-theme";

interface IProps {
    previousBtn: JSX.Element;
    nextBtn: JSX.Element;
    submitBtn: JSX.Element;
};

const CustomFooter = (props: IProps) => {
  const handleValidate = () => {
    // handle code validation
  }

  return (
    <ThemeProvider theme={CUSTOM_FOOTER_THEME}>
      <Box
        sx={{
          bottom: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          borderTop: '1px solid #e0e0e0',
          py: 2,
          zIndex: 1000,
        }}
      >
        <Container maxWidth="md">
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Button type="reset">Reset</Button>
            <Button variant="outlined" onClick={handleValidate}>Validate</Button>
            {props.previousBtn}
            {props.nextBtn}
            {props.submitBtn}
          </Stack>
        </Container>
        <Box><Typography variant="body2">Note: This is a custom footer component</Typography></Box>
      </Box>
    </ThemeProvider>
  );
}

const FormWithCustomFooter = () => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, [])
    return shouldRender && (
        <MuiForms
            schema={schema}
            footer={CustomFooter}
            onSubmit={(data) => {
                console.log(data);
            }}
        />
    );
}

export default FormWithCustomFooter;
