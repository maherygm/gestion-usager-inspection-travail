import React from "react";
import "./_home.scss";
import Profile from "../../layout/profile/Profile";
import InspectionTitle from "./content/inspectiontitle/InspectionTitle";
import DashboardMenu from "./content/dashboardMenu/DashboardMenu";
import logo from "../../../../assets/branding/supernova/RealTyMinimize.png";
import Weather from "../../../../components/weather/weather";
const Home = () => {
  return (
    <div className="main-Home-dashboard">
      <Profile />
      <InspectionTitle img={logo} />
      <DashboardMenu />
      <Weather />
    </div>
  );
};

export default Home;
