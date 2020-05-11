import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

import { buttonMixin } from "../base/styled";

const defaultThemeMixin = css`
  background: linear-gradient(
      180deg,
      rgba(129, 134, 140, 0.52) 0%,
      rgba(57, 58, 63, 0.59) 25%,
      #393a3f 100%
    ),
    #393a3f;
`;

const inverseThemeMixin = css`
  background: #bdbdbd;
  box-shadow: 5px 5px 10px rgba(197, 199, 206, 0.2),
    -5px -5px 5px rgba(61, 67, 72, 0.1);
`;

export const Wrapper = styled.button`
  ${buttonMixin};
  border-radius: 100%;
  border: 0 solid transparent;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  color: #bdbdbd;
  font-size: 26px;

  background: linear-gradient(
      180deg,
      rgba(129, 134, 140, 0.52) 0%,
      rgba(57, 58, 63, 0.59) 25%,
      #393a3f 100%
    ),
    #393a3f;
  box-shadow: 5px 5px 10px rgba(30, 31, 34, 0.5),
    -5px -5px 5px rgba(61, 67, 72, 0.44);

  ${switchProp("theme", {
    default: defaultThemeMixin,
    inverse: inverseThemeMixin,
  })}
`;

const innerCircleInverseThemeMixin = css`
  background: #dedede;
  box-shadow: inset 2px 2px 4px rgba(213, 211, 211, 0.49),
    inset -2px -2px 4px #c9c9c9;
`;

export const InnerCircle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 46px;
  min-height: 46px;
  border-radius: 100%;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
  background: #393a3f;
  box-shadow: inset 2px 2px 4px #3c4249, inset -2px -2px 4px #1f1f22;

  ${switchProp("theme", {
    inverse: innerCircleInverseThemeMixin,
  })}
`;
