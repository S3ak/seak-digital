import styled, { css, keyframes } from "styled-components";
import { ifProp } from "styled-tools";

const animeMinHeightTrans = keyframes`
  from {
    min-height: 100vh;
  }

  to {
    min-height: 90vh;
  }
`;

export const Wrapper = styled.div`
  flex: 0 1 auto;
  width: 100%;
  background: var(--color-intent-bg);
  min-height: 100vh;
  transition: min-height:
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

  animation: ${animeMinHeightTrans} 300ms ease;
`;
