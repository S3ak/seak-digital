import Head from "next/head";
import { FaAngleDown, FaGithub } from "react-icons/fa";

// import BtnSubmit from "../components/user-inputs/buttons/submit";
import BtnCTARound from "../components/user-inputs/buttons/cta-round";
import LinkButton from "../components/user-inputs/buttons/link";
import Link from "../components/user-inputs/link";
// import BtnCTALandscape from "../components/user-inputs/buttons/cta-landscape";
import Gallery from "../components/user-inputs/gallery";
import IntroArticle from "../components/displays/intro-article";

import Stage from "../components/displays/stage";
import Container from "../components/displays/container";
import Section from "../components/displays/section";
import ButtonGroup from "../components/user-inputs/button-group";
import ButtonGroupItem from "../components/user-inputs/button-group/item";

import { mockGalleryItems } from "./../lib/states/gallery/mockGalleryItems";

import BaseLayout from "../components/layouts/base";

import {
  GallerySection,
  IntroSection,
} from "../components/layouts/home/styled";

const H2Content = () => (
  <>
    Con <br /> tact
  </>
);

export default function Home() {
  const galleryItems = mockGalleryItems || [];

  return (
    <BaseLayout>
      {/* TODO: Change to layout */}
      <Head>
        <title>Seak Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Stage>
          <Container>
            <article className="c-stage_main">
              <GallerySection>
                <Gallery items={galleryItems} />
              </GallerySection>

              <IntroSection>
                <IntroArticle />
              </IntroSection>

              <div className="l-page_divider">
                <ButtonGroup>
                  <ButtonGroupItem>
                    <Link href="//github.com/S3ak/seak-digital" passHref={true}>
                      <BtnCTARound
                        kind="icon"
                        icon="angle-down"
                        priority="primary"
                      >
                        <FaGithub />
                      </BtnCTARound>
                    </Link>
                  </ButtonGroupItem>
                </ButtonGroup>
              </div>
            </article>
          </Container>
        </Stage>

        <Stage hasTopOffset isInverse>
          <Container>
            <Section h2Content={<H2Content />} subtitle="Let's chat">
              <Link href="mailto:nsineke@gmail.com">nsineke@gmail.com</Link>
            </Section>
          </Container>
        </Stage>
      </div>
    </BaseLayout>
  );
}
