import React, { useState } from "react";

import Accordion from "../../user-inputs/accordion";

import { Wrapper, Title, Description } from "./styled";

export const IntroArticle = ({ children }) => {
  const [isExpandedContentVisible] = useState(false);
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Description>
        <Accordion>
          Yo, I’m Monde Sineke and I ❤ design. A Multimedia Designer from
          Mzansi, currently working in Cape Town. Interested in working
          together? Feel free to contact me for any project or collaboration.
          I’ve worked on projects for Yoco, SameWave, Nomanini…
        </Accordion>
      </Description>
    </Wrapper>
  );
};

export default IntroArticle;
