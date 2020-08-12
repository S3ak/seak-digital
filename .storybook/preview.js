import React from "react";
import WithGlobalStyles from "../utils/storybook-decorators/with-global-styles";

export const decorators = [
  (Story) => (
    <div>
      <WithGlobalStyles />
      <Story />
    </div>
  ),
];
