import { useEffect, useState } from "react";
import MuiForms from "mui-forms";
import productSchema from "./products.json";

const Products = () => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return shouldRender && (
        <MuiForms
            schema={productSchema}
            onSubmit={(data) => {
                // submit data
            }}
        />
    );
};

export default Products;
