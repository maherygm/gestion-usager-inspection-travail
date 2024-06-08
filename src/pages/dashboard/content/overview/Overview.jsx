import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./__overview.scss";
import HeatMap from "./content/heatmap/HeatMap";
import LineChart from "./content/lineChart/LineChart";
import RadialChart from "./content/radial/RadialChart";

import {
  Earbuds,
  Logout,
  MoreHoriz,
  Notifications,
  Restore,
  Settings,
  ShowChart,
} from "@mui/icons-material";
import gsap from "gsap";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import img from "../../../../assets/branding/supernova/RealTyMinimize.png";

import "moment/locale/fr";
import { useSelector } from "react-redux";
const Overview = () => {
  const navigate = useNavigate();

  const data = useSelector(element => element.dossierReducer);



  function handleNavigate() {
    navigate("/dashboard/home");
  }

  //tonga de eto fotsiny ny donnee no ovaina sy ny logique
  //const dataRI = [50, 70, 20];
  //const dataDiff = [25, 90, 60];
  //const dataCT = [10, 50, 20];



  function annimate(params) {
    for (let index = 0; index < dataBar.length; index++) {
      gsap.to(`.blc-${index + 1}-chart-three`, {
        height: `${dataBar[index] <= 10 ? 10 : dataBar[index]}%`,
        delay: 0.5 + index * 0.1,
        duration: 1,
        ease: "power1.in",
      });
    }
  }

  const processDataByType = (data) => {
    const counts = {
      'reglement interieur': { traite: 0, en_cours: 0, refuse: 0, total: 0 },
      'differend': { traite: 0, en_cours: 0, refuse: 0, total: 0 },
      'contrat de travail': { traite: 0, en_cours: 0, refuse: 0, total: 0 },
    };

    // Counting the number of cases for each type and state
    data.forEach(item => {
      const dossier = item.dossier;
      const type = dossier.types.toLowerCase();
      const etat = dossier.etats.trim().replace(" ", "_").toLowerCase();

      if (counts[type]) {
        if (counts[type][etat] !== undefined) {
          counts[type][etat]++;
        }
        counts[type].total++;
      }
    });

    const toPercentage = (count, total) => (total === 0 ? 0 : (count / total * 100).toFixed(2));

    const dataRI = [
      toPercentage(counts['reglement interieur'].traite, counts['reglement interieur'].total),
      toPercentage(counts['reglement interieur'].en_cours, counts['reglement interieur'].total),
      toPercentage(counts['reglement interieur'].refuse, counts['reglement interieur'].total),
    ];

    const dataDiff = [
      toPercentage(counts['differend'].traite, counts['differend'].total),
      toPercentage(counts['differend'].en_cours, counts['differend'].total),
      toPercentage(counts['differend'].refuse, counts['differend'].total),
    ];

    const dataCT = [
      toPercentage(counts['contrat de travail'].traite, counts['contrat de travail'].total),
      toPercentage(counts['contrat de travail'].en_cours, counts['contrat de travail'].total),
      toPercentage(counts['contrat de travail'].refuse, counts['contrat de travail'].total),
    ];

    return { dataRI, dataDiff, dataCT };
  };

  const { dataRI, dataDiff, dataCT } = processDataByType(data);

  const [dataBar, setdataBar] = useState([...dataRI]);


  const [activeElement, setactiveElement] = useState("ri");

  function handleClickBarChange(element) {
    switch (element) {
      case "diff":

        setactiveElement(element);
        setdataBar([...dataDiff]);

        console.table(dataDiff);
        break;
      case "ri":
        setactiveElement(element);
        setdataBar([...dataRI]);
        console.table(dataRI);
        break;
      case "ct":
        setactiveElement(element);
        setdataBar([...dataCT]);
        console.table(dataCT);
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
                  className={`btn-one ${activeElement === "diff" ? activeElement : ""
                    }`}
                  onClick={() => handleClickBarChange("diff")}
                >
                  <p>Differend</p>
                </div>
                <div
                  className={`btn-one ${activeElement === "ri" ? activeElement : ""
                    }`}
                  onClick={() => handleClickBarChange("ri")}
                >
                  Reglement Interieur
                </div>
                <div
                  className={`btn-one ${activeElement === "ct" ? activeElement : ""
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
                  <p> Notre notes par semaines</p>
                </div>
                <div className="three-bloc">
                  <div className="blc blc-1-chart-three">
                    <p>Traitée</p>
                  </div>
                  <div className="blc blc-2-chart-three">
                    <p>En cours</p>
                  </div>
                  <div className="blc blc-3-chart-three">
                    <p>Refuseé</p>
                  </div>
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
                <RadialChart data={data} />
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
              <LineChart data={data} />
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
              <HeatMap data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
