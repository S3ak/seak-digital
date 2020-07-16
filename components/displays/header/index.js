
import React from "react";

import BtnMenu from "../../user-inputs/buttons/menu";
import TitleSlider from "../../user-inputs/title-slider";
import Container from "../container";

import { Wrapper, Title, Subtitle, Spacer, SeakText, NameText } from "./styled";

export const Header = ({ children }) => {
  return (
    <Wrapper>
      <Title>
        <SeakText>Seak</SeakText> <TitleSlider />
      </Title>

      <Subtitle>
        <Container>
          <strong>UI</strong> is my tool.
          <Spacer />
          <strong>UX</strong> is my passion.<NameText>- Monde Sineke</NameText>
        </Container>
      </Subtitle>

      <div className="l-page_nav-position">
        <BtnMenu />
      </div>
    </Wrapper>
  );
};

export default Header;
