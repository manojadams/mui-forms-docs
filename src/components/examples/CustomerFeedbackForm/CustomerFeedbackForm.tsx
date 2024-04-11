import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function CustomerFeedbackForm() {
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

export default CustomerFeedbackForm;
