import React from "react";
import ReactDOM from "react-dom/client";
// import { FullPage, Slide } from "react-full-page";
// import Particules from "./components/Particules";

import "./index.scss";

//material ui  importation
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./config/routes/RoutesConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <RouteConfig />
  </BrowserRouter>
);
