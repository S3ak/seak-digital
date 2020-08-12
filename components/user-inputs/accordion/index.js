import React, { useState } from "react";
import PT from "prop-types";
import { Wrapper, Body, Footer } from "./styled";
import ButtonText from "../buttons/text";

import Skeleton from "./Skeleton";

/**
 * `Accordion` component used to hide and show content
 */

export const Accordion = ({ children, initIsLoading, handleOnAction }) => {
  const [isLoading] = useState(initIsLoading);
  const [isError] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper id="some-selector" onClick={handleOnAction}>
      <Body>{children}</Body>

      <Footer>
        <ButtonText>More</ButtonText>
      </Footer>
    </Wrapper>
  );
};

Accordion.propTypes = {
  children: PT.node,
  initIsLoading: PT.bool /* comment for this prop */,
  handleOnAction: PT.func,
};

export default Accordion;
