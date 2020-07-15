import React, { useState } from "react";
import PT from "prop-types";

import { Wrapper } from "./styled";
import Skeleton from "./Skeleton";

export const Header = ({ children }) => {
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

Header.propTypes = {
  children: PT.node,
};

export default Header;
