import React from "react";
import { FaAngleDown } from "react-icons/fa";

import Button from "../../user-inputs/buttons/base";

import { Wrapper, Title, Description } from "./styled";

export const IntroArticle = ({ children }) => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Description>
        In a time long ago, before the div tag and Flash ruled the web...
      </Description>

      {/* <Button kind="text" mode="primary" Icon={<FaAngleDown />}>
        Read More
      </Button> */}
    </Wrapper>
  );
};

export default IntroArticle;
