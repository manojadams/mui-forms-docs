import React from "react";
import FormField from "../FormField";
import schema2 from "./schema2.json";
import { useClient } from "@/common/hooks";
   
function MultiSelectFieldV2 () {
    const render = useClient();

    return render && (
        <FormField schema={schema2} />
    );
}

export default MultiSelectFieldV2;

