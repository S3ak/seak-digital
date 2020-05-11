import styled from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  margin-top: -35px;
  width: 100%;
  font-weight: 900;
  font-size: 129px;
  line-height: 110px;
  letter-spacing: 0.01em;
  color: #ad9643;
  /* Elevation / Dialog */
  text-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2),
    0px 24px 38px rgba(0, 0, 0, 0.14);
  overflow-y: visible;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    outline: opx solid transparent;
  }
`;

export const Item = styled.span`
  width: 100%;
  flex: 0 0 100%;
  scroll-snap-align: start;
  line-height: normal;
  margin: 0 20px;
  padding: 0 0 33px calc(var(--size-global-horizontal-bleed, 20px) - 5px);
`;
