import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// data test pages importation
const __Test__ = lazy(() => import("../../../pages/test"));

function TestsRoutes() {
  return (
    <Routes>
      <Route path="/test" element={<__Test__ />} />
    </Routes>
  );
}

export default TestsRoutes;
