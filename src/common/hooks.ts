import { useEffect, useState } from "react"

export const useClient = () => {
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return shouldRender;
}