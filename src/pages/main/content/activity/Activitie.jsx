import React from "react";
import "./___activitie.scss";
import CardActivitie from "./content/CardActivitie";

import img1 from "../../../../assets/branding/img/400x500/img7.jpg";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { NorthEast } from "@mui/icons-material";
const Activitie = () => {
  const cardcontent = [
    {
      headerContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Null necessitatibus molestiae eaque cumque inventore corpori facere iste optio sequi fugit.",
      cardData: {
        titleCard: "Usager",
        contentCard: "Lorem ipsum dolor sit amet.",
        Image: img1,
      },
      footterCard: {
        contentCard:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla necessitatibus molestiae eaque cumque inventore corporis facere iste optio sequi fugit.",
      },
    },
    {
      headerContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Null necessitatibus molestiae eaque cumque inventore corpori facere iste optio sequi fugit.",
      cardData: {
        titleCard: "Usager",
        contentCard: "Lorem ipsum dolor sit amet.",
        Image: img1,
      },
      footterCard: {
        contentCard:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla necessitatibus molestiae eaque cumque inventore corporis facere iste optio sequi fugit.",
      },
    },
    {
      headerContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Null necessitatibus molestiae eaque cumque inventore corpori facere iste optio sequi fugit.",
      cardData: {
        titleCard: "Usager",
        contentCard: "Lorem ipsum dolor sit amet.",
        Image: img1,
      },
      footterCard: {
        contentCard:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla necessitatibus molestiae eaque cumque inventore corporis facere iste optio sequi fugit.",
      },
    },
  ];
  return (
    <div className="activitie-super-container">
      <div className="activitie-title">
        <h1>Different destinations</h1>
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
          title={"And more than 50 other destinations"}
          component={<NorthEast />}
        />
      </div>
    </div>
  );
};

export default Activitie;
