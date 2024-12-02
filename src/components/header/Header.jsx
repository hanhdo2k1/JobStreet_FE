import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../../_style/layout/_container.scss"
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Loader from "../services/Loader";
const Header = () => {
  const [loader, setLoader]=useState(false);
  const handelClickLink=()=>{
    setLoader(true)


    setTimeout(()=>{
      setLoader(false)
    },2000)
  }
  useEffect(()=>{
    setLoader(false)
  },[])
  return (
  <>
  {loader?
  (<Loader/>):
  ( <div className="home-header">
      <header className="home-header-container">
        <Nav handelClickLink={handelClickLink}></Nav>
      </header>
      <div className="home-body-container">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>)
  }
   
  </>
  );
};

export default Header;