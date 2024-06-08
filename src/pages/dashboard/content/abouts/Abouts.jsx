import { ArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Particules from "../../../../components/Particules";
import Profile from "../../layout/profile/Profile";
import "./_about.scss";
const Abouts = () => {
  const navigate = useNavigate();
  function handleNavigate(params) {
    navigate("/dashboard/home");
  }
  return (
    <div>
      <Particules />
      <div className="main-about-container">
        <div className="body-admin">
          <div className="header">
            <div className="action-container">
              <div className="back-btn" onClick={() => handleNavigate()}>
                <IconButton className="icons">
                  <ArrowLeft />
                </IconButton>
                <p>Retour</p>
              </div>
              <Profile />
            </div>
            <h1 className="a-propos">A propos </h1>
            <div className="section-one">
              <h1>
                Inspection du Travail : Garant de l'Equite et de la Securite au Travail
              </h1>
              <p>
                L'Inspection du Travail est une institution essentielle qui veille au respect des droits des travailleurs et à l'application des lois du travail. Son rôle principal est de garantir des conditions de travail justes, sûres et équitables pour tous les employés. Les inspecteurs du travail interviennent pour s'assurer que les entreprises respectent les normes en matière de santé, de sécurité et de conditions de travail. Ils jouent également un rôle crucial dans la médiation des conflits entre employeurs et employés, aidant à résoudre les différends et à promouvoir un environnement de travail harmonieux. En sensibilisant et en éduquant les employeurs et les employés sur leurs droits et obligations, l'Inspection du Travail contribue à améliorer la qualité de vie professionnelle et à renforcer la justice sociale au sein de la société.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
