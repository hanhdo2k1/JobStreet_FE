import React from "react";
import Logo from "../../../public/assets/images/logo.png"  ;

const Info = () => {
  return (
    <div className="footer__section__container__footer__info">
      <img src={Logo} alt="logo" />
      <p>
     JobStreet là một trong những hệ sinh thái nhân sự hàng đầu tại khu vực Đông Nam Á. Sứ mệnh của chúng tôi là hỗ trợ cho 120 triệu nhân tài trong khu vực phát triển sự nghiệp của họ.
      </p>
    </div>
  );
};

export default Info;
