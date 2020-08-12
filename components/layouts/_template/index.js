import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

export const GenericLayout = ({ children }) => {
  return (
    <Wrapper>
    </Wrapper>
  );
};

GenericLayout.propTypes = {
  children: PT.node,
};

export default GenericLayout;
