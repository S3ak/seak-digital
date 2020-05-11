import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Button from "../buttons/cta-round";
import Link from "../link";

import {
  Wrapper,
  FirstButton,
  LastButton,
  ImageContainer,
  FirstRow,
  LastRow,
  SectionTitle,
} from "./styled";

const galleryItems = [
  {
    orderId: 0,
    label: "Theroyatsela",
    name: "Theroyatsela branding",
    behance: {
      url: "https://www.behance.net/gallery/95930083/Theroyatsela-Branding",
      featureImgUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a16b6395930083.5ea2e87ab27c1.jpg",
    },
  },
  {
    orderId: 1,
    label: "TEDx",
    name: "TEDx Youth Cape Town",
    behance: {
      url: "https://www.behance.net/gallery/95768057/TEDx-Youth-Cape-Town",
      featureImgUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/53ad9b95768057.5e9f2a866f2d7.jpg",
    },
  },
  {
    orderId: 2,
    label: "Logos",
    behance: {
      url: "https://www.behance.net/gallery/95755301/Logos",
      featureImgUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/13938995755301.5e9ff5cf7a8ce.jpg",
    },
  },
];

export const Gallery = ({ initialItems = galleryItems }) => {
  const [items] = useState(initialItems);
  const [currentItem, setCurrentItem] = useState(initialItems[0]);

  // TODO: This is not sexy at all
  const doDecrementItem = () => {
    const pos = currentItem?.orderId - 1 <= 0 ? 0 : currentItem?.orderId - 1;
    setCurrentItem(items[pos]);
  };

  const doIncrementItem = () => {
    const maxItems = items.length - 1;
    const pos =
      currentItem?.orderId + 1 > maxItems ? maxItems : currentItem?.orderId + 1;
    setCurrentItem(items[pos]);
  };

  return (
    <Wrapper>
      <FirstRow>
        <FirstButton>
          <Button onClick={doDecrementItem}>
            <FaAngleLeft />
          </Button>
        </FirstButton>

        <ImageContainer>
          <img src={currentItem?.behance?.featureImgUrl} />
        </ImageContainer>

        <LastButton>
          <Button onClick={doIncrementItem}>
            <FaAngleRight />
          </Button>
        </LastButton>
      </FirstRow>

      <LastRow>
        <SectionTitle>
          <Link href={currentItem?.behance?.url}>{currentItem?.label}</Link>
        </SectionTitle>
      </LastRow>
    </Wrapper>
  );
};

export default Gallery;
