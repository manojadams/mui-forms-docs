import Nextra from "nextra";
/* eslint-disable @typescript-eslint/no-var-requires */
const withNextra = Nextra({
  theme: "@manojadams/nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

export default withNextra();
