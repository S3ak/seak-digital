import React from "react";

import { Wrapper } from "./styled";

export const stage = ({ children, hasTopOffset, isInverse }) => {
  return (
    <Wrapper
      className="c-stage_main"
      hasTopOffset={hasTopOffset}
      isInverse={isInverse}
    >
      {children}
    </Wrapper>
  );
};

export default stage;
