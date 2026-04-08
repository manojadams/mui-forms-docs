import React, { useState } from "react";
import MuiForms, { metaAPI } from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import { Box, Button, Alert, Stack } from "@mui/material";

function ValidateForm() {
    const render = useClient();
    const [validationResult, setValidationResult] = useState({
        hasErrors: false,
        errors: [] as Array<{ id: string; errorMsg: string }>
    });
    const formName = "Validate Form Demo";

    const handleValidate = () => {
        // Call metaAPI.metaForm.validateForm to get validation errors
        const errorDetails = metaAPI.metaForm.validateForm(formName);
        setValidationResult(errorDetails as any);
    };

    const handleClearValidation = () => {
        setValidationResult({
            hasErrors: false,
            errors: []
        });
    };

    return render && (
        <Box sx={{ padding: 2, maxWidth: 600 }}>
            <MuiForms
                name={formName}
                schema={schema}
                onSubmit={() => {
                    // handle code
                    console.log("Form submitted");
                }}
            />
            
            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleValidate}
                >
                    Validate Form
                </Button>
                <Button 
                    variant="outlined"
                    onClick={handleClearValidation}
                >
                    Clear
                </Button>
            </Stack>

            {validationResult && (
                <Box sx={{ marginTop: 3 }}>
                    {validationResult?.hasErrors ? (
                        <>
                            <Alert severity="error" sx={{ marginBottom: 2 }}>
                                Form has validation errors
                            </Alert>
                            <Box sx={{ backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1 }}>
                                <h4>Validation Errors:</h4>
                                <ul>
                                    {validationResult?.errors?.map((error, index) => (
                                        <li key={index}>
                                            {error.id && <strong>{error.id}:</strong>} {error.errorMsg}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </>
                    ) : (
                        <Alert severity="success">
                            🎉 All validation passed! Form is valid.
                        </Alert>
                    )}
                </Box>
            )}

            {/* Debug Info */}
            {validationResult && (
                <Box sx={{ marginTop: 2, padding: 2, backgroundColor: "#e3f2fd", borderRadius: 1 }}>
                    <h4>Validation Result (JSON):</h4>
                    <pre style={{ fontSize: "0.85rem", overflow: "auto" }}>
                        {JSON.stringify(validationResult, null, 2)}
                    </pre>
                </Box>
            )}
        </Box>
    );
}

export default ValidateForm;
