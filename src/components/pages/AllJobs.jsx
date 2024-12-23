import React, { useEffect, useState } from "react";
import { fetchApiData } from "../../api/api";
import Loader from "../../components/services/Loader";
import Footer from "../footer/Footer";
import JobItemSection from "./JobItemSection";
import NavBar from "./navigation/NavBar";


const AllJobs = () => {
  const [loader, setloader] = useState(true);
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`api/get-openedJob`);
      if (response.status === true) {
        setjobs(response.data.jobs);
        
      } else {
        console.log(response);
      }
    };
    fetchData();
   
  }, []);

  return (
    <> 
          <JobItemSection jobs={jobs}/>
        </>
  );

};


export default AllJobs;
