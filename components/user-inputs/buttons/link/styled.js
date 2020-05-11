import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

import { buttonMixin } from "../base/styled";

const defaultThemeMixin = css`
  color: inherit;
`;

const inverseThemeMixin = css`
  color: inherit;
`;

export const Wrapper = styled.button`
  ${buttonMixin};
  display: inline-flex;

  ${switchProp("theme", {
    default: defaultThemeMixin,
    inverse: inverseThemeMixin,
  })}
`;
