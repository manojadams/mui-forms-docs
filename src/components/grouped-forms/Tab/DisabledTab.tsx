import React from "react";
import schemaDisabledTabs from "./schema-disabled-tabs.json";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";

function Tab() {
    const render = useClient();

    return render && (
        <MuiForms
            schema={schemaDisabledTabs}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Tab;
