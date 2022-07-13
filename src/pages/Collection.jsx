import React, { useEffect } from "react";

import Collection from "../components/ui/Collection/Collection";

const CollectionLayout = () => {
  useEffect(() => {
    document.title = "Collection | Trang sức phụ kiện cao cấp chính hãng";
  });

  return (
    <>
      <Collection />
    </>
  );
};

export default CollectionLayout;
