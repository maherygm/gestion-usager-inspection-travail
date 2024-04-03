import { ArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Profile from "../../layout/profile/Profile";
import { useNavigate } from "react-router-dom";
import Particules from "../../../../components/Particules";
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, accusantium?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                voluptates obcaecati laborum vel, facere dicta soluta
                praesentium eligendi veniam? Aliquid animi odit aspernatur
                culpa. Quia aperiam impedit eaque ex nemo voluptatibus nam ipsa
                in, amet illo? Quis ex earum tempora quaerat excepturi, minima
                dolores assumenda deserunt eius, officia repellat totam modi
                magni unde nisi maiores eum nobis? Porro, placeat doloribus
                molestiae quia aspernatur ad ipsa ea aut eos incidunt vel
                deserunt, quae vero! Corrupti necessitatibus voluptates aperiam,
                veniam soluta dignissimos corporis dolor nesciunt ipsum, quas
                sequi dolorem fugit. Voluptatum autem voluptatem nobis vel fuga
                nostrum perferendis expedita doloribus assumenda esse?

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
