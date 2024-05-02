import {
    createBrowserRouter,
  }from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SoftSkills from "../Pages/Home/Courses/SoftSkills/SoftSkills";
import TechnicalSkills from "../Pages/Home/Courses/TechnicalSkills/TechnicalSkills";
import EarlyChildhoodEducations from "../Pages/Home/Courses/EarlyChildhoodEducations/EarlyChildhoodEducations";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "softSkills",
            element: <SoftSkills></SoftSkills>
        },
        {
            path: "technicalSkills",
            element: <TechnicalSkills></TechnicalSkills>
        },
        {
            path: "earlychildhoodeducations",
            element: <EarlyChildhoodEducations></EarlyChildhoodEducations>
        },
        
      ]
    },
  ]);