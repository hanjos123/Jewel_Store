import React, { Component } from "react";
import Slider from "react-slick";

import Product from "../../Product/Product.jsx";

import { PRODUCT__DATA } from "../../../../assets/data/data";

export default class ProductSimilar extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      centerMode: true,
      variableWidth: true,
      arrow: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div>
        <Slider {...settings} style={{ padding: "0px 50px" }}>
          {PRODUCT__DATA.map((item, index) => (
            <div style={{ width: 143 }} key={index}>
              <Product item={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
