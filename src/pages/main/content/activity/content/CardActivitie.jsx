import React from "react";
import "./__cardActivitie.scss";
import image_7 from "../../../../../assets/branding/img/400x500/img7.jpg";
const CardActivitie = ({ titleCard, contentCard }) => {
  return (
    <div className="Card-activitie-container">
      <div
        className="image-container"
        style={{
          background: `url(${image_7})`,
        }}
      >
        <div className="blur-component">
          <div className="title-card">
            <h3>{titleCard}</h3>
            <p>{contentCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardActivitie;
