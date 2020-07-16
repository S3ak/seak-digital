import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { GenericComponent } from "./index";

export default {
  title: "Displays/Template",
  component: GenericComponent,
  decorators: [withKnobs],
};

export const Skeleton = () => <GenericComponent initIsLoading />;

export const Base = () => <GenericComponent>Text</GenericComponent>;
