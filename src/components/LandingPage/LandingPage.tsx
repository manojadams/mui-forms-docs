import React, { useEffect } from "react";
import css from "./style.module.css";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Footer from "./Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Head from "next/head";
import { Row } from "layout-emotions";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { GitHubIcon } from "nextra/icons";
import Heading from "./Heading";
import { useClient } from "@/common/hooks";
import LandingPageForm from "./LandingPageForm";

interface IProps {
    children: JSX.Element;
}
function LandingPage(props: IProps) {
    const router = useRouter();
    const shouldRender = useClient();

    useEffect(() => {
        if (router.isReady) {
            router.prefetch("/getting-started");
        }
    }, [router]);
    return (
        <>
            <Head>
                <title>Mui Forms - Create dynamic forms</title>
            </Head>
            <div className={`${css.wrapper}`}>
                <section>
                    <Box>
                        <div className={css.main_content}>
                            <div className={css.main_content_heading}>
                                <Heading />
                                <div className={css.text_block}>
                                    <div className={css.get_started_block}>
                                        <Button
                                            className="bg-primary border-24"
                                            variant="contained"
                                            size="large"
                                            onClick={() => {
                                                router.push("/getting-started");
                                            }}
                                        >
                                            Get Started &nbsp;
                                            <ArrowForwardIcon />
                                        </Button>
                                    </div>
                                    <div className="text-center">
                                        <Button className="border-24" size="large">
                                            <GitHubIcon
                                                style={{
                                                    marginRight: "8px"
                                                }}
                                            />
                                            <a href="https://github.com/manojadams/mui-forms">Star us at github</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={css.card_wrapper}>
                                <LandingPageForm />
                            </div>
                        </div>
                    </Box>
                </section>
                <section>
                    <div style={{
                        maxWidth: "90rem",
                        margin: "60px auto auto auto",
                        padding: "0 20px"
                    }}>
                        {props.children}
                    </div>
                </section>
                <section>
                    <div className={css.features}>
                        <h2 className={css.features_title}>Key Features</h2>
                        <hr className={css.features_divider} />
                        <Row className={css.features_row}>
                            <div className={"mcol " + css.features_column}>
                                <ul>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="https://mui.com/material-ui/getting-started/supported-components/">
                                            Material UI Components
                                        </a>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="/custom-fields/about">Custom components</a>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="/field-dependencies/about">Easily define field relationships</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={"mcol " + css.features_column}>
                                <ul>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="/fields/select-field#how-to-load-options-from-remote-api">
                                            Material icons support
                                        </a>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="/fields/select-field#how-to-load-options-from-remote-api">
                                            Load data from API
                                        </a>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <a href="/layouting/about">Built-in layouting</a>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Responsive</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={"mcol " + css.features_column}>
                                <ul>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Production ready</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Mobile ready</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Extensible</span>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: row;
`;

export default LandingPage;
