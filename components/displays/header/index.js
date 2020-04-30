import React from "react";

import BtnMenu from "../../user-inputs/buttons/menu";
import TitleSlider from "../../user-inputs/title-slider";

import { Wrapper, Title, Subtitle, Spacer } from "./styled";

const titleSlideItems = [
  {
    title: "Digital",
    orderId: 1,
  },
  {
    title: "Design",
    orderId: 2,
  },
  {
    title: "Dev",
    orderId: 3,
  },
  {
    title: "Dj",
    orderId: 4,
  },
  {
    title: "Photo",
    orderId: 5,
  },
];

export const Header = ({ items = titleSlideItems, children }) => {
  return (
    <Wrapper>
      <Title>
        Seak <TitleSlider items={items} />
      </Title>

      <Subtitle>
        <span>UI</span> is my tool.
        <br className="c-header_spacer" />
        <span>UX</span> is my passion.
      </Subtitle>

      <div className="l-page_nav-position">
        <BtnMenu />
      </div>
    </Wrapper>
  );
};

export default Header;
