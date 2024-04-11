import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";

function Form() {
    const render = useClient();
    
    return render && (
        <MuiForms
            config={{
                variant: "filled"
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Form;
