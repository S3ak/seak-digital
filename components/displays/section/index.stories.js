import React from "react";

import { Section } from "./index";

export default {
  title: "Displays/Section",
  component: Section,
};

const Template = (args) => <Section {...args} />;
export const Base = Template.bind({});
Base.args = {
  children: "Text",
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  ...Base.args,
  initIsLoading: true,
};
