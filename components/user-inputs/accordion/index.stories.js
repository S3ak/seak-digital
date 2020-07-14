import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "User-inputs/Accordion",
  component: Accordion,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <Accordion />;

export const Base = () => (
  <Accordion handleOnAction={action("clicked")}>Text</Accordion>
);
