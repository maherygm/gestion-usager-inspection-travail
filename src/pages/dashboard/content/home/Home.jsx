import React from "react";
import "./_home.scss";
import Profile from "./content/profile/Profile";
import InspectionTitle from "./content/inspectiontitle/InspectionTitle";
import DashboardMenu from "./content/dashboardMenu/DashboardMenu";
import logo from "../../../../assets/branding/supernova/RealTyMinimize.png";
const Home = () => {
  return (
    <div className="main-Home-dashboard">
      <Profile />
      <InspectionTitle img={logo} />
      <DashboardMenu />
    </div>
  );
};

export default Home;
