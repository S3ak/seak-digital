import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { GenericComponent } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Scenes/Component",
  component: GenericComponent,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <GenericComponent initIsLoading />;

export const Base = () => (
  <GenericComponent>Text</GenericComponent>
);
