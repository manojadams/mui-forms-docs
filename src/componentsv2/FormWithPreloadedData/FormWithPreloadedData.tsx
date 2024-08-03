import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

const FormWithPreloadedData = () => {
    const render = useClient();

    return render && (
        <MuiForms
            data={{
                "first_name": "Jyoti",
                "last_name": "Baruah",
                "email": "jyoti.baruah@gmail.com",
                "age": 24
            }}
            schema={schema}
            onSubmit={(data) => {
                // handle submit
            }}
        />
    )
}

export default FormWithPreloadedData;
