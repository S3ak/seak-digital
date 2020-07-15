import React from "react";
import PT from "prop-types";
import { Layout, HeaderSection, MainSection, FooterSection } from "./styled";

import Header from '../../scenes/header';
import Footer from '../../scenes/footer';
import Stage from '../../displays/stage';

export const BaseLayout = ({ children, headerContent, footerContent }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HeaderSection className="l-page_header">
          <Header />
        </HeaderSection>

        <MainSection>
          <aside className="c-offcanvas">
            <nav className="c-main-navigation"></nav>
          </aside>

          <Stage>
            {children}
          </Stage>
        </MainSection>

        <FooterSection className="l-page_footer c-footer">
          <Footer />
        </FooterSection>
      </Layout>
    </ThemeProvider>
  );
};

BaseLayout.propTypes = {
  children: PT.node,
  handleOnAction: PT.func,
};

export default BaseLayout;
