import { useClient } from "@/common/hooks";
import SchemaViewer from "@/components/SchemaViewer";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HtmlOutlinedIcon from "@mui/icons-material/HtmlOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Tooltip from "@mui/material/Tooltip";
import AntDAdapter from "@mui-forms-adapters/antd";
import NativeAdapter from "@mui-forms-adapters/native";
import MuiForms from "mui-forms";
import type { IMuiFormRendererProps, TFieldMapper } from "mui-forms";
import React, { useState } from "react";
import styles from "./style.module.css";

export const FORM_TYPE = {
    mui: "mui",
    antd: "antd",
    native: "native"
} as const;

type FormType = (typeof FORM_TYPE)[keyof typeof FORM_TYPE];
type View = FormType | "schema" | "jsx";
type ForwardedMuiFormsProps = Partial<Omit<IMuiFormRendererProps, "schema" | "fieldMapper" | "onSubmit">>;

interface Props {
    title?: string;
    schema: IMuiFormRendererProps["schema"];
    defaultView?: View;
    fieldMapper?: TFieldMapper;
    jsx?: string;
    muiFormsProps?: ForwardedMuiFormsProps;
    onSubmit?: IMuiFormRendererProps["onSubmit"];
}

function getDefaultJsx(hasFieldMapper: boolean) {
    return `<MuiForms
    schema={schema}${hasFieldMapper ? "\n    fieldMapper={fieldMapper}" : ""}
    onSubmit={handleSubmit}
/>`;
}

function getFieldMapper(view: View, fieldMapper?: TFieldMapper) {
    if (view === FORM_TYPE.antd) {
        return AntDAdapter;
    }

    if (view === FORM_TYPE.native) {
        return NativeAdapter;
    }

    return fieldMapper;
}

function MuiDocsForm(props: Props) {
    const shouldRender = useClient();
    const [view, setView] = useState<View>(props.defaultView ?? FORM_TYPE.mui);
    const jsx = props.jsx ?? getDefaultJsx(Boolean(props.fieldMapper));
    const isFormView = view === FORM_TYPE.mui || view === FORM_TYPE.antd || view === FORM_TYPE.native;

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.toolbar} aria-label="Example view">
                <div className={styles.buttonGroup}>
                    <Tooltip title="Mui forms">
                        <button
                            type="button"
                            className={view === FORM_TYPE.mui ? styles.activeButton : styles.button}
                            aria-label="Show Mui forms"
                            aria-pressed={view === FORM_TYPE.mui}
                            onClick={() => setView(FORM_TYPE.mui)}
                        >
                            <WidgetsOutlinedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                    <Tooltip title="Ant forms">
                        <button
                            type="button"
                            className={view === FORM_TYPE.antd ? styles.activeButton : styles.button}
                            aria-label="Show Ant forms"
                            aria-pressed={view === FORM_TYPE.antd}
                            onClick={() => setView(FORM_TYPE.antd)}
                        >
                            <DesignServicesOutlinedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                    <Tooltip title="Native forms">
                        <button
                            type="button"
                            className={view === FORM_TYPE.native ? styles.activeButton : styles.button}
                            aria-label="Show native forms"
                            aria-pressed={view === FORM_TYPE.native}
                            onClick={() => setView(FORM_TYPE.native)}
                        >
                            <HtmlOutlinedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                </div>
                <div className={styles.buttonGroup}>
                    <Tooltip title="Schema">
                        <button
                            type="button"
                            className={view === "schema" ? styles.activeButton : styles.button}
                            aria-label="Show schema"
                            aria-pressed={view === "schema"}
                            onClick={() => setView("schema")}
                        >
                            <DataObjectOutlinedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                    <Tooltip title="JSX">
                        <button
                            type="button"
                            className={view === "jsx" ? styles.activeButton : styles.button}
                            aria-label="Show JSX"
                            aria-pressed={view === "jsx"}
                            onClick={() => setView("jsx")}
                        >
                            <CodeOutlinedIcon fontSize="small" />
                        </button>
                    </Tooltip>
                </div>
            </div>

            <div className={styles.content}>
                {
                    view === FORM_TYPE.mui && (
                        <MuiForms
                            {...props.muiFormsProps}
                            schema={props.schema}
                            onSubmit={props.onSubmit ?? (() => {})}
                        />
                    )
                }
                {
                    view === FORM_TYPE.antd && (
                        <MuiForms
                            {...props.muiFormsProps}
                            schema={props.schema}
                            formAdapter={AntDAdapter}
                            adapterConfig={{
                                layout: "vertical"
                            }}
                            onSubmit={props.onSubmit ?? (() => {})}
                        />
                    )
                }
                {
                    view === FORM_TYPE.native && (
                        <MuiForms
                            {...props.muiFormsProps}
                            schema={props.schema}
                            formAdapter={NativeAdapter}
                            onSubmit={props.onSubmit ?? (() => {})}
                        />
                    )
                }
                {view === "schema" ? (
                    <SchemaViewer value={props.schema} />
                ) : (
                    <pre className={styles.codeBlock}>
                        <code>{jsx}</code>
                    </pre>
                )}
            </div>
        </div>
    );
}

export default MuiDocsForm;
