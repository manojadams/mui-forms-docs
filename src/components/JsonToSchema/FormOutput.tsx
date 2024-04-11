import React from "react";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";
import { ISchema } from "@manojadams/metaforms-core";

interface IProps {
    schema: ISchema;
}
function FormOutput(props: IProps) {
    const render = useClient();

    return render && (
        <MuiForms
            schema={props.schema}
            onSubmit={() => {
                // handle submit
            }}
        />
    );
}

export default FormOutput;
