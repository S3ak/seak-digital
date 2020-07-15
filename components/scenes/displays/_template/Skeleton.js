import React from "react";
import { Wrapper } from "./styled";

const Placeholder = () => <div>grey</div>;

export const Skeleton = () => (
  <Wrapper>
      <Placeholder />
  </Wrapper>
);

export default Skeleton;
