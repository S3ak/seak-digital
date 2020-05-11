import React from "react";

export const ButtonMenu = ({ items = [] }) => {
  return (
    <span>
      {items.map((i) => (
        <span>{i.label}</span>
      ))}
    </span>
  );
};

export default ButtonMenu;
