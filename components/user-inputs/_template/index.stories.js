import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { GenericComponent } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Generic/Component",
  component: GenericComponent,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <GenericComponent initIsLoading />;

export const Base = () => (
  <GenericComponent handleOnAction={action("clicked")}>Text</GenericComponent>
);
