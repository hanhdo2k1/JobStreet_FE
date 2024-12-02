import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

// import "../src/_style/main.scss";
// import 'antd/dist/reset.css';
// import "../src/_style/admin/admin.scss";


// import "../src/_style/components/Blog/detail.scss";
// import "../src/_style/components/Blog/company.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
   
       
        <BrowserRouter>

        <React.StrictMode>
              
                    <App />
               
        </React.StrictMode>
        </BrowserRouter>
       
   







);


  
