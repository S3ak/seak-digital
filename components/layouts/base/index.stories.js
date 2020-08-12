import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { BaseLayout } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Layouts/Base",
  component: BaseLayout,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Base = () => (
  <BaseLayout>Text</BaseLayout>
);
