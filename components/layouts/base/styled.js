import styled from "styled-components";

export const Layout = styled.section`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: auto;
grid-template-rows: 0 1fr auto;
align-content: stretch;
grid-template-areas:
  "header"
  "main"
  "footer";
`;

export const HeaderSection = styled.section`
  grid-area: header;
  height: 0;
`

export const MainSection = styled.section`
  grid-area: main;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export const FooterSection = styled.section`
  grid-area: footer;
`

export const LayoutDivider = styled.div`
  margin-bottom: -23px;
`
