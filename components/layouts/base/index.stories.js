import React from "react";

import { BaseLayout } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Layouts/Base",
  component: BaseLayout,
  parameters: { notes: componentNotes },
};

const Template = (args) => <GenericComponent {...args} />;
export const Base = Template.bind({});
