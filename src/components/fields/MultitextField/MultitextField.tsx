import React from "react";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";

function MultitextField() {
    const render = useClient();

    return render && (
        <MuiForms
            schema={schema as any}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default MultitextField;
