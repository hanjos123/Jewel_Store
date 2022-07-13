import React, { useEffect } from "react";
import Payment from "../components/ui/Payment/Payment";

const PaymentLayout = () => {
  useEffect(() => {
    document.title = "Thanh toán | Trang sức phụ kiện cao cấp chính hãng";
  });
  return (
    <>
      <Payment />
    </>
  );
};

export default PaymentLayout;
