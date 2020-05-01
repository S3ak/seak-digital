import React from "react";
import { Wrapper, InnerCircle } from "./styled";

export const CTARound = ({ children }) => {
  return (
    <Wrapper>
      <InnerCircle>{children}</InnerCircle>
    </Wrapper>
  );
};

export default CTARound;
