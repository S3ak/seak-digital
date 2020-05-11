import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { withKnobs, select } from "@storybook/addon-knobs";

import { CTARound } from "./index";

export default {
  title: "buttons/cta",
  component: CTARound,
  decorators: [withKnobs],
};

const kindOptions = {
  text: "text",
};

// FIXME: Not real def
const themeOptions = {
  default: "default",
  inverse: "inverse",
};

export const Button = () => (
  <CTARound
    kind={select("kinds", kindOptions, "default")}
    theme={select("kinds", themeOptions, "primary")}
  >
    <FaAngleDown />
  </CTARound>
);
