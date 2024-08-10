import React from "react";
import { useClient } from "@/common/hooks";
import MuiForms from "mui-forms";
import schema from "./schema.json";

const submitData = async (formData: any) => {
    return new Promise((resolve, reject) => {
        if (!formData.first_name || !formData.last_name) {
            reject(false);
        } else {
            resolve(true);
        }
    })
}

function FormWithServerSideErrorHandling() {
    const shouldRender = useClient();

    return shouldRender && (
        <MuiForms
            sectionLayout="tabs"
            schema={schema}
            useNextResponse={true}
            onNext={async (data, pageNumber, setErrors) => {
                try {
                    await submitData(data);
                    return true;
                } catch(error) {
                    setErrors([
                        {field: "first_name", hasError: true, errorMsg: "Both first and last name are required"},
                        {field: "last_name", hasError: true, errorMsg: "Both first and last name are required"},
                    ])
                    return false;
                }
            }}
            onSubmit={(data, pageNumber, setErrors) => {

            }}
        />
    );
}

export default FormWithServerSideErrorHandling;

