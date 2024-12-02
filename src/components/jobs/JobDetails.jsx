import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiData } from "../../api/api";
import Loader from "../../components/services/Loader";
import JobDetailsItem from "./JobDetailsItem";
import "../../_style/pages/navHero.scss";
import NavBar from "../pages/navigation/NavBar";
import NavHero from "../pages/navigation/NavHero";
const JobDetails = (hero) => {
  const { id } = useParams();
  const [loader, setloader] = useState(true);
  const [job, setjob] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApiData(`api/get-detailJob/${id}`);
      if (response.status === true) {
        setjob(response.job);
      } else {
        console.log(response);
      }
    };
    fetchData();
    // setTimeout(() => {
    //   setloader(false);
    // }, 1500);
  }, [id]);
  return (
    <>
     
      {/* {loader ? (
      
        <Loader />
        
      ) : ( */}
        <>
        {/* <NavHero hero={hero} job={job} /> */}
          <JobDetailsItem job={job} /> 
          
        </>
      {/* )}  */}
    </>
  );
};

export default JobDetails;
