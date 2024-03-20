import React from "react";
import { Outlet } from "react-router-dom";
import "./__index.scss";
const index = () => {
  return (
    <div className="main-sign">
      <Outlet />
    </div>
  );
};

export default index;
