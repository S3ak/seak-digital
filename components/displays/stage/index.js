import React from "react";

import { Wrapper } from "./styled";

export const stage = ({ children }) => {
  return <Wrapper className="c-stage_main">{children}</Wrapper>;
};

export default stage;
