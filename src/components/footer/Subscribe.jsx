import React from "react";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <div className="footer__section__container__footer__subscribe">
      <h1>Đăng ký ngay</h1>

      <form>
        <div className="footer__section__container__footer__subscribe__form">
          <input
            type="text"
            className="footer__section__container__footer__subscribe__form--input"
          />
          <button>Gửi</button>
        </div>
      </form>
      <div className="footer__section__container__footer__subscribe__social-links">
        <Link to="/">
          <i className="fa fa-facebook"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-twitter"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
