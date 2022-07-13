import React, { useEffect } from "react";
import Shop from "../components/ui/Shop/Shop";

const ShopLayout = () => {
  useEffect(() => {
    document.title = "Shop | Trang sức phụ kiện cao cấp chính hãng";
  });

  return (
    <>
      <Shop />
    </>
  );
};

export default ShopLayout;
