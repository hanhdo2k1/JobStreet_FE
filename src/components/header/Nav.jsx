import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import "../../_style/layout/_header.scss"
import { getTokenUser,getTokenCompany } from "../../api/api";
const Nav = ({ cmp ,handelClickLink}) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("login"));
  const userType=JSON.parse(localStorage.getItem("userType"));
  const [loader, setLoader]=useState(false);
  const [image, setImage] = useState([])
  useEffect(() => {
    userAlready()
  }, [])

  const userAlready = async () => {
    if(userType==="candidate"){
      const values = await getTokenUser(token.token);
      if(values.data.status==200){
        setImage(values.data.user.avatar)
      }
    }else if(userType==="company"){
      const values = await getTokenCompany(token.token);
      if(values.data.status==200){
      setImage(values.data.company.logo)
    }
    }
    
    // console.log(values.data.user.avatar)
  }
  return (
    <>
<>
    <div className="home-header-container-nav">
      <div className="home-header-container-nav-left">
        <div className="home-header-container-nav-left__branding">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home-header-container-nav-right">
        <Link
          className={`${cmp === "jobs" ? "home-header-container-nav-right--active-menu" : ""}`}
          to="/" onClick={handelClickLink}
        >
          Tìm việc làm
        </Link>
        <Link
          className={`${cmp === "company" ? "home-header-container-nav-right--active-menu" : ""}`}
          to="/company" onClick={handelClickLink}
        >
          Danh sách công ty
        </Link>
        <Link
          className={`${cmp === "blogs" ? "home-header-container-nav-right--active-menu" : ""}`}
          to="/blog" onClick={handelClickLink}
        >
          Bài đăng
        </Link>
        <Link
          className={`${cmp === "contact" ? "home-header-container-nav-right--active-menu" : ""}`}
          to="/contact" onClick={handelClickLink}
        >
          Liên hệ
        </Link>
        {token ?(
          userType==="candidate"?
          (
            <Link to={"userProfile"}>
            <img width={50} height={50} style={{ borderRadius: "50px" }} src={`http://127.0.0.1:8000/storage/${image}`} alt="" />
          </Link>
          ):(
            <Link to={"employerProfile"}>
            <img width={50} height={50} style={{ borderRadius: "50px" }} src={`http://127.0.0.1:8000/storage/${image}`} alt="" />
          </Link>
          )
         
        ):(
          <>
            <Link
              className={`${cmp === "login" ? "home-header-container-nav-right--active-menu" : ""}`}
              to="/loginUser"
            >
              Đăng nhập
            </Link>
            <Link
              className={`${cmp === "login" ? "home-header-container-nav-right--active-menu" : ""}`}
              to="/loginEmployee"
            >
              Dành cho nhà tuyển dụng
            </Link>
          </>
        )}
      </div>
      
    </div>
    </>
    </>
  );
};

export default Nav;  