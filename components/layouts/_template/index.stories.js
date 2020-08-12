import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { GenericLayout } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Layouts/Component",
  component: GenericLayout,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Base = () => (
  <GenericLayout>Text</GenericLayout>
);
