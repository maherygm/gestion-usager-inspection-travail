import React from "react";
import { Outlet } from "react-router-dom";

const Redirect = () => {
  return (
    <div>
      <h1>Redirect</h1>
      <Outlet />
    </div>
  );
};

export default Redirect;
