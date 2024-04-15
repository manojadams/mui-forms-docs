import React from "react";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";

function FileField() {
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

export default FileField;
