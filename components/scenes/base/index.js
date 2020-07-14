import React from "react";
import PT from "prop-types";

const ThemeType = {
  colors: PT.string,
};

const BaseScene = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <header className="l-page_header"></header>

      <main className="l-page_main">
        <aside className="c-offcanvas">
          <nav className="c-main-navigation"></nav>
        </aside>

        <Stage>
          <Header />

          <Container>
            <article className="c-stage_main">
              <GallerySection>
                <Gallery items={mockGalleryItems} />
              </GallerySection>

              <IntroSection>
                <IntroArticle />
              </IntroSection>

              <div className="l-page_divider">
                <div className="c-button-group">
                  <div className="c-button-group_item">
                    <Link href="//github.com/S3ak/seak-digital" passHref={true}>
                      <BtnCTARound
                        kind="icon"
                        icon="angle-down"
                        priority="primary"
                      >
                        <FaGithub />
                      </BtnCTARound>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </Stage>

        <Stage hasTopOffset isInverse>
          <Container>
            <article className="c-stage_header">
              <div className="c-section-heading">
                <div className="c-section-heading_first-row">
                  <h2 className="c-section-heading_title">
                    Con
                    <br />
                    tact
                  </h2>

                  <p className="c-section-heading_subtitle">Let's chat</p>
                </div>

                <p className="c-section-heading_description">
                  <Link href="mailto:nsineke@gmail.com">nsineke@gmail.com</Link>
                </p>
              </div>
            </article>
          </Container>
        </Stage>
      </main>
      {children}

      <footer className="l-page_footer c-footer">
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

BaseScene.propTypes = {
  theme: PT.shape(ThemeType),
};
