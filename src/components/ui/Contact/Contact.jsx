import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";

import "./contact.css";

const Contact = () => {
  return (
    <Row className="contact__layout">
      <Col xs={1} lg={2}></Col>
      <Col xs={22} lg={20}>
        <div
          className="content"
          style={{ marginLeft: "8px", marginRight: "8px" }}
        >
          <Row>
            <Col
              xs={24}
              lg={16}
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5634454423416!2d106.6848005147489!3d10.768089192327205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f26914ca743%3A0x788201ff4a83b98b!2sRIVER%20BURN!5e0!3m2!1svi!2s!4v1657476835434!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>
                Toàn bộ sản phẩm được phân phối từ RIVER BURN đều được miễn phí
                làm mới trọn đời.
                <br /> Mua bán trao đổi trực tiếp sản phẩm cũ mới và nhận code
                sale 5% all item tại group facebook:{" "}
                <Link to="https://www.facebook.com/groups/1049153575252917">
                  RIVERBURN OFFICIAL
                </Link>
              </p>
            </Col>

            <Col
              xs={24}
              lg={8}
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <h2>Thông tin liên hệ</h2>
              <div class="contact__info">
                <p>
                  Địa chỉ:
                  <br />
                  <strong>
                    T2 / 83C Bùi Thị Xuân, Phạm Ngũ Lão, Quận 1, TP HCM
                  </strong>
                </p>
                <p>
                  Email:
                  <br />
                  <strong>
                    <a href="mailto:hotro.riverburn@gmail.com">
                      hotro.riverburn@gmail.com
                    </a>
                  </strong>
                </p>
                <p>
                  Điện thoại:
                  <br />
                  <strong>
                    <a href="tel:0888443434">0888443434</a>
                  </strong>
                </p>
                <p>
                  Thời gian làm việc:
                  <br />
                  <strong>*OPENING - MON - SUN. 09:30-21:30</strong>
                </p>
              </div>
              <h2>Thông tin liên hệ</h2>
              <Form>
                <Form.Item>
                  <Input id="name" placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item>
                  <Input id="phone" placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item>
                  <Input id="email" placeholder="Địa chỉ email" />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
};

export default Contact;
