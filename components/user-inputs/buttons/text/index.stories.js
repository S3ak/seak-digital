import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { BtnText } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "User-inputs/buttons/text button",
  component: BtnText,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <GenericComponent initIsLoading />;

export const Base = () => (
  <GenericComponent handleOnAction={action("clicked")}>Text</GenericComponent>
);
