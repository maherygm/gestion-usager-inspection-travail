import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __MainPage = lazy(() => import("../../../pages/main"));

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<__MainPage />} />
    </Routes>
  );
}

export default MainRoutes;
