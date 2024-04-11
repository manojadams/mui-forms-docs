import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";

function Form2() {
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

export default Form2;
