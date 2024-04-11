import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-countries.json";
import { useClient } from "@/common/hooks";

function SelectWithCountries() {
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

export default SelectWithCountries;
