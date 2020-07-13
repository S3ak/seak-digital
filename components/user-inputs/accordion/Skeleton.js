import React from "react";
import { Wrapper, Header, Body, Footer } from "./styled";

const Placeholder = () => <div>grey</div>;

export const Skeleton = () => (
  <Wrapper>
    <Header>
      <Placeholder />
    </Header>

    <Body>
      <Placeholder />
    </Body>

    <Footer>
      <Placeholder />
    </Footer>
  </Wrapper>
);

export default Skeleton;
