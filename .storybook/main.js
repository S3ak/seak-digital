module.exports = {
  stories: [
    "../stories/**/*.stories.js",
    "../components/**/*/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
  ],
};
