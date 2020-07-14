import Head from "next/head";
import { FaAngleDown, FaGithub } from "react-icons/fa";

// import BtnSubmit from "../components/user-inputs/buttons/submit";
import BtnCTARound from "../components/user-inputs/buttons/cta-round";
import LinkButton from "../components/user-inputs/buttons/link";
import Link from "../components/user-inputs/link";
// import BtnCTALandscape from "../components/user-inputs/buttons/cta-landscape";
import Gallery from "../components/user-inputs/gallery";
import IntroArticle from "../components/displays/intro-article";
// import InputField from "../components/user-inputs/input-fields/base";
import Header from "../components/displays/header";
import Stage from "../components/displays/stage";
import Footer from "../components/displays/footer";
import Container from "../components/displays/container";
import ConnectedBaseScene from "../components/scenes/container";

import {
  GallerySection,
  IntroSection,
} from "../components/scenes/home-page/styled";

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
      {/* TODO: Change to layout */}
      <Head>
        <title>Seak Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectedBaseScene></ConnectedBaseScene>

      <style jsx>{`
        .l-page {
          width: 100%;
          height: 100vh;
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 0 1fr auto;
          align-content: stretch;
          grid-template-areas:
            "header"
            "main"
            "footer";
        }

        .l-page_header {
          grid-area: header;
          height: 0;
        }

        .l-page_main {
          grid-area: main;
          overflow: auto;
          display: flex;
          flex-direction: column;
        }

        .l-page_footer {
          grid-area: footer;
        }

        .l-page_divider {
          margin-bottom: -23px;
        }

        .c-button-group {
          display: flex;
          justify-content: flex-end;
        }

        .c-button-group_item:first-child {
          padding-right: 20px;
        }

        .c-section-title {
        }

        .c-section-heading_first-row {
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .c-section-heading_title {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 91px;
          line-height: 73.19%;
          /* or 67px */

          font-variant: small-caps;
          font-feature-settings: "cpsp" on;

          /* Seak palette - Accent */

          color: #ad9643;
          /* Elevation / Dialog */

          text-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2),
            0px 24px 38px rgba(0, 0, 0, 0.14);
        }

        .c-section-heading_description {
          padding-top: 20px;
          color: var(--color-primary);
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

          --color-primary: #ee4b0e;
          --color-muted: #bdbdbd;
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

        footer {
          grid
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }

        a {
          color: var(--color-primary);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
