import React, { useEffect } from "react";

import Contact from "../components/ui/Contact/Contact";

const ContactLayout = () => {
  useEffect(() => {
    document.title = "Contact | Trang sức phụ kiện cao cấp chính hãng";
  });

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactLayout;
