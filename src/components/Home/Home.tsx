import React from "react";
import MuiForms from "mui-forms";
import schema from "./../examples/RegistrationForm/schema.json";
import { useClient } from "@/common/hooks";

function Home() {
    const render = useClient();

    return render && (
        <MuiForms
            schema={schema}
            onSubmit={() => {
                // handle submit
            }}
        />
    );
}

export default Home;
