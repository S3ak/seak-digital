import React from "react";

export const TitleSlider = ({ items = [] }) => {
  return (
    <span>
      {items.map((i) => (
        <span>{i.label}</span>
      ))}
    </span>
  );
};

export default TitleSlider;
