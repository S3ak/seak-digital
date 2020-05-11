import React from "react";
import { Wrapper, InnerCircle } from "./styled";

export const CTARound = ({ children, theme, mode, priority, onClick }) => {
  return (
    <Wrapper theme={theme} mode={mode} priority={priority} onClick={onClick}>
      <InnerCircle theme={theme} mode={mode}>
        {children}
      </InnerCircle>
    </Wrapper>
  );
};

export default CTARound;
