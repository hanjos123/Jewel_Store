import React, { useEffect } from "react";
import SliderHome from "../components/ui/SliderHome/SliderHome";

const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ | Trang sức phụ kiện cao cấp chính hãng";
  });
  return (
    <>
      <SliderHome />
    </>
  );
};

export default Home;
