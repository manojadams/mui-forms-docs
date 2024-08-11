import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";
import { axios } from "@/common/Util";

const FormWithLoader = () => {
    const render = useClient();

    return render && (
        <MuiForms
            config={{
                loader: {
                    enabled: true
                }
            }}
            schema={schema}
            onNext={async (data) => {
                const response = await axios.post("/submit", data);
                return true;
            }}
            onSubmit={async (data) => {
                const response = await axios.post("/submit", data);
                return true;
            }}
        />
    )
}

export default FormWithLoader;
