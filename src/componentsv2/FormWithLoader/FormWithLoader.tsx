import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

const axios = {
    post: async (endpoint: string, data: any) => {
        return new Promise((resolve) => {
            console.log(endpoint);
            setTimeout(() => resolve(data), 1000)
        });
    }
}

const FormWithLoader = () => {
    const render = useClient();

    return render && (
        <MuiForms
            config={{
                loader: {
                    enabled: true
                }
            }}
            useNextResponse={true}
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
