import React from "react";

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact_div">
          <form>
            <div className="contact-form">
              <div className="row1">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Tên của bạn"
                />
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="email"
                />
              </div>
              <div className="row2">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Chủ đề"
                />
              </div>
              <div className="row3">
                <textarea name="message"  rows="10"></textarea>
              </div>
              <button className="button-send">Gửi</button>
            </div>
          </form>
          <div className="contact_address">
          <img src="https://thutucxuatnhapkhau.com/wp-content/uploads/2023/05/chinh-sach-khach-hang-chung-tai-oz-viet-nam.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
