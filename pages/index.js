import Head from "next/head";

import TitleSlider from "../components/displays/title-slider";
import BtnMenu from "../components/user-inputs/buttons/menu";
import BtnSubmit from "../components/user-inputs/buttons/submit";
import BtnCTARound from "../components/user-inputs/buttons/cta-round";
import BtnCTALandscape from "../components/user-inputs/buttons/cta-landscape";
import Gallery from "../components/user-inputs/gallery";
import IntroArticle from "../components/displays/intro-article";
import InputField from "../components/user-inputs/input-fields/base";

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

  const titleSlideItems = [
    {
      title: "Digital",
      orderId: 1,
    },
    {
      title: "Design",
      orderId: 2,
    },
    {
      title: "Dev",
      orderId: 3,
    },
    {
      title: "Dj",
      orderId: 4,
    },
    {
      title: "Photo",
      orderId: 5,
    },
  ];

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

  return (
    <div className="l-page">
      <Head>
        <title>Seak Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="l-page_header">
        <article className="c-header">
          <h1 className="c-header_title">
            Seak <TitleSlider items={titleSlideItems} />
          </h1>

          <p className="c-header_subtitle">
            <span>UI</span> is my tool.
            <br className="c-header_spacer" />
            <span>UX</span> is my passion.
          </p>

          <div className="l-page_nav-position">
            <BtnMenu />
          </div>
        </article>
      </header>

      <main className="l-page_main">
        <aside className="c-offcanvas">
          <nav className="c-main-navigation"></nav>
        </aside>

        <section className="c-stage">
          <article className="c-stage_main">
            <Gallery items={mockGalleryItems} />
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

            <div className="l-page_divider">
              <div className="c-button-group">
                <BtnCTARound kind="icon" mode="inverse" />
                <BtnCTARound kind="icon" mode="secondary" />
              </div>
            </div>
          </article>
        </section>

        <section className="c-stage">
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
        </section>
      </main>

      <footer className="l-page_footer c-footer">
        <section className="c-footer_copywrite">
          Made with ♥ by Monde Sineke
        </section>

        <section className="c-footer_copywrite">
          {socialLinkItems.map(({ name }) => (
            <div className="c-social-icon" name={name} />
          ))}
        </section>
      </footer>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
