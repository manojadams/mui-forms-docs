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
            <br />
            <span className="small-text">{"{with JSON schema}"}</span>
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
    .small-text {
        font-size: 24px;
    }
    @media (max-width: 576px) {
        font-size: 36px;
        .small-text {
            font-size: 18px;
        }
    }
`;

export default Heading;
