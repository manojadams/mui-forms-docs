import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import { useClient } from "@/common/hooks";

interface IProps {
    gapX?: number;
    gapY?: number;
}

const SpacingForm = (props: IProps) => {
    const render = useClient();

    return render && (
        <div>
            <MuiForms
                config={{
                    gapX: props.gapX,
                    gapY: props.gapY
                }}
                schema={schema}
                onSubmit={(formData) => {
                    // TO DO
                }}
            />
        </div>
    );
};

export default SpacingForm;
