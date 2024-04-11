import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-single.json";
import { useClient } from "@/common/hooks";

function CheckboxSingle() {
    const render = useClient();
    
    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default CheckboxSingle;
