import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {  Button } from "antd";
import { getTokenCompany } from '../../api/api';
import "../../_style/admin/admin.scss"

const TabBar = ({ handleInfor, handleLogout, handleApply, handleJob, handelCompanyChangePassword }) => {
  const [company, setCompany] = useState({});
  const token = JSON.parse(localStorage.getItem('login'));

  useEffect(() => {
    const getInfor = async () => {
      const companyValue = await getTokenCompany(token.token);
      if (companyValue.data.status === 200) {
        setCompany(companyValue.data.company);
      }
    };
    getInfor();
  }, [token.token]);

  return (
    <div>
      <div className="container--tabbar">
        <div className="tabbar--image">
          <div className="image--profile">
            <img src={`http://127.0.0.1:8000/storage/${company.logo}`} alt="" />
          </div>
          <div className="user--name">
            <h2>{company.company_name}</h2>
          </div>
        </div>
        <div className="tabbar--drop--down">
          <ul>
            <li>
              <Link className="color" to={'/'}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="color" to="companyApllication">
                Hồ sơ ứng tuyển
              </Link>
            </li>
            <li>
              <Link className="color" to="jobs">
                Công việc
              </Link>
            </li>
            <li>
              <Link className="color" to="changePassword">
                Đổi mật khẩu
              </Link>
            </li>
            <li>
              <Link className="color" to="">
                Cập nhật thông tin
              </Link>
            </li>
          </ul>
        </div>
        <Button className='button' type="primary" onClick={handleLogout}>
          Đăng xuất
        </Button>
      </div>
    </div>
   
  );
};

export default TabBar;
