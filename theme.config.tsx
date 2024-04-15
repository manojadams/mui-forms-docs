import React from "react";
import { DocsThemeConfig, useConfig } from "@manojadams/nextra-theme-docs";
import Footer from "./src/components/LandingPage/Footer";
import Search from "@/components/Search";

const config: DocsThemeConfig = {
    logo: (
        <div className="logo-wrapper">
            <img className="mf-logo" src="/logos/logo.png" width="60" />
        </div>
    ),
    project: {
        link: "https://github.com/manojadams/mui-forms"
    },
    docsRepositoryBase: "https://github.com/manojadams/mui-forms/tree/docs/docs",
    footer: {
        text: "© Copyright 2023 MUI forms",
        component: Footer
    },
    nextThemes: {
        defaultTheme: "light"
    },
    darkMode: false,
    banner: {
        key: '2.0-release',
        text: (
          <a href="/release-v2" target="_blank">
            🎉 MuiForms 2.0 is released. Read more →
          </a>
        )
    },
    versions: [{
        name: "version1",
        dir: "v1"
    }],
    head: () => {
        const { title } = useConfig();
        return (
            <>
                <title>{title} - Mui Forms</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={title ?? "Mui Forms"} />
                <meta property="title" content={title ?? "Mui Forms"} />
                <meta property="og:description" content="Create dynamic react forms" />
                <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
                <meta name="keywords" content="react, forms, mui-forms, material-forms" />
                <link rel="manifest" href="/favicon/manifest.json" />
            </>
        );
    }
};

export default config;
