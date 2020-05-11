import styled, { css } from "styled-components";

export const buttonMixin = css`
  position: relative;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  background: transparent;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  border: 0 solid transparent;

  color: #ee4b0e;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
  }
`;

export const Wrapper = styled.button`
  ${buttonMixin};
  display: flex;
  align-items: center;
`;
