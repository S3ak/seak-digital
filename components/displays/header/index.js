import React from "react";

import BtnMenu from "../../user-inputs/buttons/menu";
import TitleSlider from "../../user-inputs/title-slider";
import Container from "../container";

import {
  Wrapper,
  Title,
  Subtitle,
  Spacer,
  SeakText,
  NameText,
  NavPosition,
} from "./styled";

/* Header component used as global header for website. This contains the user navigation(hamburger) component */
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

      <NavPosition className="l-page_nav-position">
        <BtnMenu />
      </NavPosition>
    </Wrapper>
  );
};

export default Header;
