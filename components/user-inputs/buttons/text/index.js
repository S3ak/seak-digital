import React from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

export const BtnText = ({ children, handleOnAction }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper
      onClick={handleOnAction}
      isError={isError}
      isSuccess={isSuccess}
      isProcessing={isProcessing}
      disabled={isDisabled}
    >
      {children}
    </Wrapper>
  );
};

BtnText.propTypes = {
  children: PT.node,
  handleOnAction: PT.func,
};

export default BtnText;
