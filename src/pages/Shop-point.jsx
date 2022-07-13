import React, { useEffect } from "react";

import ShopPoint from "../components/ui/Shoppoint/ShopPoint";

const Shoppoint = () => {
  useEffect(() => {
    document.title = "Shop point | Trang sức phụ kiện cao cấp chính hãng";
  });

  return (
    <>
      <ShopPoint />
    </>
  );
};

export default Shoppoint;
