import React, { useState } from "react";
import PT from "prop-types";
import { Wrapper, Header, Body, Footer } from "./styled";

import Skeleton from "./Skeleton";

export const GenericComponent = ({ children, handleOnAction }) => {
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper onClick={handleOnAction}>
      <Header>head</Header>
      <Body>{children}</Body>
      <Footer>foot</Footer>
    </Wrapper>
  );
};

GenericComponent.propTypes = {
  children: PT.node,
  handleOnAction: PT.func,
};

export default GenericComponent;
