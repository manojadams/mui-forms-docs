import React from "react";
import MuiForms from "mui-forms";
import schema from "./schema.json";
import Pie from "./Pie";
import { useClient } from "@/common/hooks";

function ScoreChart() {
    const render = useClient();

    return render && (
        <MuiForms
            controls={{
                piechart: <Pie />
            }}
            schema={schema}
            onSubmit={() => {
                // handle submit
            }}
        />
    );
}

export default ScoreChart;
