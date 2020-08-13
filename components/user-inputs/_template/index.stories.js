import React from "react";

import { GenericComponent } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "User-inputs/Template",
  component: GenericComponent,
  parameters: { notes: componentNotes },
  argTypes: { handleOnAction: { action: "clicked" } },
};

const Template = (args) => <GenericComponent {...args} />;
export const Base = Template.bind({});
Base.args = {
  children: "Text",
};
