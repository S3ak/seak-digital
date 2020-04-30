import React from "react";

import { Wrapper, Copywright, IconLinkList } from "./styled";

const socialLinkItems = [
  {
    label: "twitter",
    orderId: 1,
  },
  {
    label: "linkedin",
    orderId: 2,
  },
];

export const Footer = ({ items = socialLinkItems, children }) => {
  return (
    <Wrapper>
      <Copywright>Made with ♥ by Monde Sineke</Copywright>

      <IconLinkList>
        {items.map(({ name }) => (
          <div className="c-social-icon" key={name} name={name} />
        ))}
      </IconLinkList>
    </Wrapper>
  );
};

export default Footer;
