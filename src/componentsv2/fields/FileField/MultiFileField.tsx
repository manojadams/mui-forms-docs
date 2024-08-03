import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema2.json";

const MultiFileField = () => {
    const render = useClient();

    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // TODO
            }}
        />
    )
};

export default MultiFileField;

