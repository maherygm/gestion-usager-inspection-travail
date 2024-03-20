import React, { useEffect, useRef, useState } from "react";
import "./__buttonStyled.scss";
import { Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const ButtonStyled = ({
  sx,
  backgroundColorWave,
  icons,
  title,
  links,
  size,
  color,
  className,
  onMouseEnter,
  onClick,
}) => {
  const [position, setposition] = useState({ x: 0, y: 0 });

  function annimate(params) {
    const el = params.target;

    const x = (params.clientX - el.offsetLeft) / el.offsetWidth;
    const y = (params.clientY - el.offsetTop) / el.offsetHeight;

    console.log(x, y);

    setposition({ x: x, y: y });
  }
  return (
    <NavLink to={links} onMouseEnter={onMouseEnter} className={className}>
      <div className="main-container-btn-styled" style={sx} onClick={annimate}>
        <div
          className="wave"
          style={{
            left: `calc(100%*${position.x})`,
            top: `calc(100%*${position.y})`,
            background: `${backgroundColorWave}`,
            ...size,
          }}
        ></div>
        <div className="main">
          <div
            style={{
              color: color,
            }}
          >
            {icons ? icons : <Home />}
          </div>
          <p
            style={{
              color: color,
            }}
          >
            {title ? title : "Home"}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ButtonStyled;
