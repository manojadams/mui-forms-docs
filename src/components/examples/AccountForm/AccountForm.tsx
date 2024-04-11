import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function AccountForm() {
    const render = useClient();
    
    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default AccountForm;
