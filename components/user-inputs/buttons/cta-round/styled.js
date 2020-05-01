import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
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
`;
