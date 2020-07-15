import React from "react";

import { Wrapper, Item } from "./styled";

const titleSlideItems = [
  {
    label: "Digital",
    orderId: 1,
  },
  {
    label: "Design",
    orderId: 2,
  },
  {
    label: "Dev",
    orderId: 3,
  },
  {
    label: "Dj",
    orderId: 4,
  },
  {
    label: "Photo",
    orderId: 5,
  },
];

export const TitleSlider = ({ items = titleSlideItems }) => {
  return (
    <Wrapper>
      {items
        .sort((a, b) => a - b)
        .map((i) => (
          <Item key={i.orderId}>{i.label}</Item>
        ))}
    </Wrapper>
  );
};

export default TitleSlider;
