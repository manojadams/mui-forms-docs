import React, { useState } from "react";
import MuiForms from "mui-forms";
import type { IFormData } from "@manojadams/metaforms-core";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import {
    Box,
    Card,
    createTheme,
    ThemeProvider,
    Typography,
    Avatar,
    Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const roundedTheme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundColor: "#f5f5f5",
                    "& fieldset": {
                        borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                        borderColor: "#d0d0d0",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    paddingTop: 12,
                    paddingBottom: 12,
                    textTransform: "none",
                    fontSize: "1rem",
                    backgroundColor: "#1976d2",
                    "&:hover": {
                        backgroundColor: "#1565c0",
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundColor: "#f5f5f5",
                    "& fieldset": {
                        borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                        borderColor: "#d0d0d0",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#1976d2",
                    },
                },
            },
        },
    },
});

function RegistrationForm() {
    const render = useClient();
    const [submittedData, setSubmittedData] = useState<IFormData | null>(null);

    return render && (
        <ThemeProvider theme={roundedTheme}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f2f5",
                    padding: 2,
                }}
            >
                <Card
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        padding: 4,
                        borderRadius: 3,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    {/* Header Icon */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 3,
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                backgroundColor: "#e3f2fd",
                                border: "3px solid #1976d2",
                            }}
                        >
                            <PersonIcon
                                sx={{
                                    fontSize: 48,
                                    color: "#1976d2",
                                }}
                            />
                        </Avatar>
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            fontWeight: 600,
                            marginBottom: 1,
                            color: "#1a1a1a",
                        }}
                    >
                        Create Your Account
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "center",
                            color: "#666",
                            marginBottom: 4,
                        }}
                    >
                        Join us and get started today.
                    </Typography>

                    {/* Form */}
                    <MuiForms
                        schema={schema}
                        onSubmit={(formdata) => {
                            setSubmittedData(formdata);
                            console.log(formdata);
                        }}
                    />

                    {/* Display Submitted Data */}
                    {submittedData && (
                        <Box
                            sx={{
                                marginTop: 4,
                                padding: 2,
                                backgroundColor: "#f5f5f5",
                                borderRadius: 2,
                                border: "1px solid #e0e0e0",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    marginBottom: 2,
                                    color: "#1a1a1a",
                                }}
                            >
                                Submitted Data:
                            </Typography>
                            <Box
                                component="pre"
                                sx={{
                                    backgroundColor: "#fff",
                                    padding: 2,
                                    borderRadius: 1,
                                    border: "1px solid #e0e0e0",
                                    overflow: "auto",
                                    fontSize: "0.85rem",
                                    color: "#1a1a1a",
                                }}
                            >
                                {JSON.stringify(submittedData, null, 2)}
                            </Box>
                        </Box>
                    )}

                    {/* Sign In Link */}
                    <Box
                        sx={{
                            textAlign: "center",
                            marginTop: 3,
                        }}
                    >
                        <Typography variant="body2" sx={{ color: "#666" }}>
                            Already have an account?{" "}
                            <Link
                                href="#"
                                sx={{
                                    color: "#1976d2",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}

export default RegistrationForm;
