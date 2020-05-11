import React from "react";
import { Wrapper } from "./styled";

export const Link = ({ children, href }) => {
  return <Wrapper href={href}>{children}</Wrapper>;
};

export default Link;
