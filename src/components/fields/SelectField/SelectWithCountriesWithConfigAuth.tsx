import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema-countries-auth.json";
import { useClient } from "@/common/hooks";

function SelectWithCountriesWithConfigAuth() {
    const render = useClient();

    return render && (
        <MuiForms
            config={{
                headers: {
                    "authorization": "Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk"
                }
            }}
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default SelectWithCountriesWithConfigAuth;
