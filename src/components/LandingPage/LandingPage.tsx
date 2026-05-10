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

const bodyStyles = {
    maxWidth: "90rem",
    margin: "60px auto auto auto",
    padding: "0 20px"
};

const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    thead {
        background: linear-gradient(90deg, #6b7280 0%, #111111 100%);
        color: #ffffff;

        th {
            padding: 20px;
            text-align: left;
            font-weight: 700;
            font-size: 16px;
            border: none;
            background: transparent;
        }
    }

    tbody {
        tr {
            transition: background-color 0.2s ease, transform 0.2s ease;
            border-bottom: 1px solid #e5e7eb;

            &:hover {
                background-color: rgba(60, 132, 206, 0.05);
            }

            &:nth-child(even) {
                background-color: #f9fafb;
            }

            &:last-child {
                background-color: #f3f4f6 !important;

                td {
                    padding: 30px 20px !important;
                    vertical-align: top;
                }
            }

            td {
                padding: 18px 20px;
                font-size: 16px;
                line-height: 1.6;
                color: #374151;

                &:last-child {
                    font-weight: 500;
                    color: #dc2626;
                }

                &:first-child {
                    color: #059669;
                    font-weight: 500;
                }

                pre {
                    background-color: #1f2937;
                    color: #f3f4f6;
                    padding: 15px;
                    border-radius: 6px;
                    overflow-x: auto;
                    font-size: 11px;
                    line-height: 1.5;
                    margin: 10px 0 0 0;
                    border: 1px solid #374151;

                    code {
                        color: #f3f4f6;
                        font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
                    }
                }

                .code-label {
                    display: inline-block;
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;

                    &.traditional {
                        background-color: #fee2e2;
                        color: #991b1b;
                    }

                    &.muiforms {
                        background-color: #dcfce7;
                        color: #166534;
                    }
                }

                .code-title {
                    font-size: 13px;
                    font-weight: 600;
                    margin: 8px 0;

                    &.traditional {
                        color: #dc2626;
                    }

                    &.muiforms {
                        color: #059669;
                    }
                }
            }
        }

        tr:last-child {
            border-bottom: none;
        }
    }

    @media (max-width: 768px) {
        display: block;
        box-shadow: none;
        background: transparent;

        thead {
            display: none;
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 16px;

            tr {
                display: flex;
                flex-direction: column;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                overflow: hidden;
                background: white;

                &:last-child {
                    background: white !important;
                }

                td {
                    display: block;
                    width: 100%;
                    padding: 14px 16px;
                    border-bottom: 1px solid #e5e7eb;

                    &::before {
                        content: attr(data-label);
                        display: block;
                        margin-bottom: 8px;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        color: #6b7280;
                    }

                    &:last-child {
                        border-bottom: none;
                    }
                }
            }

            tr:last-child td {
                padding: 18px 16px !important;
            }
        }
    }
`;

const WhyMuiFormsSection = styled.div`
    h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #111111;
        text-align: center;
    }

    > p {
        font-size: 16px;
        color: #6b7280;
        margin-bottom: 30px;
        line-height: 1.6;
        text-align: center;
    }
