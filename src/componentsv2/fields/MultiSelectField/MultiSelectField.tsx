import React from "react";
import FormField from "../FormField";
import schema from "./schema.json";
   
function MultiSelectField() {
    return (
        <FormField schema={schema} />
    );
};
export default MultiSelectField;

