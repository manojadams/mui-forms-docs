import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function RegistrationForm() {
    const render = useClient();
    
    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // handle code
            }}
        />
    );
}

export default RegistrationForm;
