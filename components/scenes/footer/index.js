import React, { useState } from "react";
import PT from "prop-types";
import { Wrapper } from "./styled";

import Skeleton from "./Skeleton";

export const Footer = ({ children }) => {
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return <Wrapper>{children}</Wrapper>;
};

Footer.propTypes = {
  children: PT.node,
};

export default Footer;
