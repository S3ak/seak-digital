import React from "react";

import { ItemWrapper } from "../styled";

export const GalleryItem = ({
  srcUrl = "https://images.unsplash.com/photo-1553531768-4ce3fb0b07fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
}) => {
  return (
    <ItemWrapper>
      <img src={srcUrl} />
    </ItemWrapper>
  );
};

export default GalleryItem;
