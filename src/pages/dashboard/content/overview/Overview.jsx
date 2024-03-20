import React from "react";
import "./__overview.scss";
import LineChart from "./content/lineChart/LineChart";
import HeatMap from "./content/heatmap/HeatMap";
import RadialChart from "./content/radial/RadialChart";
import { Avatar, IconButton, Tooltip } from "@mui/material";

import img from "../../../../assets/branding/supernova/RealTyMinimize.png";
import img2 from "../../../../assets/branding/img/400x500/img30.jpg";
import {
  Earbuds,
  Logout,
  MoreHoriz,
  Notifications,
  Restore,
  Settings,
  ShowChart,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard/home");
  }
  return (
    <div className="main-container-overview">
      <div className="bloc">
        <div className="cmp mein-section-1">
          <div className="cmp section-1 pad">
            <div className="header-sec-2-blc-2">
              <div className="first">
                <Earbuds />
                <p>Simple Representation</p>
              </div>
              <div className="second">
                <div className="btn-one">
                  <p>Differend</p>
                </div>
                <div className="btn-one">Reglement Interieur</div>
                <div className="btn-one">Contrat de travail</div>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="section-2 cmp ">
            <div className="blc cmp pad one">
              <div className="header-blc">
                <p>Profil</p>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </div>
              <div className="chart-container">
                <RadialChart />
              </div>
              <div className="fotter">
                <p>Profit in 36% More than last weeek</p>
                <div className="asignation"></div>
              </div>
            </div>
            <div className="blc cmp pad two">
              <p>
                Prenez une profonde inspiration concentrez vous sur vos
                objectifs.
              </p>
            </div>
          </div>
        </div>
        <div className="mein-section-2 cmp">
          <div className="section-2-blc-1 cmp">
            <div className="user-profil-action cmp pad">
              <div className="el-action date-container">
                <div className="date">
                  <div className="content Date">
                    <p>Lundi 27 mars 2024</p>
                  </div>
                  <IconButton className="icons-btn">
                    <Notifications className="icons" />
                  </IconButton>
                </div>
              </div>
              <div className="el-action-2 action-container">
                <IconButton className="icons-btn">
                  <Restore className="icons" />
                </IconButton>
                <IconButton className="icons-btn">
                  <Settings className="icons" />
                </IconButton>
                <IconButton>
                  <Avatar src={img2} className="icons" />
                </IconButton>
              </div>
            </div>
            <div className="styled-ui cmp ">
              <IconButton className="icons-btn">
                <Avatar src={img} />
              </IconButton>
              <h1>ITF</h1>

              <IconButton onClick={handleNavigate} className="icons-btn">
                <Logout src={img} />
              </IconButton>
            </div>
          </div>
          <div className="section-2-blc-2 cmp pad">
            <div className="header-sec-2-blc-2">
              <div className="first">
                <ShowChart />
                <p>Analyse</p>
              </div>
              <div className="second">
                <div className="btn-one">
                  <p>Semmaine</p>
                </div>
                <div className="btn-one">ordre</div>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </div>
            </div>
            <div className="main-content-sec-2-blc-2">
              <LineChart />
            </div>
          </div>
          <div className="section-2-blc-3 cmp pad">
            <div className="header-sec-2-blc-3">
              <p>Taux de Declaration</p>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <div>
              <HeatMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
