import React from "react";
import PT from "prop-types";

export const BaseScene = ({ theme }) => {
  return (
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
  );
};

BaseScene.propTypes = {
};

export default BaseScene;