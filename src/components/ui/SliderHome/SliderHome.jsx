import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sliderhome.css";

import home1 from "../../../assets/images/home1.jpg";
import home2 from "../../../assets/images/home2.jpg";

export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      pauseOnHover: false,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div className="homeslide">
        <Slider {...settings}>
          <div className="slider">
            <img src={home1} alt="" />
          </div>
          <div className="slider">
            <img src={home2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
