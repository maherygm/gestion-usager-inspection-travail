import React from "react";
import "./__card.scss";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../../../../../../hooks/useColorGenerate";
const Card = ({ usager }) => {
  return (
    <div className="card-main-container-usager">
      <div className="header-card">
        <Avatar
          variant="circular"
          {...stringAvatar(usager.nom + " " + usager.prenom)}
        />
        <div>
          <h4>{usager.nom}</h4>
          <p>{usager.prenom}</p>
        </div>
      </div>
      <div className="footter-card">
        <h4>Adresse </h4>
        <p>{usager.adresse}</p>
      </div>
      <div className="body-card">
        <p className="sexe">{usager.sexe}</p>
      </div>
    </div>
  );
};

export default Card;
