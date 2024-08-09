import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
    examples: Array<{ title: string; img: string; href: string }>;
    title: string;
}
function Cards(props: IProps) {
    const router = useRouter();
    return (
        <Wrapper>
            <h2 className="title">{props.title}</h2>
            <hr />
            <CardWrapper>
                {props.examples.map((example) => (
                    <Card
                        key={example.title}
                        title={example.title}
                        img={example.img}
                        handleClick={() => {
                            router.push(example.href);
                        }}
                    />
                ))}
            </CardWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .title {
        font-size: 48px;
        text-align: center;
        @media (max-width: 576px) {
            font-size: 36px;
        }
    }
    hr {
        margin-bottom: 40px;
    }
`;
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 50px;
    margin: 20px 0;
`;

export default Cards;
