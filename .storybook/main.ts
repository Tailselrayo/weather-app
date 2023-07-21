import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path")
const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(tsx|ts)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config!.resolve!.alias = {
      ...config.resolve?.alias, 
      "@/utils": path.resolve(__dirname, "../utils"),
    } 
    return config
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
