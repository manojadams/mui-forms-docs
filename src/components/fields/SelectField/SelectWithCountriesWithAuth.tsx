import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-countries-auth.json";
import { useClient } from "@/common/hooks";

function SelectWithCountriesWithAuth() {
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

export default SelectWithCountriesWithAuth;
