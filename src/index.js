import React from "react";
import ReactDOM from "react-dom/client";
// import { FullPage, Slide } from "react-full-page";
// import Particules from "./components/Particules";

import "./index.scss";

import "react-toastify/dist/ReactToastify.css";

//material ui  importation
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./config/routes/RoutesConfig";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./config/redux/reducers/index";

import { getDossier } from "./config/redux/actions/dossier.action";
import { ToastContainer } from "react-toastify";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getDossier());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  </Provider>
);
