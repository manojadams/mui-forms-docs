
import React from "react";
import MuiForms from "mui-forms";
import { ISchema } from "@manojadams/metaforms-core";
import { useClient } from "@/common/hooks";

interface Props {
    schema: ISchema;
}

const ExampleComponent = (props: Props) => {
    const render = useClient();

    return render && (
        <MuiForms
            schema={props.schema}
            onSubmit={() => {
                // TODO
            }}
        />
    );
};

export default ExampleComponent;
