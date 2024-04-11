import MuiForms from "mui-forms";
import React from "react";
import schema from "./schema.json";
import Bar from "./Bar";
import { useClient } from "@/common/hooks";

function InteractiveScoreChart() {
    const render = useClient();
    
    return render && (
        <MuiForms
            components={{
                barchart: Bar
            }}
            schema={schema}
            onSubmit={() => {
                // to do
            }}
        />
    );
}

export default InteractiveScoreChart;
