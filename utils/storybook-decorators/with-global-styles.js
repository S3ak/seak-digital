import React from "react";
import GlobalStyles from "../styles/global-styles";

export const WithGlobalStyling = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);

export default WithGlobalStyling;
