import React, { useEffect, useState } from "react";
import "../../_style/pages/confirmcode.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Form } from "antd";
import { recoverPassword, recoverPasswordEmployer } from "../../api/api";
export const UserEnterCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState({
    code: "",
  });
  const [error, setError] = useState({});
  const [time, setTime] = useState(60);
  const localCode = JSON.parse(localStorage.getItem("code"));
  useEffect(() => {
    if (time > 0) {
      const second = setInterval(() => {
        setTime((coundown) => coundown - 1);
      }, 1000);
      return () => clearInterval(second);
    } else {
      localStorage.removeItem("code");
    }
  }, [time]);
  const resentEmail = (e) => {
    e.preventDefault();
    ResentCodeUser();
    setTime(60);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let error = {};
    if (code.code == "") {
      error.code = "Vui lòng nhập mã xác thực";
    } else if (code.code != localCode) {
      error.code = "Mã xác thực không đúng";
    } else {
      navigate("/newpasswordUser");
    }
    setError(error);
  };
  return (
    <div className="backgroud__image">
      <div className="container__form">
        <form onSubmit={handelSubmit} action="" method="post">
          <div className="title__form">
            <h3>Nhập mã xác thực</h3>
          </div>
          <div className="value__button">
            <input
              name="password"
              className="data__button"
              placeholder="Nhập mã code"
              onChange={(e) => setCode({ code: e.target.value })}
            />
            <p className="confirm__error">{error && error.code}</p>
            <p>Mã xác nhận sẽ hết hạn trong <b>{time}</b> s</p>
          </div>
          <button className="data__button confirm" htmlType="submit">
            Xác thực
          </button>
        </form>
        <div className="link__back">
          <p>
            Tôi muốn
            <Link onClick={resentEmail} className="color" to={"#"}>
              {" "}
              gửi lại
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const EmployeeEnterCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState({
    code: "",
  });
  const [error, setError] = useState({});
  const [time, setTime] = useState(60);
  const localCode = JSON.parse(localStorage.getItem("code"));
  useEffect(() => {
    if (time > 0) {
      const second = setInterval(() => {
        setTime((coundown) => coundown - 1);
      }, 1000);
      return () => clearInterval(second);
    } else {
      localStorage.removeItem("code");
    }
  }, [time]);
  const resentCode = (e) => {
    e.preventDefault();
    ResentCodeEmployee();
    setTime(60);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let error = {};
    if (code.code == "") {
      error.code = "Vui lòng nhập mã xác thực";
    } else if (code.code != localCode) {
      error.code = "Mã xác thực không đúng";
    } else {
      navigate("/newpasswordEmployee");
    }
    setError(error);
  };
  return (
    <div className="backgroud__image">
      <div className="container__form">
        <form onSubmit={handelSubmit} action="" method="post">
          <div className="title__form">
            <h3>Nhập mã xác thực</h3>
          </div>
          <div className="value__button">
            <input
              name="password"
              className="data__button"
              placeholder="Nhập mã code"
              onChange={(e) => setCode({ code: e.target.value })}
            />
            <p className="confirm__error">{error && error.code}</p>
            <p>Mã xác nhận sẽ hết hạn trong {time} s</p>
          </div>
          <button className="data__button confirm" type="submit">
            Xác thực
          </button>
        </form>
        <div className="link__back">
          <p>
            Tôi muốn{" "}
            <Link onClick={resentCode} className="color" to={"#"}>
              gửi lại
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ResentCodeUser = async () => {
  const localCode = JSON.parse(localStorage.getItem("user"));
  const code = await recoverPassword(localCode);
  localStorage.setItem("code", JSON.stringify(code.data));
};

export const ResentCodeEmployee = async () => {
  const localCode = JSON.parse(localStorage.getItem("user"));
  const code = await recoverPasswordEmployer(localCode);
  localStorage.setItem("code", JSON.stringify(code.data));
};
