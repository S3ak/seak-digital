import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Section } from "./index";
import componentNotes from "./read-me.md";

export default {
  title: "Scenes/Component",
  component: Section,
  decorators: [withKnobs],
  parameters: { notes: componentNotes },
};

export const Skeleton = () => <Section initIsLoading />;

export const Base = () => <Section>Text</Section>;
