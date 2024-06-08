import React from "react";
import "./___activitie.scss";
import CardActivitie from "./content/CardActivitie";

import img1 from "../../../../assets/branding/img/400x500/img7.jpg";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { NorthEast } from "@mui/icons-material";
const Activitie = () => {
  const cardcontent = [
    {
      headerContent: "Engagement a un contrat de travail",
      cardData: {
        titleCard: "Contrat",
        contentCard: "Regulariser votre contrat",
        Image: img1,
      },
      footterCard: {
        contentCard:
          "Enregister votre contrat de travail  aupres de chez nous a fin de regulariser votre entreprise",
      },
    },
    {
      headerContent: "Reglement Interieur",
      cardData: {
        titleCard: "Reglement Interieur",
        contentCard: "Regulariser votre entreprise",
        Image: img1,
      },
      footterCard: {
        contentCard:
          "Il est imporant de faire un Reglement Interieur , Veuiller vous engager A le faire chaque année",
      },
    },
    {
      headerContent: "Differend",
      cardData: {
        titleCard: "Differend",
        contentCard: "Reglement des differends",
        Image: img1,
      },
      footterCard: {
        contentCard: "Nous sommes la pour vous aider sur ce",
      },
    },
  ];
  return (
    <div className="activitie-super-container">
      <div className="activitie-title">
        <h1>Nos Services</h1>
      </div>
      <div className="list">
        {cardcontent.map((ctn, index) => (
          <div key={index} className="card-activitie">
            <>
              <div className="header-list">
                <p>{ctn.headerContent}</p>
              </div>
              <CardActivitie
                titleCard={ctn.cardData.titleCard}
                contentCard={ctn.cardData.contentCard}
              />
              <div className="fotter-list">
                <h3>{ctn.cardData.titleCard}</h3>
                <p>{ctn.footterCard.contentCard}</p>
              </div>
            </>
          </div>
        ))}
      </div>
      <div className="button-caontainer">
        <ButtonAnnimate
          title={"Regulariser vous aupres de l'etats"}
          component={<NorthEast />}
        />
      </div>
    </div>
  );
};

export default Activitie;
