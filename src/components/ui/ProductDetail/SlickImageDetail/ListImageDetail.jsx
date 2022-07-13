import React, { Component } from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";

import "./listimgdetail.css";

import imgdetail1 from "../../../../assets/images/productdetail1.jpg";
import imgdetail2 from "../../../../assets/images/productdetail2.jpg";
import imgdetail3 from "../../../../assets/images/productdetail3.jpg";
import imgdetail4 from "../../../../assets/images/productdetail4.jpg";
import imgdetail5 from "../../../../assets/images/productdetail5.jpg";
import imgdetail6 from "../../../../assets/images/productdetail6.jpg";
const images = [
  imgdetail1,
  imgdetail2,
  imgdetail3,
  imgdetail4,
  imgdetail5,
  imgdetail6,
];

export default class ImageDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <div
                className="slideitem"
                style={{ width: "100%", display: "inline-block" }}
              >
                <img
                  src={item}
                  alt=""
                  onClick={() =>
                    this.setState({ photoIndex: index, isOpen: true })
                  }
                />
              </div>
            </div>
          ))}
        </Slider>

        {isOpen && (
          <Lightbox
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            clickOutsideToClose={true}
            mainSrcThumbnail={imgdetail1}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
