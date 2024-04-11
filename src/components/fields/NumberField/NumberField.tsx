import React from "react";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";

function NumberField() {
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

export default NumberField;
