import styled from "styled-components";

export const Wrapper = styled.article`
  --bleed-offset: -63px;
  font-family: Roboto;
  font-style: normal;
  color: var(--color-intent-text);
  /* CSS HACK */
  margin-bottom: var(--bleed-offset, -63px);
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 94px;
  line-height: 110px;
  letter-spacing: 0.01em;
  color: #ad9643;
  /* Elevation / Dialog */
  text-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2),
    0px 24px 38px rgba(0, 0, 0, 0.14);
  margin: 0 auto;
  max-width: 900px;
`;

export const Subtitle = styled.div`
  position: relative;
  top: var(--bleed-offset, -63px);
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.01em;
`;

export const Spacer = styled.span`
  display: block;
  height: 4px;
`;

export const SeakText = styled.span`
  padding-left: calc(var(--size-global-horizontal-bleed, 20px) - 2px);
`;

export const NameText = styled.span`
  display: inline-block;
  margin-left: 22px;
  font-size: 16px;
`;
