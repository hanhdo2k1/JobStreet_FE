import React from "react";
import JobItem from "./JobItem";

const Jobs = ({ latest }) => {

 
  return (
    <div className="job">
      <div className="container">
        <div className="job-info">
          <h1>Latest Jobs</h1>
        </div>
        <div className="job__wrapper">
          {latest &&
            latest.map((job, i) => (
              <JobItem
                 key={i}
                id={job.id}
                type={job.type}  
              
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
