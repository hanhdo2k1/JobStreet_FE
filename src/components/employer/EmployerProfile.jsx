import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import TabBar from './TabBar';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../_style/admin/admin.scss"



const EmployerProfile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: 'Đăng xuất',
      text: 'Bạn muốn đăng xuất',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đăng xuất',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('login');
        navigate('/');
      } else {
        navigate('/EmployerProfile');
      }
    });
  };

  return (
    <>
      <div className="content-admins">
        <div className="admin-left">
          <TabBar  handleLogout={handleLogout} />
        </div>
        <div className="admin-right">
        <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;