`;

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
                                <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '30px', lineHeight: '1.6', textAlign: 'center', maxWidth: '600px', margin: '20px auto 30px' }}>
                                    Build dynamic, interactive forms with JSON schemas. Reduce boilerplate code by up to 90% and ship faster without sacrificing flexibility or power.
                                </p>
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
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <p style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>👇 Try it yourself – This form is built entirely from a JSON schema</p>
                                </div>
                                <LandingPageForm />
                            </div>
                        </div>
                    </Box>
                </section>
                <section id="why-muiforms">
                    <div style={bodyStyles}>
                        <WhyMuiFormsSection>
                            <h2>Why Use MuiForms?</h2>
                            <p>See the dramatic difference in productivity and code quality. With MuiForms, you describe your form once in JSON and get validation, responsive design, and dynamic behavior—all automatically.</p>
                            <ComparisonTable>
                                <thead>
                                    <tr>
                                        <th>With MuiForms</th>
                                        <th>Without MuiForms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="With MuiForms">JSON schema defines forms with 90% less code, no state management</td>
                                        <td data-label="Without MuiForms">Manual state management creates boilerplate code and bugs</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Reusable schemas for consistent forms across apps</td>
                                        <td data-label="Without MuiForms">Repetitive JSX increases development time and maintenance</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Built-in schema validation, easy to reuse and customize</td>
                                        <td data-label="Without MuiForms">Validation logic scattered and hard to reuse</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Built-in responsive layouts with Material-UI</td>
                                        <td data-label="Without MuiForms">Complex layouts need additional CSS or libraries</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Easy API integration for dynamic options</td>
                                        <td data-label="Without MuiForms">Dynamic fields need custom API implementation</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Built-in responsive design and styling</td>
                                        <td data-label="Without MuiForms">Limited responsiveness without deep MUI knowledge</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Conditional fields handled via schema config</td>
                                        <td data-label="Without MuiForms">Conditional logic requires complex state checks</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">Full TypeScript with inferred types</td>
                                        <td data-label="Without MuiForms">TypeScript support is manual and error-prone</td>
                                    </tr>
                                    <tr>
                                        <td data-label="With MuiForms">
                                            <span className="code-label muiforms">Code Example</span>
                                            <div className="code-title muiforms">MuiForms</div>
                                            <pre><code>{`// Simple JSON schema
const schema = {
  fields: [
    {
      name: "firstName",
      meta: {
        displayName: "First Name",
        displayType: "text",
        validation: {
          required: true
        }
      }
    },
    {
      name: "email",
      meta: {
        displayName: "Email",
        displayType: "email",
        validation: {
          required: true,
          pattern: {
            value: "^[^@]+@[^@]+\\.[^@]+$",
            errorMsg: "Invalid"
          }
        }
      }
    },
    {
      name: "password",
      meta: {
        displayName: "Password",
        displayType: "password",
        validation: {
          required: true,
          minLength: {
            value: 8,
            errorMsg: "Min 8 chars"
          }
        }
      }
    }
  ]
};

// Component
<MuiForms 
  schema={schema} 
  onSubmit={(data) => console.log(data)}
/>`}</code></pre>
                                        </td>
                                        <td data-label="Without MuiForms">
                                            <span className="code-label traditional">Code Example</span>
                                            <div className="code-title traditional">Traditional React</div>
                                            <pre><code>{`// 70+ lines of boilerplate
function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return email.match(/^[^@]+@[^@]+\\.[^@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!firstName.trim()) 
      newErrors.firstName = 'Required';
    if (!validateEmail(email)) 
      newErrors.email = 'Invalid';
    if (password.length < 8) 
      newErrors.password = 'Min 8 chars';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ firstName, email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField 
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        error={!!errors.firstName}
        helperText={errors.firstName}
        styles={{
            marginBottom: '20px'
            marginTop: '20px'
            marginRight: '20px'
        }}
        fullWidth
      />
      {/* More fields... */}
    </Box>
  );
}`}</code></pre>
                                        </td>
                                    </tr>
                                </tbody>
                            </ComparisonTable>
                        </WhyMuiFormsSection>
                    </div>
                </section>
                <section>
                    <div style={bodyStyles}>
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
                                        <span>Full Material UI Components support</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Create custom field components</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Define field dependencies & relationships</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={"mcol " + css.features_column}>
                                <ul>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Material Design icons integration</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Load dynamic options from APIs</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Smart responsive layouts</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Mobile-first design</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={"mcol " + css.features_column}>
                                <ul>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Production-ready out of the box</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Full TypeScript support</span>
                                    </li>
                                    <li>
                                        <ArrowRightAltIcon />
                                        <span>Extensible and customizable</span>
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
