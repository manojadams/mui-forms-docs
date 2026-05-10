import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Chip } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import LockIcon from "@mui/icons-material/Lock";

const paymentTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#5B7EFF",
            light: "#7B9EFF",
            dark: "#4B6EFF",
        },
        secondary: {
            main: "#10B981",
            light: "#6EE7B7",
            dark: "#059669",
        },
        background: {
            default: "#0F172A",
            paper: "#1E293B",
        },
        text: {
            primary: "#F1F5F9",
            secondary: "#CBD5E1",
        },
        divider: "#334155",
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "sans-serif",
        ].join(","),
        h4: {
            fontWeight: 700,
            fontSize: "28px",
            letterSpacing: "-0.5px",
            color: "#F1F5F9",
        },
        h6: {
            fontWeight: 600,
            fontSize: "16px",
            letterSpacing: "-0.3px",
            color: "#F1F5F9",
        },
        body1: {
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#CBD5E1",
        },
        button: {
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.3px",
        },
    },
    shape: {
        borderRadius: 12,
    }
});

function PaymentForm() {
    const render = useClient();
    
    return render && (
        <ThemeProvider theme={paymentTheme}>
            <Box
                sx={{
                    background: `
                        radial-gradient(circle at 20% 50%, rgba(91, 126, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                        linear-gradient(135deg, #0F172A 0%, #1E293B 100%)
                    `,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    overflow: "auto"
                }}
            >
                <Box
                    sx={{
                        borderRadius: "20px",
                        padding: { xs: "32px 24px", sm: "48px" },
                        maxWidth: "520px",
                        width: "100%",
                        background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.15)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        position: "relative",
                    }}
                >
                    {/* Header Section */}
                    <Box sx={{ mb: 4, display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #5B7EFF 0%, #4B6EFF 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <ShieldIcon sx={{ color: "#F1F5F9", fontSize: 28 }} />
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 0.5, fontSize: "22px" }}>
                                Secure Payment
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "#94A3B8" }}>
                                Your payment information is safe with us
                            </Typography>
                        </Box>
                    </Box>

                    {/* Form */}
                    <Box sx={{ mb: 3 }}>
                        <MuiForms
                            schema={schema as any}
                            onSubmit={() => {
                                // to do
                            }}
                        />
                    </Box>

                    {/* Security Badge */}
                    <Box
                        sx={{
                            mt: 4,
                            p: 2.5,
                            borderRadius: "12px",
                            background: "rgba(91, 126, 255, 0.1)",
                            border: "1px solid rgba(91, 126, 255, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                border: "2px solid rgba(91, 126, 255, 0.4)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <LockIcon sx={{ color: "#5B7EFF", fontSize: 20 }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#5B7EFF", mb: 0.25 }}>
                                100% Secure & Encrypted
                            </Typography>
                            <Typography sx={{ fontSize: "13px", color: "#94A3B8" }}>
                                Your data is protected with bank-level security
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default PaymentForm;
