// import React, { useEffect, useState } from "react";
// import { fetchApiData } from "./api/Api";
// import Loader from "../src/components/services/Loader";
// import Category from "./components/categories/Category";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Jobs from "./components/jobs/Jobs";

// const Home = () => {
//   const [loader, setLoader] = useState(true);
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     setTimeout(() => {
//       const fetchData = async () => {
//         const response = await fetchApiData(`api/home`);
//         if (response && response.status && response.status === true) {
//           setdata(response.data);
//         } else {
//           console.log(response);
//         }
//         setLoader(false);
//       };
//       fetchData();
//     }, 100);
//   }, [loader]);
//   return (
//     <>
//       {loader ? (
//         <Loader />
//       ) : (
//         <>
//           <Header cmp="home" />
//           <Category categories={data.categories} />
//           {/* <Jobs latest={data.latest} /> */}
//           <Footer />
//         </>
//       )}
//     </>
//   );
// };

// export default Home;
