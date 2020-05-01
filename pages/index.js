import Head from "next/head";

import BtnSubmit from "../components/user-inputs/buttons/submit";
import BtnCTARound from "../components/user-inputs/buttons/cta-round";
import BtnCTALandscape from "../components/user-inputs/buttons/cta-landscape";
import Gallery from "../components/user-inputs/gallery";
import IntroArticle from "../components/displays/intro-article";
import InputField from "../components/user-inputs/input-fields/base";
import Header from "../components/displays/header";
import Stage from "../components/displays/stage";
import Footer from "../components/displays/footer";
import Container from "../components/displays/container";

import { GallerySection, IntroSection } from "./styled";

export default function Home() {
  const mockGalleryItems = [
    {
      title: "Theroyatsela",
      orderId: "",
      image: {
        url: "",
      },
      linkUrl: "",
    },
  ];

  return (
    <div className="l-page">
      <Head>
        <title>Seak Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                <IntroArticle>
                  <h3>About Me</h3>
                  <p className="c-intro-article_description">
                    In a time long ago, before the div tag and Flash ruled the
                    web...
                  </p>

                  <BtnCTARound kind="text" mode="primary" icon="angle-down">
                    Read More
                  </BtnCTARound>
                </IntroArticle>
              </IntroSection>

              <div className="l-page_divider">
                <div className="c-button-group">
                  <BtnCTARound kind="icon" mode="inverse" />
                  <BtnCTARound kind="icon" mode="secondary" />
                </div>
              </div>
            </article>
          </Container>
        </Stage>

        <Stage>
          <Container>
            <article className="c-stage_header">
              <div className="c-section-title">
                <h2 className="c-section-title_heading">Contact</h2>
                <p className="c-section-title_subtitle">Let's chat</p>
                <p className="c-section-title_description">
                  <a href="mailto:nsineke@gmail.com">nsineke@gmail.com</a>
                </p>
              </div>
            </article>

            <article className="c-stage_main">
              <form>
                <InputField name="e-mail" type="email" />
                <BtnCTALandscape
                  kind="landscape"
                  mode="inverse"
                  priority="primary"
                  icon="mic"
                >
                  Leave me a note
                </BtnCTALandscape>
                <InputField name="note" type="text" />
                <BtnSubmit icon="mail">Send</BtnSubmit>
              </form>
            </article>
          </Container>
        </Stage>
      </main>

      <footer className="l-page_footer c-footer">
        <Footer />
      </footer>

      <style jsx>{`
        .l-page {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --color-intent-bg: linear-gradient(
              180deg,
              rgba(129, 134, 140, 0.52) 0%,
              rgba(57, 58, 63, 0.59) 25%,
              #393a3f 100%
            ),
            #393a3f;

          --color-intent-text: #fff;

          --size-global-horizontal-bleed: 20px;
        }

        html {
          scroll-behavior: smooth;
          height: 100%;
        }

        body {
          min-height: 100%;
        }

        html,
        body {
          background: var(--color-intent-bg);
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
