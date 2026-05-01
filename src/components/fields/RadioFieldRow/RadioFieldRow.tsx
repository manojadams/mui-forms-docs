import React from "react";
import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";
import schema from "./schema.json";

const RadioFieldRow = () => {
    const render = useClient();
    return render && (
        <MuiForms
            schema={schema}
            onSubmit={(data) => {
                console.log(data);
            }}
        />
    );
}

export default RadioFieldRow;
