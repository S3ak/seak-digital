import React from "react";

import { GenericComponent } from "./index";

export default {
  title: "Displays/Template",
  component: GenericComponent,
};

const Template = (args) => <GenericComponent {...args} />;
export const Base = Template.bind({});
export const Skeleton = Template.bind({});
Skeleton.args = {
  ...Base.args,
  initIsLoading: true,
};
