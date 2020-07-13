import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { GenericComponent } from "./index";

export default {
  title: "Generic/Component",
  component: Component,
  decorators: [withKnobs],
};

export const Base = () => (
  <GenericComponent handleOnAction={action("clicked")}>Text</GenericComponent>
);
