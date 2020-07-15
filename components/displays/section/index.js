import React, { useState } from "react";
import PT from "prop-types";
import {
  Wrapper,
  SectionTitle,
  SectionHeadingFirstRow,
  SectionHeadingTitle,
  SectionHeadingDescription,
} from "./styled";

import Skeleton from "./Skeleton";

export const Section = ({ children, h2Content, subtitle }) => {
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <SectionTitle>
        <div className="c-section-heading">
          <SectionHeadingFirstRow>
            <SectionHeadingTitle>{h2Content}</SectionHeadingTitle>

            <p className="c-section-heading_subtitle">{subtitle}</p>
          </SectionHeadingFirstRow>

          <SectionHeadingDescription>{children}</SectionHeadingDescription>
        </div>
      </SectionTitle>
    </Wrapper>
  );
};

Section.propTypes = {
  children: PT.node,
  h2Content: PT.node,
  subtitle: PT.node,
};

export default Section;
