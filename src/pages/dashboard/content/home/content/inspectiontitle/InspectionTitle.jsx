import React from "react";
import "./__inspectionTitle.scss";
const InspectionTitle = ({ img }) => {
  return (
    <div className="main-container-ins-title">
      <div className="image-inspection">
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={img}
          alt=""
        />
      </div>
      <div className="tiitle">
        <p>SERVICE REGIONALE DE L'INSPECTION DE TRAVAIL FIANARANTSOA</p>
      </div>
    </div>
  );
};

export default InspectionTitle;
