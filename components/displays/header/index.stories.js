import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import { Header } from "./index";

export default {
  title: "Displays/Header",
  component: Header,
  decorators: [withKnobs, withDesign],
};

export const Base = () => <Header>Text</Header>;

export const Skeleton = () => <Header initIsLoading />;

Base.story = {
  name: "Header story",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/CX7dDpAdYurno3RCN7069J/Seak-digital-website?node-id=7693%3A79",
    },
  },
};
