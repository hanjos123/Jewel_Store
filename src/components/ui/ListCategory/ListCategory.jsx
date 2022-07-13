import React from "react";
import { Row, Col } from "antd";
import "./listcategory.css";
import MenuCategory from "../MenuCategory/MenuCategory";
import { PRODUCT__DATA } from "../../../assets/data/data";

import Product from "../Product/Product";

const ListCategory = () => {
  return (
    <Row>
      <MenuCategory />
      <Col xs={24} lg={21}>
        <div className="category__listproduct">
          <Row
            style={{ marginLeft: "-8px", marginRight: "-8px", rowGap: "16px" }}
          >
            {PRODUCT__DATA.map((item, index) => (
              <Col
                xs={12}
                md={8}
                lg={6}
                xl={4}
                key={index}
                style={{ paddingLeft: "8px", paddingRIght: "8px" }}
              >
                <Product item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ListCategory;
