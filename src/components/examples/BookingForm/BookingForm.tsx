import React from "react";
import MuiForms, { metaAPI } from "mui-forms";
import type { ISchema } from "@manojadams/metaforms-core";
import { useClient } from "@/common/hooks";
import schema from "./schema.json";

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
    return render && (
        <MuiForms
            validators={{
                "returnDate": returnDateValidation,
                "citysNotSame": citysNotSameValidation
            }}
            schema={schema as ISchema}
            onSubmit={(formData) => {
                console.log(formData);
            }}
        />
    );
};

export default BookingForm;
