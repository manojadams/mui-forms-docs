import React from "react";
import FormField from "../FormField";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
   
function MultiSelectField() {
    const render = useClient();

    return render && (
        <FormField schema={schema} />
    );
};
export default MultiSelectField;
