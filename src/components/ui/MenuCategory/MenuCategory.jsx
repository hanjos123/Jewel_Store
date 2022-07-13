import React from "react";
import { Col } from "antd";
import { Link, NavLink } from "react-router-dom";
import { SHOP__DATA } from "../../../assets/data/data";

const MenuCategory = () => {
  return (
    <Col xs={24} lg={3} className="productcategory">
      <div className="allitem">
        <div>
          <Link to="/shop">All items</Link>
        </div>
      </div>
      <div className="listcategory">
        {SHOP__DATA.map((item, index) => (
          <NavLink
            className={(navClass) => (navClass.isActive ? "active" : "")}
            to={item.url}
            key={index}
          >
            <div className="productcategory__item">
              <div className="productcategory__item-avatar">
                <img src={item.svgUrl} alt="" />
              </div>
              <h4 className="productcategory__item-title">{item.display}</h4>
            </div>
          </NavLink>
        ))}
      </div>
    </Col>
  );
};

export default MenuCategory;
