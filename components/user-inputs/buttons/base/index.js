import React from "react";

import { Wrapper } from "./styled";

export const Button = ({ children, kind, Icon }) => {
  return (
    <Wrapper>
      {children} {Icon}
    </Wrapper>
  );
};

export default Button;
