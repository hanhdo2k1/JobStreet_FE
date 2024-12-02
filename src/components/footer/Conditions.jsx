import React from "react";
import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <div className="footer__section__container__footer__conditions">
      <h1>Chính sách</h1>
      <div className="footer__section__container__footer__conditions--links">
        <Link to="/">Điều kiện </Link>
        <Link to="/">Quyền riêng tư</Link>
      </div>
    </div>
  );
};

export default Conditions;
