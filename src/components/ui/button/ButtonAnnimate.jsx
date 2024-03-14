import React from "react";
import "./__buttonAnnimation.scss";
const ButtonAnnimate = ({ onClick, title, component }) => {
  return (
    <div onClick={onClick} className="button-annimate-container">
      <div className="swipe"></div>
      <div className="title-containner">
        {title} {component}
      </div>
    </div>
  );
};

export default ButtonAnnimate;
