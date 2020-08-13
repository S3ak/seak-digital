import React from "react";

import { BtnText } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "User-inputs/buttons/text button",
  component: BtnText,
  parameters: { notes: componentNotes },
  argTypes: { handleOnAction: { action: "clicked" } },
};

const Template = (args) => <BtnText {...args} />;
export const Base = Template.bind({});
Base.args = {
  children: "Text",
};
