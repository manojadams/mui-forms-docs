import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema.json";

const RadioField = () => {
    const render = useClient();

    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
};

export default RadioField;

