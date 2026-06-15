import React from "react";
import schema from "../VanillaForm/schema.json";
import MuiDocsForm from "@/components/MuiDocsForm";

const AntdForms = () => {
    return (
        <MuiDocsForm
            schema={schema}
            defaultView="antd"
            jsx={`import MuiForms from "mui-forms";
import AntDAdapter from "@mui-forms-adapters/antd";
import schema from "./schema";

<MuiForms
    schema={schema}
    fieldMapper={AntDAdapter}
    onSubmit={handleSubmit}
/>`}
            onSubmit={() => {

            }}
        />
    );
}

export default AntdForms;
