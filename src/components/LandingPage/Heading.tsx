import React from "react";
import styled from "@emotion/styled";

function Heading() {
    return (
        <HeadingStyled>
            Create 
            <br />
            Advanced
            <br />
            <span>Material Forms </span>
        </HeadingStyled>
    );
}

const HeadingStyled = styled.h2`
    color: #fff;
    margin-top: 30px;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    line-height: 1.3em;
    @media (max-width: 576px) {
        font-size: 36px;
    }
`;

export default Heading;
