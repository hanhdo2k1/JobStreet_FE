import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Modals } from "../Authennitication/Application";
import "../../_style/components/_detailsJob.scss";
import "../../_style/pages/navHero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../pages/navigation/NavBar";
import NavHero from "../pages/navigation/NavHero";
import Loader from "../services/Loader";
import Map from "./map";


const JobDetailsItem = ({ job ,hero}) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const handelApplication = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handelLogin = () => {
    Swal.fire({
      title: "Đăng nhập",
      text: "Bạn có muốn đăng nhập?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Không",
      confirmButtonText: "Đăng nhập",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/loginUser");
      } else {
        setVisible(false);
      }
    });
  };
  const useLogined = JSON.parse(localStorage.getItem("login"));
  return (
    <>
      <div className="container">
      <NavHero job={job} hero={hero} />
      </div>
      <section className="details_info">
        <div className="container">
          <div className="row">
            <div className="left-job">
              <h1>Mô tả công việc</h1>
              <div className="job-description">{job.description}</div>
              {useLogined === null ? (
                <Link className="btn btn-success" onClick={handelLogin}>
                 <p className="link"> Ứng tuyển ngay</p>
                </Link>
              ) : (
                <Link className="btn btn-success" onClick={handelApplication}>
                  <p className="link"> Ứng tuyển ngay</p> 
                </Link>
              )}

              {visible && <Modals closeModal={setVisible} job={job} visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}/>}
            </div>
            <div className="right">
        <h1>Địa chỉ công ty</h1>
        <img src="https://www.google.com/maps/d/thumbnail?mid=1JwrFnS69sR3pVhdmBC1AnS4pibw&hl=en_US"></img>
        <div className="location-map">
          {/* <Map/> */}
        </div>
      </div>
          </div>
          
        </div>
      </section>

    </>
  );
};

export default JobDetailsItem;
