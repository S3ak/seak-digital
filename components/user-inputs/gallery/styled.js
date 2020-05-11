import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

const ButtonMixin = css`
  flex: 0 0 auto;
  min-width: 20px;
  min-height: 20px;
  position: relative;
  z-index: 100;
`;

export const FirstButton = styled.div`
  ${ButtonMixin};
`;

export const LastButton = styled.div`
  ${ButtonMixin};
`;

export const ImageContainer = styled.div`
  /* position: relative;
  min-width: 138px;
  max-width: 140px;
  height: auto; */
  /* width: 100%; */
  /* border-radius: 100%; */
  border: 2px solid #202428;
  /* display: flex;
  justify-content: center;
  align-content: center; */
  /* overflow: hidden; */
  background: linear-gradient(317.81deg, #202428 14.05%, #131314 85.29%);
  box-shadow: -20px -20px 70px #485057, 20px 20px 70px #141415;

  width: 50%;
  text-align: center;
  position: relative;
  padding-bottom: 50%;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
    background: white;
  }
`;

export const FirstRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LastRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
`;

export const SectionTitle = styled.h2`
  padding-top: 9px;
  /* Base */
  color: #bdbdbd;

  /* Elevation / Dialog */
  text-shadow: 0px 11px 15px rgba(0, 0, 0, 0.2),
    0px 24px 38px rgba(0, 0, 0, 0.14);
  font-size: 12px;
`;
