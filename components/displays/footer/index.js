import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { Wrapper, Copywright, IconLinkList, Item } from "./styled";

const socialLinkItems = [
  {
    label: "linkedin",
    orderId: 1,
    Icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nkululeko-monde-s-1620912b/",
  },
];

export const Footer = ({ items = socialLinkItems, children }) => {
  return (
    <Wrapper>
      <Copywright>Crafted with ♥ by Monde Sineke {children}</Copywright>

      <IconLinkList>
        {items.map(({ label, Icon, href }, orderId) => (
          <Item key={orderId} name={label} href={href}>
            {Icon}
          </Item>
        ))}
      </IconLinkList>
    </Wrapper>
  );
};

export default Footer;
