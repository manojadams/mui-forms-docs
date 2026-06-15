import React from "react";
import schema from "./schema";
import MuiDocsForm from "@/components/MuiDocsForm";

const VanillaForm = () => {
    return (
        <MuiDocsForm
            title="Vanilla Form"
            defaultView="native"
            jsx={`import MuiForms from "mui-forms";
import NativeAdapter from "@mui-forms-adapters/native";
import schema from "./schema";

<MuiForms
    fieldMapper={NativeAdapter}
    schema={schema}
    onSubmit={handleSubmit}
/>`}
            schema={schema}
            onSubmit={(data) => {
                console.log("data", data);
            }}
        />
    );
}

export default VanillaForm;
