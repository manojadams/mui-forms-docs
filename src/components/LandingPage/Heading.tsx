import React from "react";
import styled from "@emotion/styled";

function Heading() {
    return (
        <HeadingStyled>
            Create 
            <br />
            Advanced
            <br />
            <span className="black">Material forms </span>
        </HeadingStyled>
    );
}

const HeadingStyled = styled.h2`
    font-size: 48px;
    font-weight: bold;
    text-align: center;
`;

export default Heading;
