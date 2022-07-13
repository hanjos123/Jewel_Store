import React from "react";
import { Row, Col } from "antd";
import "./shoppoint.css";
import { Link } from "react-router-dom";

import product1 from "../../../assets/images/product1.jpg";

import { PRODUCT__DATA } from "../../../assets/data/data";

import Product from "../Product/Product";

const ShopPoint = () => {
  return (
    <Row>
      <Col xs={1} lg={2}></Col>
      <Col xs={24} lg={20}>
        <div className="shoppoint">
          <Row
            style={{ marginLeft: "-8px", marginRight: "-8px", rowGap: "16px" }}
          >
            {PRODUCT__DATA.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <Product item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
};

export default ShopPoint;
