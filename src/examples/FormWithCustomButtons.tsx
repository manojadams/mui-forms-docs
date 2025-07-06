import React, { useEffect, useState } from "react";
import MuiForms from "mui-forms";
import schema from "@/components/LandingPage/schema.json";

const FormWithCustomButtons = () => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return shouldRender && (
        <MuiForms
            buttons={{
                submit: <button style={{color: "white"}}>Save</button>
            }}
            schema={schema}
            onSubmit={() => {
                // submit
            }}
        />
    )
};

export default FormWithCustomButtons;
