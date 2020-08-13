module.exports = {
  stories: [
    "../stories/**/*.stories.@(ts|js)",
    "../components/**/*/*.stories.@(ts|js)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "storybook-addon-designs",
  ],
};
