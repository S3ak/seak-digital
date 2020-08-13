import React from "react";

import { Accordion } from "./index";

export default {
  title: "User-inputs/Accordion",
  component: Accordion,
  argTypes: { handleOnAction: { action: "clicked" } },
};

const Template = (args) => <Accordion {...args} />;
export const Base = Template.bind({});
export const Skeleton = Template.bind({});
Skeleton.args = {
  ...Base.args,
  initIsLoading: true,
};
