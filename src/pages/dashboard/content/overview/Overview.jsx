import React, { useEffect, useRef, useState } from "react";
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
import gsap from "gsap";
import moment from "moment/moment";

import "moment/locale/fr";
const Overview = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboard/home");
  }

  //tonga de eto fotsiny ny donnee no ovaina sy ny logique
  const dataRI = [50, 70, 20, 40, 10];
  const dataDiff = [25, 90, 60, 40, 60];
  const dataCT = [10, 50, 20, 40, 80];

  const [dataBar, setdataBar] = useState([...dataRI]);

  function annimate(params) {
    for (let index = 0; index < dataBar.length; index++) {
      gsap.to(`.blc-${index + 1}-chart-three`, {
        height: `${dataBar[index]}%`,
        delay: 0.5 + index * 0.1,
        duration: 1,
        ease: "power1.in",
      });
    }
  }

  const [activeElement, setactiveElement] = useState("ri");

  function handleClickBarChange(element) {
    switch (element) {
      case "diff":
        setactiveElement(element);
        setdataBar([...dataDiff]);
        break;
      case "ri":
        setactiveElement(element);
        setdataBar([...dataRI]);
        break;
      case "ct":
        setactiveElement(element);
        setdataBar([...dataCT]);
        break;
      default:
        break;
    }
  }

  useEffect(() => annimate());

  const [userConnected, setUserConnected] = useState({
    utilisateur: {
      fonction: {
        poste: "Développeur",
        typeUtilisateur: "",
      },
      image: {
        data: "base64-encoded-image-data",
        contentType: "",
      },
      nom: "",
      prenom: "",
      email: "",
      dateNaissance: "Thu Aug 20 1987 14:10:00 GMT+0300",
      motsDePasse: "root",
    },
  });

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("connnectedUser"));
    setDateNow(moment().locale("fr").format("LLLL"));
    setUserConnected({
      ...user,
    });

    changeDate();
  }, []);

  const [dateNow, setDateNow] = useState();

  function changeDate(params) {
    moment().locale("fr").format("LLLL");

    console.log(moment.locale("fr"));
  }

  setInterval(() => {
    setDateNow(moment().locale("fr").format("LLLL"));
  }, 20000);
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
                <div
                  className={`btn-one ${
                    activeElement === "diff" ? activeElement : ""
                  }`}
                  onClick={() => handleClickBarChange("diff")}
                >
                  <p>Differend</p>
                </div>
                <div
                  className={`btn-one ${
                    activeElement === "ri" ? activeElement : ""
                  }`}
                  onClick={() => handleClickBarChange("ri")}
                >
                  Reglement Interieur
                </div>
                <div
                  className={`btn-one ${
                    activeElement === "ct" ? activeElement : ""
                  }`}
                  onClick={() => handleClickBarChange("ct")}
                >
                  Contrat de travail
                </div>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </div>
            </div>
            <div className="section-1-bloc-principale">
              <div className="main-three-container">
                <div className="chiffre">
                  <h2>43 %</h2>
                  <p> rating increase every week</p>
                </div>
                <div className="three-bloc">
                  <div className="blc blc-1-chart-three"></div>
                  <div className="blc blc-2-chart-three"></div>
                  <div className="blc blc-3-chart-three"></div>
                  <div className="blc blc-4-chart-three"></div>
                  <div className="blc blc-5-chart-three"></div>
                </div>
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
                    <p>{dateNow ? dateNow : "mercredi 27 mars 2024 21:01"}</p>
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
                  <Avatar
                    src={
                      userConnected.utilisateur.image.contentType
                        ? userConnected.utilisateur.image.contentType
                        : ""
                    }
                    className="icons"
                  />
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
