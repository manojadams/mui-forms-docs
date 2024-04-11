import React from "react";
import schema from "./schema.json";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";

function Stepper() {
    const render = useClient();

    return render && (
        <MuiForms
            sectionLayout="stepper"
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

export default Stepper;
