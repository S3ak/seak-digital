import React from "react";
import { Wrapper, InnerCircle } from "./styled";

export const CTARound = ({ children, theme }) => {
  return (
    <Wrapper theme={theme}>
      <InnerCircle theme={theme}>{children}</InnerCircle>
    </Wrapper>
  );
};

export default CTARound;
