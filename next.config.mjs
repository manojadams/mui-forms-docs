import Nextra from "nextra";
/* eslint-disable @typescript-eslint/no-var-requires */
const withNextra = Nextra({
  theme: "@manojadams/nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

export default withNextra({
  transpilePackages: [
    "antd",
    "@ant-design/cssinjs",
    "@ant-design/cssinjs-utils",
    "@ant-design/icons",
    "@rc-component/async-validator",
    "@rc-component/cascader",
    "@rc-component/checkbox",
    "@rc-component/collapse",
    "@rc-component/color-picker",
    "@rc-component/context",
    "@rc-component/dialog",
    "@rc-component/drawer",
    "@rc-component/dropdown",
    "@rc-component/form",
    "@rc-component/image",
    "@rc-component/input",
    "@rc-component/input-number",
    "@rc-component/mentions",
    "@rc-component/menu",
    "@rc-component/mini-decimal",
    "@rc-component/motion",
    "@rc-component/mutate-observer",
    "@rc-component/notification",
    "@rc-component/overflow",
    "@rc-component/pagination",
    "@rc-component/picker",
    "@rc-component/portal",
    "@rc-component/progress",
    "@rc-component/qrcode",
    "@rc-component/rate",
    "@rc-component/resize-observer",
    "@rc-component/segmented",
    "@rc-component/select",
    "@rc-component/slider",
    "@rc-component/steps",
    "@rc-component/switch",
    "@rc-component/table",
    "@rc-component/tabs",
    "@rc-component/tooltip",
    "@rc-component/tour",
    "@rc-component/tree",
    "@rc-component/tree-select",
    "@rc-component/trigger",
    "@rc-component/upload",
    "@rc-component/virtual-list",
    "@rc-component/util"
  ]
});
