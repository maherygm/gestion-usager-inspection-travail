import React from "react";
import { Outlet } from "react-router-dom";
import "./__index.scss";
const index = () => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Outlet />
    </div>
  );
};

export default index;
