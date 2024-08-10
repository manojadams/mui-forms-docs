import { useClient } from "@/common/hooks";
import { ISchema } from "@manojadams/metaforms-core";
import MuiForms from "mui-forms";
import React from "react";

interface Props {
    schema: ISchema;
}

function Form(props: Props) {
    const shouldRender = useClient();

    return shouldRender && (
        <MuiForms schema={props.schema} onSubmit={() => {}} />
    )
}

export default Form;
