import React from "react";
import PT from "prop-types";
import { ThemeProvider } from "styled-components";

import { Layout, HeaderSection, MainSection, FooterSection } from "./styled";

import Header from "../../displays/header";
import Footer from "../../displays/footer";
import Stage from "../../displays/stage";

import theme from "../../../utils/styles/tokens";

export const BaseLayout = ({
  children,
  HeaderContent = Header,
  FooterContent = Footer,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HeaderSection className="l-page_header">
          <HeaderContent />
        </HeaderSection>

        <MainSection>
          <aside className="c-offcanvas">
            <nav className="c-main-navigation"></nav>
          </aside>

          <Stage>{children}</Stage>
        </MainSection>

        <FooterSection className="l-page_footer c-footer">
          <FooterContent />
        </FooterSection>
      </Layout>
    </ThemeProvider>
  );
};

BaseLayout.propTypes = {
  children: PT.node,
  HeaderContent: PT.node,
  FooterContent: PT.node,
};

export default BaseLayout;
