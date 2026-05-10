import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function EmployeeForm() {
    const render = useClient();
    
    return render && (
        <MuiForms
            schema={schema as any}
            onSubmit={() => {
                // to do
            }}
        />
    );
};

export default EmployeeForm;
