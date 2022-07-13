import React, { useEffect } from "react";

import ListCategory from "../components/ui/ListCategory/ListCategory";

const ProductCategory = () => {
  useEffect(() => {
    document.title = "Product Category | Trang sức phụ kiện cao cấp chính hãng";
  });
  return (
    <>
      <ListCategory />
    </>
  );
};

export default ProductCategory;
