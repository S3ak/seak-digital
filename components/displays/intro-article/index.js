import React from "react";
import { FaAngleDown } from "react-icons/fa";

import Button from "../../user-inputs/buttons/base";

import { Wrapper, Title, Description } from "./styled";

export const IntroArticle = ({ children }) => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Description>
        Yo, I’m Monde Sineke and I ❤ design. A Multimedia Designer from Mzansi,
        currently working in Cape Town. Interested in working together? Feel
        free to contact me for any project or collaboration. I’ve worked on
        projects for Yoco, SameWave, Nomanini…
      </Description>

      {/* <Button kind="text" mode="primary" Icon={<FaAngleDown />}>
        Read More
      </Button> */}
    </Wrapper>
  );
};

export default IntroArticle;
