import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function PaymentForm() {
    const render = useClient();
    
    return render && (
        <MuiForms
            schema={schema as any}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default PaymentForm;
