import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Button from "../buttons/cta-round";

import {
  Wrapper,
  FirstButton,
  LastButton,
  ImageContainer,
  FirstRow,
  LastRow,
  SectionTitle,
} from "./styled";

export const Gallery = ({ items = [] }) => {
  return (
    <Wrapper>
      <FirstRow>
        <FirstButton>
          <Button>
            <FaAngleLeft />
          </Button>
        </FirstButton>

        <ImageContainer>
          <img src="https://images.unsplash.com/photo-1553531768-4ce3fb0b07fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </ImageContainer>

        <LastButton>
          <Button>
            <FaAngleRight />
          </Button>
        </LastButton>
      </FirstRow>

      <LastRow>
        <SectionTitle>Current Projects</SectionTitle>
      </LastRow>
    </Wrapper>
  );
};

export default Gallery;
