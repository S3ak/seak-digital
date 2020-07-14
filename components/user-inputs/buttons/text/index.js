import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

export const BtnText = ({ children, handleOnAction, isDisabled }) => {
  return (
    <Wrapper onClick={handleOnAction} disabled={isDisabled}>
      {children}
    </Wrapper>
  );
};

BtnText.propTypes = {
  children: PT.node,
  handleOnAction: PT.func,
};

export default BtnText;
