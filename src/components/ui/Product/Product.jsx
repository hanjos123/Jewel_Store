import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { display, imgUrl, url, price, priceDiscount } = props.item;

  return (
    <Link to={url}>
      <div className="index__item">
        <div className="index__item-avatar">
          <img src={imgUrl} alt="" />
        </div>
        <div className="index__item-overview">
          <h4 className="index__item-name">{display}</h4>
          <div className="index__item-price">
            {priceDiscount != null ? (
              <>
                <div className="index__item-pricediscount">
                  {price.toLocaleString()} vnđ
                </div>
                <div className="index__item-priceorigin">
                  {priceDiscount.toLocaleString()} vnđ
                </div>
              </>
            ) : (
              <>
                <div className="index__item-priceorigin">
                  {price.toLocaleString()} vnđ
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
