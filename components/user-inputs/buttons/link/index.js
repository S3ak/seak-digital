import React from "react";
import { Wrapper } from "./styled";

export const LinkButton = ({ children, theme }) => {
  return <Wrapper theme={theme}>{children}</Wrapper>;
};

export default LinkButton;
