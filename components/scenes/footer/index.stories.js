import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Footer } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Scenes/Footer",
  component: Footer,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <Footer initIsLoading />;

export const Base = () => (
  <Footer>Text</Footer>
);
