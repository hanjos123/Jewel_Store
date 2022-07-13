import React from "react";
import { Row, Col } from "antd";
import "./collection.css";
import { Link } from "react-router-dom";

import { COLLECTION__DATA } from "../../../assets/data/data";

const Collection = () => {
  return (
    <Row>
      <Col xs={1} lg={2}></Col>
      <Col xs={22} lg={20}>
        <div className="collection__content">
          <Row>
            {COLLECTION__DATA.map((item, index) => (
              <Col xs={12} md={8} lg={4} className="collection__item">
                <div className="head"></div>
                <div className="body">
                  <Link to="#">
                    <img src={item.imgUrl} alt="" />
                  </Link>
                </div>
                <div className="footer">
                  <Link to="#">
                    <h4>{item.display}</h4>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
};

export default Collection;
