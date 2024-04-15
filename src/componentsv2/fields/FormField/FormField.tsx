import React from "react";
import MuiForms from "mui-forms";
import { useClient } from "@/common/hooks";

interface Props {
    schema: any;
}

function FormField(props: Props) {
    const shouldRender = useClient();

    return shouldRender && (
        <MuiForms
            schema={props.schema}
            onSubmit={() => {
                // TODO
            }}
        />
    );
};

export default FormField;
