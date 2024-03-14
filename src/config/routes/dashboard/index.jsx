import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __dashboard = lazy(() => import("../../../pages/dashboard"));
const __dashboard__Home = lazy(() =>
  import("../../../pages/dashboard/content/home/Home")
);

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<__dashboard />}>
        <Route index element={<__dashboard__Home />} />
        <Route path="home" element={<__dashboard__Home />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
