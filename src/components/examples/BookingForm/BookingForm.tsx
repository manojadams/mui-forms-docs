import React from "react";
import MuiForms, { metaAPI } from "mui-forms";
import type { ISchema } from "@manojadams/metaforms-core";
import { useClient } from "@/common/hooks";
import schema from "./schema.json";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { green } from "@mui/material/colors";

const roundedBookingTheme = createTheme({
    palette: {
        primary: {
            main: green[600],
            dark: green[800],
            contrastText: "#fff"
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    "&.Mui-disabled": {
                        backgroundColor: "#f1f3f5"
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d0d5dd"
                    },
                    "&.Mui-disabled .MuiInputBase-input": {
                        WebkitTextFillColor: "#667085"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: green[600]
                    }
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: green[600]
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    paddingTop: 10,
                    paddingBottom: 10,
                    color: "#fff",
                    backgroundColor: green[600],
                    "&:hover": {
                        backgroundColor: green[800]
                    }
                }
            }
        },
        MuiRadio: {
            defaultProps: {
                color: "primary",
                icon: <CheckBoxOutlineBlankRoundedIcon />,
                checkedIcon: <CheckBoxRoundedIcon />
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    minHeight: 40,
                    marginLeft: 0,
                    marginRight: 12,
                    padding: "4px 14px 4px 8px",
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    borderRadius: 24,
                    "&:has(.Mui-checked)": {
                        borderColor: green[600],
                        backgroundColor: green[50]
                    }
                }
            }
        }
    }
});

/**
 * This validation checks if the return date is after the departure date.
 * Return true if validation passed else return error message string.
 * @param value 
 * @param validationData 
 * @returns 
 */
const returnDateValidation = (value: any, validationData: any) => {
    if (!validationData.targetField) {
        return true;
    }
    const departureDateString = metaAPI.getFieldValue(validationData.targetField);
    const departureDate = new Date(departureDateString as string);
    departureDate.setHours(0, 0, 0, 0);

    const returnDate = new Date(value);
    returnDate.setHours(0, 0, 0, 0);
    if (returnDate.getTime() === departureDate.getTime()) {
        return "Return date cannot be same as departure date";
    }
    if (returnDate.getTime() < departureDate.getTime()) {
        return "Return date cannot be before departure date.";
    }

    return true;
}

/**
 * This validation checks if the departure and arrival cities are same.
 * Return true if validation passed else return error message string.
 * @param value 
 * @param validationData 
 * @returns 
 */
const citysNotSameValidation = (value: any, validationData: any) => {
    if (!validationData.targetField) {
        return true;
    }
    const departureCity = metaAPI.getFieldValue(validationData.targetField);
    if (value === departureCity) {
        return "Departure and arrival city cannot be same.";
    }
    return true;
}

const BookingForm = () => {
    const render = useClient();
    return (
        <ThemeProvider theme={roundedBookingTheme}>
            {
                render && (
                    <Box
                        sx={{
                            borderRadius: 4,
                            padding: { xs: 2, sm: 3 },
                            backgroundImage: `
                                linear-gradient(135deg, rgba(220, 252, 231, 0.95), rgba(239, 246, 255, 0.92) 54%, rgba(240, 253, 244, 0.98)),
                                repeating-linear-gradient(90deg, rgba(22, 101, 52, 0.08) 0 1px, transparent 1px 36px),
                                repeating-linear-gradient(0deg, rgba(14, 116, 144, 0.07) 0 1px, transparent 1px 36px)
                            `,
                            border: "1px solid rgba(22, 101, 52, 0.14)",
                            boxShadow: "0 24px 70px rgba(15, 81, 50, 0.16)"
                        }}
                    >
                        <Box
                            sx={{
                                padding: { xs: 2, sm: 3 },
                                borderRadius: 3,
                                backgroundColor: "rgba(255, 255, 255, 0.86)",
                                border: "1px solid rgba(255, 255, 255, 0.72)",
                                backdropFilter: "blur(14px)"
                            }}
                        >
                            <MuiForms
                                buttons={{
                                    "submit": (
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                            startIcon={<FlightTakeoffIcon />}
                                        >
                                            Search Flights
                                        </Button>
                                    )
                                }}
                                validators={{
                                    "returnDate": returnDateValidation,
                                    "citysNotSame": citysNotSameValidation
                                }}
                                schema={schema as ISchema}
                                onSubmit={(formData) => {
                                    console.log(formData);
                                }}
                            />
                        </Box>
                    </Box>
                )
            }
        </ThemeProvider>
    );
};

export default BookingForm;
