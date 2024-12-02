import React, { useEffect, useState } from 'react'
import "../../_style/user/tabbar.scss";
import { Link, Outlet, useNavigate } from "react-router-dom"
import { TabarUser } from './TabarUser';
import "../../_style/admin/admin.scss"
import Swal from 'sweetalert2';
import axios from 'axios';
export const UserProfile = () => {
    const navigate=useNavigate()
    const handelLogout = () => {
        Swal.fire({
            title:"Đăng xuất",
            text:"Bạn muốn đăng xuất",
            icon:"info",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText:"Đăng xuất",
            cancelButtonText:"Không"
        }).then((result)=>{
            if(result.isConfirmed){
                localStorage.removeItem("login")
                navigate("/")
            }else{
                navigate("/userProfile")
            }
        })
    }
    return (
        <>
            <div className="container--user--profile">
                <div className="user--profile--left">
                    <TabarUser  handelLogout={handelLogout}></TabarUser>
                </div>
                <div className="user--profile--content">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}



