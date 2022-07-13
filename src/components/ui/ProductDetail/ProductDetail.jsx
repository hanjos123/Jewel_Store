import React from "react";
import { Row, Col, Select, Button } from "antd";
import ListImageDetail from "./SlickImageDetail/ListImageDetail.jsx";
import MenuCategory from "../MenuCategory/MenuCategory";
import ProductSimilar from "./ProductSimilar/ProductSimilar.jsx";

import "./productdetail.css";

const ProductDetail = () => {
  const { Option } = Select;
  return (
    <Row>
      <MenuCategory />
      <Col xs={24} lg={4} className="sliderBoder">
        <div className="relativeSlice">
          <ProductSimilar />
        </div>
      </Col>
      <Col xs={24} lg={12} className="sliderBoder">
        <div className="productdetail__image">
          <div className="index__wrap">
            <div className="index__slide">
              <ListImageDetail />
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} lg={5}>
        <div className="productdetail">
          <div className="product__desc">
            <div className="content">
              <h3 className="title">
                <span>Ngày ra mắt</span>
              </h3>
              <div className="meta">
                <p>05 / 03 / 2022</p>
              </div>
            </div>
            <div className="content">
              <h3 className="title">
                <span>Thông tin sản phẩm</span>
              </h3>
              <div className="meta">
                <p>Silver 925 x Ruby</p>
              </div>
            </div>

            <div className="content">
              <h3 className="title">
                <span>Bảng size</span>
              </h3>
              <div className="meta">
                <Select
                  showSearch
                  placeholder="Chọn size"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">Not Identified</Option>
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </div>
            </div>

            <div className="content">
              <h3 className="title">
                <span>Bảng đá quý</span>
              </h3>
              <div className="meta">
                <Select
                  showSearch
                  placeholder="Chọn loại đá quý"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.includes(input)
                  }
                >
                  <Option value="1">Shappire</Option>
                  <Option value="2">Ruby</Option>
                  <Option value="3">Emerald</Option>
                  <Option value="4">White Gem</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="buttonproduct">
          <Button className="btn__addtocart">THÊM VÀO GIỎ HÀNG</Button>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetail;
