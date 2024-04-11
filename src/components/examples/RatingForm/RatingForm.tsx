import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

function RatingForm() {
    const render = useClient();

    return render && (
        <MuiForms
            config={{
                variant: "outlined"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default RatingForm;
