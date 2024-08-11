import React from "react";
import examples from "@/components/examples/examples.json";
import dynamic from "next/dynamic";

const ExampleListComponent = dynamic(() => import("@/components/Cards"));

const LandingPageExample = () => {
    return (
        <ExampleListComponent examples={examples} title="Examples" />
    )
}

export default LandingPageExample;
