import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
`;

export const SectionTitle = styled.div``;

export const SectionHeadingFirstRow = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const SectionHeadingTitle = styled.div`
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
`;

export const SectionHeadingDescription = styled.div`
  padding-top: 20px;
  color: var(--color-primary);
`;
