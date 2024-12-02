

import React, { Component, useState, navigate } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import "../../_style/admin/admin.scss"
import Userad from './Useradmin';
import Menuadmin from './Menuadmin';
import Companyad from './Companyadmin';
import Inforusers from './Informationuser';
import Browse from './Job';
import Swal from 'sweetalert2';
function Admin() {
        const [changePageAdmin,setChangePageAdmin]=useState(<Browse/>)
        const handelCompany=()=>{
                setChangePageAdmin(<Companyad/>)
        }
        const handelUser=()=>{
                setChangePageAdmin(<Userad/>)
        }
        const handelInformation=()=>{
                setChangePageAdmin(<Inforusers/>)
        }
        const handelbrowse=()=>{
                setChangePageAdmin(<Browse/>)
        }
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
                    localStorage.removeItem('admin');
                    navigate('/');
                  } else {
                    navigate('/admin');
                  }
                });
              };
        
        return (
                <div className='content-admins'>
                        <div className='admin-left'>
                                <Menuadmin handelCompany={handelCompany} handelUser={handelUser} handelInformation={handelInformation} handelbrowse={handelbrowse} handleLogout={handleLogout}></Menuadmin>
                        </div>
                        <div className='admin-right'>
                               {changePageAdmin}
                        </div>
                </div>
        )


}

export default Admin
