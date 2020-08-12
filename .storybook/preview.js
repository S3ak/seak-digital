import React from "react";
import { addDecorator } from "@storybook/react";
import WithGlobalStyles from "../utils/storybook-decorators/with-global-styles";

addDecorator((story) => (
  <div>
    <WithGlobalStyles />
    <story />
  </div>
));
