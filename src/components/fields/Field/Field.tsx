import React from "react";
import MuiForms from "mui-forms";
// import { ISchema } from "@manojadams/metaforms-core";

interface IProps {
    schema: any;
}

function Field(props: IProps) {
    return (
        <MuiForms
            schema={props.schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default Field;
