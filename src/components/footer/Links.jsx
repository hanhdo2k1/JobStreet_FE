import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="footer__section__container__footer__links">
      <h1> JobStreet</h1>
      <div className="footer__section__container__footer__links--quick">
        <Link to="/">Việc làm</Link>
        <Link to="/">Công ty</Link>
        <Link to="/">Bài đăng</Link>
        <Link to="/">Liên hệ</Link>
      </div>
    </div>
  );
};

export default Links;
