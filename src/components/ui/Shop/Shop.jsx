import React from "react";
import { Row, Col } from "antd";
import "./shop.css";
import { Link } from "react-router-dom";

import { SHOP__DATA } from "../../../assets/data/data";

const Shop = () => {
  return (
    <Row>
      <Col xs={1} lg={2}></Col>
      <Col xs={22} lg={20}>
        <div className="shop__content">
          <Row>
            {SHOP__DATA.map((item, index) => (
              <Col xs={12} md={8} lg={4} key={index}>
                <Link to={item.url} className="collection__item">
                  <div className="head"></div>
                  <div className="body">
                    <div className="body__top">
                      <img src={item.svgUrl} alt="" />
                    </div>
                    <div className="body__bottom">
                      <img src={item.imgUrl} alt="" />
                    </div>
                  </div>
                  <div className="footer">
                    <h4>{item.display}</h4>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
};

export default Shop;
