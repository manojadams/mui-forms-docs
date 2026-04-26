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
                font-size: 14px;
                line-height: 1.6;
                color: #374151;

                &:first-child {
                    font-weight: 500;
                    color: #dc2626;
                }

                &:last-child {
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
                <section id="why-muiforms">
                    <div style={bodyStyles}>
                        <WhyMuiFormsSection>
                            <h2>Why Use MuiForms?</h2>
                            <p>Compare traditional form development with MuiForms to understand the huge difference in productivity and code quality.</p>
                            <ComparisonTable>
                                <thead>
                                    <tr>
                                        <th>Without MuiForms</th>
                                        <th>With MuiForms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Without MuiForms">Manual state management for each field, leading to boilerplate code and potential bugs</td>
                                        <td data-label="With MuiForms">Declarative JSON schema defines the entire form, reducing code by up to 90% and state management not required</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">Repetitive JSX for form elements, increasing development time and maintenance overhead</td>
                                        <td data-label="With MuiForms">Reusable schemas for consistent forms across applications</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">Custom validation logic scattered across components, hard to reuse and test</td>
                                        <td data-label="With MuiForms">Built-in validation logic within the JSON schema, easy to reuse and test and custom validations</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">No built-in support for complex layouts, requiring additional CSS or layout libraries</td>
                                        <td data-label="With MuiForms">Out-of-the-box responsive layouts and Material-UI styling</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">API integration for dynamic fields (e.g., dropdowns) needs custom implementation</td>
                                        <td data-label="With MuiForms">Easy API integration for dynamic options and data loading</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">Limited responsiveness and styling consistency without deep MUI knowledge</td>
                                        <td data-label="With MuiForms">Built-in responsive design and Material-UI styling</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">Difficult to implement conditional logic, often requiring complex state checks</td>
                                        <td data-label="With MuiForms">Conditional fields and dependencies handled via schema configuration</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Without MuiForms">TypeScript support is manual, prone to errors in form data typing</td>
                                        <td data-label="With MuiForms">Full TypeScript support with inferred types from schemas</td>
                                    </tr>
                                    <tr>
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
