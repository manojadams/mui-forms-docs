import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function PasswordField() {
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

export default PasswordField;
