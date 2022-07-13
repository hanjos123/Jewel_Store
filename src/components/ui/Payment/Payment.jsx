import React from "react";
import { Row, Col, Form, Input, Radio, Button } from "antd";
import product1 from "../../../assets/images/productdetail1.jpg";
import { Link } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const { TextArea } = Input;

  return (
    <Row>
      <Col xs={1} lg={2}></Col>
      <Col xs={22} lg={20}>
        <div className="payment__wrapper">
          <Row>
            <Col xs={24} lg={10} className="payment__block">
              <div className="payment__cart payment__cart-last">
                <div className="payment__cart-avatar">
                  <img src={product1} alt="" />
                </div>

                <div className="payment__cart-info">
                  <div className="payment__cart-InfoName">
                    <Link to="#">BAROQUE Glassese</Link>
                  </div>

                  <div className="payment__cart-InfoArr">
                    <span>Size</span>
                    <span>Không có size</span>
                  </div>
                  <div className="payment__cart-InfoArr">
                    <span>Loại đá</span>
                    <span>Ruby</span>
                  </div>
                  <div className="payment__cart-InfoArr">
                    <span>Giá</span>
                    <span>2.380.000 vnđ</span>
                  </div>
                  <div className="payment__cart-InfoArr">
                    <span>Tổng</span>
                    <span>23.800.000 vnđ</span>
                  </div>
                </div>
                <div className="payment__cart-tool">
                  <div className="payment__cart-ToolWrap">
                    <div className="tool__left">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </div>
                    <div className="tool__center">10</div>
                    <div className="tool__right">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="payment__cart-ToolTrash">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8} className="payment__infocustom">
              <h3 className="payment__infocustom-title">
                <span>Thông tin nhận hàng </span>
              </h3>
              <Form className="paymentForm">
                <Form.Item>
                  <Input id="email" placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Input id="name" placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item>
                  <Input id="phone" placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item>
                  <Input id="address" placeholder="Địa chỉ" />
                </Form.Item>
                <Form.Item>
                  <TextArea rows={4} placeholder="Ghi chú" />
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} lg={6} className="payment__block">
              <Form>
                <div className="payment__block2">
                  <div>
                    <h3 className="payment__infocustom-title">
                      <span>Hình thức thanh toán</span>
                    </h3>
                    <Radio.Group value={1}>
                      <Radio value={1}>Thanh toán khi nhận hàng (COD)</Radio>
                    </Radio.Group>
                  </div>
                  <div>
                    <div className="coupon">
                      <Form.Item>
                        <Input id="coupon" placeholder="Nhập mã giảm giá" />
                      </Form.Item>
                      <Button className="btn__coupon">Áp dụng</Button>
                    </div>

                    <div className="payment__tmp">
                      <div className="payment__tmp-line">
                        <span>Tạm tính</span>
                        <span>21.400.000 vnđ</span>
                      </div>
                    </div>

                    <div className="payment__sum">
                      <div className="payment__sum-line">
                        <span>Tổng tiền</span>
                        <span className="payment__sum-price">
                          {" "}
                          21.420.000 vnđ
                        </span>
                      </div>
                    </div>

                    <div className="payment__button-wrap">
                      <Button>
                        <span>Tiếp tục mua hàng</span>
                      </Button>
                      <Button>
                        <span>Đặt hàng</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs={1} lg={2}></Col>
    </Row>
  );
};

export default Payment;
