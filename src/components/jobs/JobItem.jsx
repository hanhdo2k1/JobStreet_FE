import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBuilding,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "../../_style/components/JobCard.scss";

const JobItem = ({
  position,
  type,
  company,
  address,
  logo,
  salary,
  id,
  time_close,
}) => {
  // Format the time_close variable as "day-month-year" (e.g., "11-05-2023")
  const formattedTimeClose = new Date(time_close).toLocaleDateString("en-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <div className="job__wrapper__card">
      <div className="job__wrapper__card--left">
        <img src={`http://127.0.0.1:8000/storage/${logo}`} alt="Icon" />
      </div>
      <div className="job__wrapper__card--right">
        <div className="job__wrapper__card--right__part-1">
          <p>{position}</p>
          <p>
            <FontAwesomeIcon icon={faBuilding} /> {company}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollarSign} /> {salary}
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            <span> Ngày đóng đơn: </span> {formattedTimeClose}
          </p>

          <Link
            className={
              type === "full time"
                ? "btn btn-success"
                : "btn btn-success"
            }
            to={`/job-details/${id}`} 
           
          >
            {/* {type} */} Chi tiết
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default JobItem;
