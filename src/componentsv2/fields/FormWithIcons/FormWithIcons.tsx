import React from "react";
import FormField from "../FormField";
import schema from "./schema.json";

function FormWithIcons() {
    return (
        <FormField schema={schema} />
    );
};

export default FormWithIcons;
