import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function CreditCardForm() {
    const render = useClient();

    return render && (
        <MuiForms
            config={{
                variant: "outlined",
                size: "small"
            }}
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default CreditCardForm;
