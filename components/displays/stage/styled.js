import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Wrapper = styled.div`
  flex: 0 1 auto;
  width: 100%;
  background: var(--color-intent-bg);
  ${ifProp(
    "hasTopOffset",
    css`
      padding-top: 25px;
      padding-bottom: 30px;
      flex: 1 1 auto;
    `
  )};

  ${ifProp(
    "isInverse",
    css`
      background: linear-gradient(180deg, #dedede 0%, #d4d6d8 100%), #727476;
    `
  )};
`;
