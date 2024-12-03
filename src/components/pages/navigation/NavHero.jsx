import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../../../_style/pages/navHero.scss";

const NavHero = ({ hero, job }) => {
  return (
    <div className="hero_section">
      <>
        {hero === "jobs" || hero === "search" ? (
          <>
            {/* Add your content here for the "jobs" or "search" hero */}
          </>
        ) : (
          job && (
            <>
              <div className="hero-data">
                <div className="left">
                  <div className="icon">
                  <img src={`http://127.0.0.1:8000/storage/${job.logo}`} alt="Icon" />
                  </div>
                  <div className="details">
                    <h1>{job.position}</h1>
                    <div className="company">
                      <FontAwesomeIcon icon={faBuilding} />
                      <span> {job.company_name}</span>
                    </div>
                    <div className="posted">
                      <div className="country">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {job.address}
                      </div>
                      <div className="date">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Ngày đóng đơn: {job.close_day}</span>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                  <div className="amount">
                    <h2>Tiền lương</h2>
                    <h2>{job.salary}$</h2>
                  </div>
                </div>
                </div>
                
              </div>
            </>
          )
        )}
      </>
    </div>
  );
};

export default NavHero;