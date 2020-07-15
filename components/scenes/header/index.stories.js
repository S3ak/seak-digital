import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Header } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Scenes/Header",
  component: Header,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <Header initIsLoading />;

export const Base = () => (
  <Header>Text</Header>
);
