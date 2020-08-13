import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Header } from "./index";

export default {
  title: "Displays/Header",
  component: Header,
  decorators: [withDesign],
};

const Template = (args) => <Header {...args} />;
export const Base = Template.bind({});

Base.storyName = "Header story";

Base.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/CX7dDpAdYurno3RCN7069J/Seak-digital-website?node-id=7693%3A79",
  },
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  ...Base.args,
  initIsLoading: true,
};
